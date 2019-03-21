<template>
  <!-- 组件的组件 listview 的插槽位于 scroll -->
  <!-- data 接收传递过来的值 singer, props 下即为监听 singer变化 -->
  <scroll
    @scroll="scroll"
    :listen-scroll="listenScroll"
    :probe-type="probeType"
    :data="data"
    class="listview"
    ref="listview">

    <!-- 左侧列表 - 数据展示 -->
    <ul>
      <li v-for="(group, index) in data" :key="index"
          class="list-group"
          ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <uL>
          <li
              @click="selectItem(item)"
              v-for="(item, index) in group.items"
              :key="index"
              class="list-group-item">
            <img class="avatar" v-lazy="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </uL>
      </li>
    </ul>

    <!-- 右侧快速入口 -->
    <div class="list-shortcut"
         @touchstart.stop.prevent="onShortcutTouchStart"
         @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop>
      <ul>
        <li v-for="(item, index) in shortcutList"
            :key="index"
            :data-index="index"
            :class="{'current':currentIndex===index}"
            class="item"
            >{{item}}
        </li>
      </ul>
    </div>


    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}} </div>
    </div>

    <!-- loading组件 -->
    <div v-show="!data.length" class="loading-container">
      <loading></loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  // 万恶的 BetterScroll
  import Scroll from '@/base/scroll/scroll'
  import Loading from '@/base/loading/loading'
  import { getData } from '@/assets/js/dom'

  const TITLE_HEIGHT = 30
  const ANCHOR_HEIGHT = 18

  export default {
    // 父级传参
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    // 计算属性
    computed: {
      // 父级数据 singer 的小许处理
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      },
      // 滚动到哪就显示对应 title
      fixedTitle() {
        if (this.scrollY > 0) {
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
      }
    },
    // 自定义属性 - 类似于实例属性??
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    // 相当于 ngOninit??
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
    },
    methods: {
      // 计算列表中每个 item 的高度并塞入 listHeight
      _calculateHeight() {
        let height = 0
        const list = this.$refs.listGroup
        this.listHeight = []
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      // 路由跳转的实质
      selectItem(item) {
        this.$emit('select', item)
      },

      onShortcutTouchStart(e) {
        // getAttributes方法集成 专用于获取自定义属性 data-index
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex
        // 滑动
        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        // 获取两个y的距离，并除以元素大小并 Math.floor 取整，以获得两个 index 之间的差值
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        // 滑动
        this._scrollTo(anchorIndex)
      },
      refresh() {
        this.$refs.listview.refresh()
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      // 限制 index 并调用万恶的BetterScroll
      _scrollTo(index) {
        if (!index && index !== 0) {
          return
        }
        // index 范围
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        // 联动关键：右侧 index 对应左侧滚动距离
        this.scrollY = -this.listHeight[index]
        // 父级(div).scrollToElement.子级(ul-index)
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      }
    },
    watch: {
      // 监听传入的 data 值
      // DOM 计算好后计算高度
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      // 监听 scrollY 并及时处理
      scrollY(newY) {
        // 存储 listItem 所有高度值的数组
        const listHeight = this.listHeight
        // 当滚动到顶部，newY>0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          // 遍历 判断在哪个区间
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      },
      // 监听 diff 实现动画上挤的关键
      // 首个 fixTop 是绝对定位的，diff 是每个 listItem 的 title 与上面的距离
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        console.log(this.fixedTop);
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    components: {
      Scroll,
      Loading
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
