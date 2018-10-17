<template>
  <div class="public-layout">
    <app-main></app-main>
    <!--底部TabBar-->
    <tab-bar :items="items"> </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar'
  import AppMain from './components/AppMain'
  export default {
    name: 'PublicLayout',
    components: {TabBar, AppMain},
    data () {
      return {
        items: [
          {
            icon: 'icon-idcard',
            text: '信用卡',
            key: 0,
            path: 'credit'
          },
          {
            icon: 'icon-loan',
            text: '贷款',
            key: 1,
            path: 'loan'
          },
          {
            icon: 'icon-vip',
            text: '会员',
            key: 2,
            path: 'member'
          },
          {
            icon: 'icon-man',
            text: '我的',
            key: 3,
            path: 'user'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.public-layout{
  .footer{
    display: flex;
  }
}
</style>