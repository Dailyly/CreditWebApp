<template>
  <div class="login">
    <div class="form">
      <div class="form__content">
        <div class="form-field">
          <div class="form-field__title">
            <span>手机号</span>
          </div>
          <div class="vertical-line">
            <span></span>
          </div>
          <div class="form-field__value">
            <div class="form-field__body">
              <input class="input" type="tel" maxlength=11 placeholder="请输入11位手机号码" v-model="phone.value"  @blur="phone.show=false" @input="phone.show=true" @focus="phone.show=true">
              <div class="form-field__icon" @click="clearInput('phone')" :class="{active: phone.value && phone.show}">
                <i class="iconfont icon-clear"></i>
              </div>
            </div>
            <div class="form-field__errorMsg" v-if="phone.errMsg">{{phone.errMsg}}</div>
          </div>
        </div>

        <!--验证码-->
        <div class="form-field">
          <div class="form-field__title">
            <span>验证码</span>
          </div>
          <div class="vertical-line">
            <span></span>
          </div>
          <div class="form-field__value">
            <div class="form-field__body">
              <input class="input" type="text" placeholder="请输入验证码" v-model="code.value"  @blur="code.show=false" @input="code.show=true" @focus="code.show=true">
              <div class="form-field__icon" @click="clearInput('code')" :class="{active: code.value && code.show}">
                <i class="iconfont icon-clear"></i>
              </div>
              <div class="vertical-line">
                <span></span>
              </div>
              <div class="form-field__button" :class="{'form-field__disabled': code.msg != '获取验证码'}">
                <button 
                  @click="handleSendCode"
                  :disabled="code.msg != '获取验证码'"
                >
                  {{code.msg}}
                </button>
              </div>
            </div>
            <div class="form-field__errorMsg"  v-if="code.errMsg">{{code.errMsg}}</div>
          </div>
        </div>
      </div>
      <div class="reg-protocol">
        <input type="checkBox" v-model="checked">
        <span class="reg-protocol__text">
          我已阅读并同意<router-link to="/user" class="reg-protocol__link">《用户注册协议及隐私保护政策》</router-link>
        </span>
      </div>
      <div class="submit_content">
        <button class="submit_content__button">完成</button>
      </div>
    </div>
    <van-toast></van-toast>
  </div>
</template>

<script>
  import {checkPhone} from '@/utils/validate'
  export default {
    name: 'Login',
    data () {
      return{
        phone: {
          value: '',
          show: true,
          errMsg: ''
        },
        code: {
          value: '',
          show: true,
          errMsg: '',
          msg: '获取验证码'
        },
        timeCount: 60,
        checked: false
      }
    },
    computed: {
    },
    watch: {
      'phone.value': function(){
        const {value} = this.phone
        if (value && !Number(value)) {
          this.phone.errMsg = '请填写正确的手机号'
        } else {
           this.phone.errMsg = ''
        }
      }
    },
    methods: {
      clearInput (key) {
        this[key].value = ''
      },
      handleSendCode () {
        const {value} = this.phone
        if (!checkPhone(value)) {
          console.log(this)
          this.$toast('请填写正确的手机号')
          return
        } 
        this.sendCode()
      },
      sendCode () {
        if (!this.timeCount) {
          this.code.msg = '获取验证码'
          this.timeCount = 60
          return
        }
        this.code.msg = this.timeCount + 's后重新获取'
        this.timeCount--
        setTimeout(this.sendCode, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  .form{
   flex: 1;
   margin-top: 0.11rem;
  }
  .form-field{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background: #fff;
    height: 0.98rem;
    border-top: 0.01rem solid #EFEDEF;
    border-bottom: 0.01rem solid #EFEDEF;
    margin-top: 0.2rem;
    &__title{
      width: 0.96rem;
      font-size: .32rem;
      color: #4A4A4A;
      padding: 0 .3rem;
      line-height: 0.98rem;
    }
    &__value{
      flex: 1;
      font-size: .28rem;
      input{
        border: none;
        width: 100%;
        display: block;
        box-sizing: border-box;
      }
    }
    &__body{
      position: relative;
      display: flex;
      height: 0.98rem;
    }
    &__icon{
      color: #ccc;
      opacity: 0;
      padding-right: 0.2rem;
      line-height: 0.98rem;
      /* background: pink; */
      font-size: 0.28rem;
    }
    &__button{
      flex-shrink: 0;
      opacity: 1;
      line-height: 0.98rem;
      padding: 0 .15rem;
      button{
        border: none;
        background: transparent;
        font-size: 0.32rem;
        color: #8E6C2D;
      }
    }
    &__disabled{
      opacity: 0.5;
    }
    &__errorMsg{
      color: #f44;
      font-size: .25rem;
    }
    .active{
      opacity: 1;
    }
  }
  .submit_content{
    margin-top: 3.71rem;
    display: flex;
    padding:0 .7rem;
    &__button{
      width: 6.1rem;
      height: 0.96rem;
      line-height: 0.96rem;
      font-size: 0.36rem;
      color: #fff;
      border-color: transparent;
      background-color: #A99164;
      border-radius: 0.12rem;
    }

  }
  .vertical-line{
    line-height: 0.98rem;
    span{
      display: block;
      border: 0.01rem solid red;
      height: 0.4rem;
    }
  }
  .reg-protocol{
    margin-top: 0.45rem;
    font-size: 0.24rem;
    text-align: center;
    &__text{
      color: #4A4A4A;
    }
    &__link{
      color: #A58B5A;
    }
  }
}
</style>