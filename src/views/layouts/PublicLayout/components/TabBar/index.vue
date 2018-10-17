<template>
  <div class="tab-bar" :style="style">
    <div class="tab-bar-item" 
      v-for="(item, index) in handleItems"
      :key="index"
      :class="{active: item.active}"
      @click="changeTabbar(item.key)"
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
        const {items, $route: {name}} = this
        return Object.assign([],items).forEach( item => {
           item.active = name === item.key
        })
      }
    },
    watch: {
      '$route.name': () => {

      }
    },
    methods: {
      changeTabbar (e) {
        console.log(e.target, '大大大')
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
    .active{
      color: blue;
    }
    &__icon{
      .iconfont{
        font-size: .5rem;
      }
    }
    &__text{
      font-size: .2rem;
    }
  }
}
</style>