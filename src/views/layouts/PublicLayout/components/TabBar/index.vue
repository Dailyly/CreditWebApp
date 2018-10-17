<template>
  <div class="tab-bar" :style="style">
    <div class="tab-bar-item" 
      v-for="(item, index) in handleItems"
      :key="index"
      :class="{active: item.active}"
      @click="changeTabbar(item.path)"
    >
      <div class="tab-bar-item__icon">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <div class="tab-bar-item__text">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
  const defaultStyle = {
    width: '100%',
    height: '1rem'
  }
  export default {
    name: 'TabBar',
    props: {
      options: Object,
      items: Array
    },
    data () {
      return {

      }
    },
    created () {
      console.log(this.$route)
    },
    computed: {
      style () {
        return Object.assign(defaultStyle, this.options)
      },
      handleItems () {
        const {items, $route: {meta: {key}}} = this
        let arr = _.cloneDeep(items)
        arr.forEach( item => {
           item.active = key === item.key
        })
        return arr
      }
    },
    watch: {
      '$route.name': () => {

      }
    },
    methods: {
      changeTabbar (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab-bar{
  display: flex;
  background: #ccc;
  position: fixed;
  left: 0;
  bottom: 0;
  &-item{
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &__icon{
      .iconfont{
        font-size: .5rem;
      }
    }
    &__text{
      font-size: .2rem;
    }
  }
  .active{
    color: orange;
  }
}
</style>