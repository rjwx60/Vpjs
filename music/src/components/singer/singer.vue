<template>
  <div class="singer" ref="singer">
    <!-- 将处理好的结果 singers 传递给组件 list-view -->
    <!-- @selected 自定义事件，组件内实现-->
    <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import Singer from '@/assets/js/singer'
  import ListView from '@/base/listview/listview'
  import { ERR_OK } from '@/api/config'
  import { mapMutations } from 'vuex'
  import { getSingerList } from '@/api/singer'
  import { playlistMixin } from '@/assets/js/mixin'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    mixins: [playlistMixin],
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      // 获取歌手列表
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list)
          }
        })
      },
      // 获取歌手列表 - 数据处理, 先聚合后分类排序
      _normalizeSinger(list) {
        // 聚合处理
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })
        // 分类排序处理
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        // console.log(hot.concat(ret))
        // 最后得到一个分别跟字母对应的数组列表
        return hot.concat(ret)
      },
      // 路由跳转
      selectSinger(singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        // Vuex 状态传递
        this.setSinger(singer)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      }),
      // Vuex
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.singer.style.bottom = bottom
        this.$refs.list.refresh()
      },
    },
    components: {
      ListView
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
