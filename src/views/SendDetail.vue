<template>
  <div class="senddetail">
    <div class="senddetail-container">
      <div class="senddetail-container-tab">
        <tab active-color='#ff750f'>
          <tab-item
            v-for="item in showList" 
            :selected="show === item['type']"
            :key="item['type']"
            @on-item-click="changeShow(item)">
            {{item['cnName']}}
          </tab-item>
        </tab>
      </div>

      <div class="senddetail-cell">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          ref="my_scroller_senddetail"
          class="senddetail-scroller">
          <mj-spinner type="line" slot="refresh-spinner"></mj-spinner>
          <div 
            class="senddetail-cell-detail" 
            v-for="item in data['list']" 
            :key="item.id"
            v-show="handleIsShow(item.type)"
          >
            <mj-senditem :item="item"></mj-senditem>
          </div>
          <mj-spinner type="circle" slot="infinite-spinner"></mj-spinner>
        </scroller>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { storage } from '@/util'

export default {
  name: 'senddetail',
  created () {
    const {type} = this.$route.query
    const localtype = storage({
      type: 'get',
      key: 'senddetail_switch_type'
    })
    this.show = type || localtype || 'wait'
  },
  mounted () {
    window.document.title = '寄件列表'
  },
  computed: {
    ...mapGetters({
      data: 'getSend',
      switchtype: 'getSendSwitch'
    })
  },
  data () {
    return {
      show: 'wait',
      showList: [{
        type: 'all',
        cnName: '全部'
      }, {
        type: 'wait',
        cnName: '待寄件'
      }, {
        type: 'ready',
        cnName: '待收货'
      }, {
        type: 'cancle',
        cnName: '已完成'
      }],
      typeShowList: {
        'all': [],
        'wait': [1, 8],
        'ready': [2, 3],
        'cancle': [4]
      }
    }
  },
  methods: {
    ...mapActions([
      'setSend',
      'cancleSend'
    ]),
    changeShow (item) {
      storage({
        type: 'set',
        key: 'senddetail_switch_type',
        val: item.type
      })
      this.show = item.type
    },
    handleIsShow (type) {
      const isShowList = this.typeShowList[this.show]
      if (type === 5) {
        return false
      }
      if (isShowList.length === 0) {
        return true
      }
      if (isShowList.indexOf(Number(type)) !== -1) {
        return true
      }
      return false
    },
    showToast (data) {
      this.$vux.toast.show({
        text: data.text || '出错啦',
        type: data.type || 'warn',
        width: '20rem'
      })
    },
    goPath (item, type) {
      this.$router.push({path: 'qr', query: item})
    },
    async cancle (item) {
      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
      this.$vux.confirm.show({
        title: '确定取消这一订单吗?',
        onCancel () {
        },
        async onConfirm () {
          this.$vux.loading.show({
            text: '正在取消'
          })
          const res = await _this.cancleSend({
            brand: item.brand,
            describe: item.describe,
            note: item.note,
            office: item.officeId,
            order: item.order,
            receiptAddressId: item.receiptAddressId,
            sendAddressId: item.sendAddressId,
            sum: item.sum,
            type: 5})
          _this.$vux.loading.hide()
          _this.showToast(res)
        }
      })
    },
    showOffice ({province = '', city = '', district = '', descript = ''}) {
      const content = province + city + district + descript
      this.showToast({
        text: content,
        type: 'text'
      })
    },
    refresh (done) {
      const _this = this
      setTimeout(async function () {
        const result = await _this.setSend()
        if (result.type !== 'success') {
          _this.showToast(result)
        }
        done(true)
      }, 1200)
    },
    infinite (done) {
      const _this = this
      setTimeout(async function () {
        const result = await _this.setSend()
        if (result.type !== 'success') {
          _this.showToast(result)
        }
        done(true)
      }, 1500)
    }
  },
  watch: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/styles/colors.less';
@import '../assets/styles/helpers.less';
.scroll-container {
  padding: 0 1rem;
}

.office-info {
  font-size: 1.5rem;
  width: 15rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.border-bottom-grey {
  border-bottom: 1px solid @borderbt;
}
.send-icon {
  border-radius: 50%;
  background: #BEB9B9;
  color: white;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.3rem;
  line-height: 3rem;
  text-align: center;
}

.sum-money {
 font-size: 1.4rem;
 color: @dark-yellow;
}

.normal-btn {
  width: 6.6rem;
  font-size: 1.4rem;
  text-align: center;
  padding: .5rem .4rem;
  border-radius: 5px;
  box-sizing: border-box;
  white-space: nowrap;
}

.cancle-btn {
  .normal-btn;
  color: #999;
  margin-right: .3rem;
  border: 1px solid #999;
  background: transparent;
}

.gosend-btn {
  .normal-btn;
  color: white;
  border: none;
  background: @dark-yellow;
  border: 1px solid @dark-yellow;
}

.senddetail {
  &-container {
    &-tab {
      position: fixed;
      width: 100%;
      z-index: 1000;
    }
  }
  &-cell {
    &-status {
      font-size: 1.6rem;
      text-align: left;
      padding: 1rem;
      padding-bottom: 0;
    }
    &-detail {
      background: white;
      text-align: justify;
      padding: 0 15px;
      margin: 1rem 0;
      &--box {
        padding: .5rem 0;
      }
      &__title {
        font-size: 1.6rem;
        img {
          width: auto;
          height: 2rem;
          vertical-align: top;
        }
      }
      p {
        font-size: 1.4rem;
        padding: .2rem 0;
      }
      .middle-box {
        color: #999;
      }
      .wait-senddetail {
        float: right;
        color: @dark-yellow;
        padding-top: .3rem;
      }
      .already-senddetail {
        float: right;
        color: #999;
        padding-top: .3rem;
      }
      .time {
        font-size: 1.2rem;
        color: #333;
      }
    }
  }
  &-scroller {
    padding-top: 44px;
  }
}
</style>
