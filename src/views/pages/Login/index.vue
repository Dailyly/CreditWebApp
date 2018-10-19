<template>
  <div class="login">
    <h3>欢迎来到登录界面</h3>
    <div class="form">
      <div class="form__content">
        <div class="form-field">
          <div class="form-field__title">
            <span>手机号</span>
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
          <div class="form-field__value">
            <div class="form-field__body">
              <input class="input" type="text" placeholder="请输入验证码" v-model="code.value"  @blur="code.show=false" @input="code.show=true" @focus="code.show=true">
              <div class="form-field__icon" @click="clearInput('code')" :class="{active: code.value && code.show}">
                <i class="iconfont icon-clear"></i>
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
        timeCount: 60
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
  background: #c1c1c1;
  display: flex;
  flex-direction: column;
  h3{
    text-align: center;
    flex: 1;
  }
  .form{
   flex: 1;
  }
  .form__content{
      padding:.2rem;
      background: #fff;
      margin: .1rem 0;
     
    }
  .form-field{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-bottom: 1px solid #ccc;
    &__title{
      max-width: 1.8rem;
      flex: 1;
      font-size: .35rem;
      font-weight: 400;
      line-height: .8rem;
    }
    &__value{
      flex: 1;
      font-size: .35rem;
      line-height: .8rem;
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
    }
    &__icon{
      color: #ccc;
      opacity: 0;
    }
    &__button{
      flex-shrink: 0;
      padding-left: .1rem;
      opacity: 1;
      button{
        border: none;
        background: transparent;
        color: #007ACC;
        font-weight: 600;
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
    margin-top: 2rem;
    display: flex;
    padding:0 .2rem;
    &__button{
      border: 1px solid transparent;
      background-color: #f5f5f5;
      color: #444;
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0 12px;
      min-width: 52px;
      min-height: 47px;
      border-radius: 4px;
      vertical-align: top;
      text-align: center;
      text-overflow: ellipsis;
      font-size: 16px;
      line-height: 42px;
      cursor: pointer;
      border-color: transparent;
      background-color: #4a90e2;
      color: #fff;
      flex: 1;
    }

  }
}
</style>