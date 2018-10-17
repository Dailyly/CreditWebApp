<template>
  <div class="blank-page">
    <tab-bar :items="items">
      
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../layouts/PublicLayout/components/TabBar'
export default {
  name: 'BlankPage',
  components: {TabBar},
  data () {
    return {
      activeTab: 0,
      items: [
        {
          icon: 'icon-idcard',
          text: '信用卡'
        },
        {
          icon: 'icon-loan',
          text: '贷款'
        },
         {
          icon: 'icon-vip',
          text: '会员'
        },
        {
          icon: 'icon-man',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blank-page{

}
</style>