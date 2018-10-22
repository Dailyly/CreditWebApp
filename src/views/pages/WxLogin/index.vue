<template>
  <div class="wx-login">
    <div class="product">
      <div class="product-brand">
        <span></span>
      </div>
      <p class="product-name">
        超人黑卡
      </p>
      <p class="product-abstract">
        新一代赚钱神器
      </p>
    </div>
    <div class="halving-line"></div>
    <div class="login">
      <p class="login-title">登录后开发者将获得以下权限</p>
      <p class="login-intro">
        <span class="dot"></span> 获得你的公开信息（昵称、头像等）
      </p>
      <div class="login-btn" @click="jumpLogin">确认登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WxLogin',
    data() {
      return {
        key: value
      }
    },
    methods: {
      // click
      jumpLogin () {

      }
    }
  }
</script>

<style lang="scss" scoped>
.wx-login{
  overflow: hidden;
  text-align: center;
  .product{
    margin-top: 0.9rem;
    &-brand{
      span{
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        background: #D5B77E;
      }
    }
    &-name{
      font-size: 0.36rem;
      color: #4A4A4A;
      margin-top: 0.2rem;
    }
    &-abstract{
      font-size: 0.24rem;
      color: #888;
      margin-top: 0.3rem;
    }
  }
  .halving-line{
    display: inline-block;
    width: 5.65rem;
    border: 0.01rem solid #DFDBDB; 
    margin-top: 0.95rem;
  }
  .login{
    margin-top: 0.47rem;
    &-title{
      font-size: 0.36rem;
      color: #4A4A4A;
    }
    &-intro{
      margin-top: 0.29rem;
      font-size: 0.28rem;
      color: #888;
      .dot{
        box-sizing: border-box;
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        background: red;
        border-radius: 50%;
      }
    }
    &-btn{
      display: inline-block;
      margin-top: 0.77rem;
      width: 6.1rem;
      height: 0.96rem;
      line-height: 0.96rem;
      background: #46AC2F;
      border: 0.01rem solid #378F24;
      border-radius: 0.12rem;
      font-size: 0.36rem;
      color: #FFFFFF;
    }
  }
}
</style>