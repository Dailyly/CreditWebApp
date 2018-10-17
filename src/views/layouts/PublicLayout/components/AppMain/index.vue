<template>
  <section class="app-main">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain'
  }
</script>

<style lang="scss" scoped>
.app-main{

}
</style>