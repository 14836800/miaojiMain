<template>
  <div class="send">
    <div class="send-container">
      <div class="send-container-select go-sendlist">
        <group>
          <cell title="寄件列表" link="/send/detail" is-link style="padding:1rem 2.2rem;padding-left:11px;">
            <img slot="icon" class="send-icon" style="display:block;margin-right:.8rem;" src="../assets/images/new/sen_ico_lis.png" />
          </cell>
        </group>
      </div>
      <router-link to="/address?type=send&pick=1">
        <div class="send-container-address flex" style="border-bottom: 1px solid #dedede;">
            <div class="send-container-address__intro">
              <span class="bgblue">寄</span>
            </div>
            <div class="send-container-address__info">
              <div class="send-container-address__info--line">
                <div>
                  <span>
                    {{sendAddress['name']}}&nbsp;&nbsp;
                  </span>
                  <span class="address-info">
                    {{sendAddress['mobile']}}    
                  </span>
                </div>
              </div>
              <p class="address-detail-info">
              {{sendAddress['address']}}
              </p>
            </div>
            <div class="send-container-address__link">
              <router-link to="/address?type=send&pick=1">
                地址簿
              </router-link>
            </div>
        </div>
      </router-link>
      <router-link to="/address?type=pickup&pick=1">
        <div class="send-container-address flex">
          <div class="send-container-address__intro">
            <span class="bgyellow">收</span>
          </div>
          <div class="send-container-address__info">
            <div class="send-container-address__info--line">
              <div>
                <span>{{pickupAddress['name']}}&nbsp;&nbsp;</span>
                <span class="address-info">
                  {{pickupAddress['mobile']}}
                </span>
              </div>
            </div>
            <p class="address-detail-info">{{pickupAddress['address']}}</p>
          </div>
          <div class="send-container-address__link">
            <router-link to="/address?type=pickup&pick=1">
              地址簿
            </router-link>
          </div>
        </div>
      </router-link>
      <div class="send-container-select">
        <group label-width="6rem" label-align="left">
          <cell class="office" title="寄件站点" is-link link="/hallmap">{{office || '选择寄件站点'}}</cell>
          <selector direction="rtl" v-model="expresstype" placeholder="选择快递品牌"   title="快递品牌" name="district" :options="brandOption" @on-change="onChange">
          </selector>
          <x-textarea type="text" title="物品描述" :show-counter="false" :max="max" :autosize="true" placeholder="描述你的物品 (200字限制)" :rows="1" v-model="describe" :height="describe ? describe.length + 22 : 20" @on-focus="hideFooter" @on-blur="onChangeText('describe')">
          </x-textarea>
          <x-textarea type="text" title="备注" :max="max" placeholder="添加备注 (200字限制)" :autosize="true" :show-counter="false" v-model="label" :height="label ? label.length + 22 : 20" :rows="1" @on-focus="hideFooter" @on-blur="onChangeText('note')">
          </x-textarea>
        </group>
      </div>
      <div class="div-btn-sub"> 
        <button class="btn-sub" @click="submitSend">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Selector, XInput, XTextarea, Spinner } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import {storage} from '@/util'

export default {
  name: 'send',
  components: {
    Selector,
    XInput,
    XTextarea,
    Spinner
  },
  async created () {
    this.$store.commit('SET_PAGE', {page: 'send'})
    if (!this.sendAddress['id'] && !this.pickupAddress['id']) {
      this.setDefaultAddress()
    }
    let addressInfo = storage({
      type: 'get',
      key: 'addressInfo'
    })
    addressInfo = JSON.parse(addressInfo)
    this.office = addressInfo ? addressInfo.descript : ''
    const mjBrand = storage({
      type: 'get',
      key: 'send_brand'
    })
    this.expresstype = mjBrand || undefined
    this.describe = storage({
      type: 'get',
      key: 'send_describe'
    })
    this.note = storage({
      type: 'get',
      key: 'send_note'
    })
    this.initBrand({id: addressInfo ? addressInfo.userId : 0})
  },
  mounted () {
    window.document.title = '到点寄件'
  },
  beforeDestroy () {
    try {
      // 离开本页面时，要移除footer class中的hide
      const footer = window.document.getElementsByTagName('footer')[0]
      footer.className = footer.className.replace(/hide/g, '')
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    ...mapGetters({
      brand: 'getAllBrand',
      address: 'getAddress',
      sendadd: 'getSendAdd',
      sendAddress: 'getSendAddress',
      pickupAddress: 'getPickupAddress',
      result: 'getSendResult',
      openid: 'getOpenId',
      user: 'getUserInfo',
      userid: 'getUserId'
    }),
    brandOption () {
      const brand = this.brand
      let opt = []
      for (let i = 0, len = brand.length; i < len; i++) {
        const item = brand[i]
        opt.push({
          key: JSON.stringify(item),
          value: item.brand
        })
      }
      opt = opt.sort((a, b) => {
        if (b.value === '京东') {
          return 1
        } else {
          return -1
        }
      })
      return opt
    }
  },
  data () {
    return {
      max: 200,
      businesshall: '',
      goodslabel: '',
      describe: '',
      note: '',
      label: '',
      office: '',
      expresstype: undefined,
      loading: false,
      isCanBeSend: true
    }
  },
  methods: {
    ...mapActions([
      'setDefaultAddress',
      'createSend',
      'setAllBrand'
    ]),
    async initBrand ({id}) {
      const result = await this.setAllBrand({id})
      if (result.type !== 'success') {
        this.showToast({text: result.text, type: result.type})
      }
    },
    showToast ({text, type}) {
      this.$vux.toast.show({
        text,
        type,
        width: '18rem'
      })
    },
    onChange (val) {
      storage({
        type: 'set',
        key: 'send_brand',
        val
      })
      this.$store.commit('SET_SEND_ADD', {brand: val})
    },
    onChangeText (type) {
      if (type === 'describe' && this.describe) {
        storage({
          type: 'set',
          key: 'send_describe',
          val: this.describe
        })
      }
      if (type === 'note' && this.note) {
        storage({
          type: 'set',
          key: 'send_note',
          val: this.note
        })
      }
      this.showFooter()
    },
    goPath (path) {
      this.$router.push({path})
    },
    async submitSend () {
      if (!this.isCanBeSend) {
        return this.$vux.toast.show({
          text: '接口升级中，暂停服务',
          type: 'warn',
          width: '20rem'
        })
      }
      if (this.loading) return
      let addressInfo = storage({
        type: 'get',
        key: 'addressInfo'
      })
      addressInfo = JSON.parse(addressInfo)
      if (!addressInfo) {
        this.showToast({text: '请选择寄件站点', type: 'warn'})
        return
      }
      // 提交寄件
      const timestamp = 'time' + new Date().getTime()
      let expresstype = this.expresstype
      try {
        expresstype = JSON.parse(expresstype)
        expresstype = expresstype['brandId']
      } catch (e) {
        console.error(e)
        expresstype = null
      }
      console.log('expresstype', expresstype)
      try {
        this.$vux.loading.show({
          text: '  '
        })
        const openid = storage({
          type: 'get',
          key: 'openid'
        })
        let sendParam = {
          brand: expresstype,
          describe: this.describe,
          note: this.label,
          office: addressInfo.userId,
          order: timestamp,
          receiptAddressId: this.pickupAddress['id'],
          sendAddressId: this.sendAddress['id'],
          type: 1,
          openid
        }
        const result = await this.createSend(sendParam)
        console.log('res', result)
        if (result.code === 200) {
          this.showToast({text: '提交成功'})
          const id = result.obj
          if (id) {
            this.$router.push({
              path: '/sendqr',
              query: {id}
            })
          } else {
            this.$router.push({path: '/send/detail', query: {type: 'wait'}})
          }
          storage({
            type: 'remove',
            key: 'send_describe'
          })
          storage({
            type: 'remove',
            key: 'send_note'
          })
          return
        } else {
          this.showToast({text: '提交失败', type: 'warn'})
          return
        }
      } catch (err) {
        console.error(err)
      } finally {
        this.$vux.loading.hide()
      }
    },
    showFooter () {
      const footer = window.document.getElementsByTagName('footer')[0]
      footer.className = ''
      // const submitBtn = window.document.getElementsByClassName('div-btn-sub')[0]
      // submitBtn.className = submitBtn.className.replace(/fixedbottom/g, '')
    },
    hideFooter () {
      const footer = window.document.getElementsByTagName('footer')[0]
      footer.className = 'hide'
      // const submitBtn = window.document.getElementsByClassName('div-btn-sub')[0]
      // submitBtn.className += ' fixedbottom'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/styles/colors.less';
.bgblue {
  background-color: @light-blue;
}
.bgyellow {
  background-color: @dark-yellow;
}

.weui-cells {
  margin-top: 12px!important;
}

.weui-cell {
  padding-left: 18px!important;
}

.weui-cell.office.weui-cell_access{
  div.weui-cell__ft {
    font-size: 1.5rem;
    width: 100%;
    color: #333;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.go-sendlist {
  margin-bottom: 1.17647059em;
  .weui-cell {
    margin-top: 0!important;
  }
  .weui-cells {
    margin-top: 0!important;
  }
}

.send-icon {
  width: 4rem;
}

.weui-cell__bd {
  font-size: 1.5rem;
  textarea {
    text-align: right;
  }
  select {
    color: #333;
  }
}

label {
  font-size: 1.5rem;
}

.weui-cell:before {
  border-top: 1px solid @borderbt!important;
}

.fixedbottom {
  padding-top: 0!important;
  padding-bottom: 0!important;
  width: 100%;
  position: fixed;
  bottom: 0;
  button {
    width: 100%!important;
    border-radius: 0!important;
  }
}

.address-detail-info {
  white-space: nowrap;
  max-width: 19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width:320px) {
    width: 14rem;
  }
  @media (min-width:360px) {
    width: 20rem;
  }
  @media (min-width:400px) {
    width: 26rem;
  }
}

.send {
  &-container {
    padding-bottom: 6rem;
    overflow: hidden;
    &-address {
      font-size: 1.4rem;
      padding: 1rem 0;
      padding-left: 18px;
      justify-content: space-between;
      background: white;
      &:first-child {
        border-bottom: 1px solid @borderbt;
      }
      &__intro {
        flex: 1;
        margin-right: 0.5rem;
        span {
          font-size: 1.8rem;
          width: 4rem;
          height: 4rem;
          line-height: 4rem;
          display: block;
          border-radius: 50%;
          color: white;
        }
      }
      &__info {
        padding-left: .8rem;
        flex: 9;
        text-align: left;
        color: @text-color;
        &--line {
          div {
            display: flex;
            align-items: center;
          }
        }
      }
      &__link {
        white-space: nowrap;
        flex: 2;
        padding: 0 0;
        padding-right: 15px;
        text-align: right;
        height: 5rem;
        line-height: 5rem;
        a {
          color: @dark-yellow;
        }
      }
    }

    &-detail {
      margin-top: 1rem;
      font-size: 1.6rem;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      div {
        text-align: left;
        padding: 1rem;
        span {
          padding-right: .5rem;
        }
        input {
          width: 15rem;
          padding: 0.3rem;
        }
        textarea {
          width: 15rem;
          padding: 0.3rem;
        }
      }
    }
    &-select {
      label {
        text-align: left;
        padding-left: .1rem;
      }
    }
    &-hall {
      margin-top: 1rem;
      padding: 1rem 1rem;
      font-size: 1.4rem;
      background: white;
      justify-content: space-between;
      img {
        width: 3rem;
      }
    }
    .div-btn-sub {
      padding: 2rem 0rem;
      text-align: center;
      overflow: hidden;
      .btn-sub {
        color: white;
        border: none;
        padding: 1rem 0;
        font-size: 1.8rem;
        width: 92%;
        background-color: @dark-yellow;
        border: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
