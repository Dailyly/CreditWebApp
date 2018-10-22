<template>
    <div class="login">
        <div class="form">
            <div class="filed">
                <div class="filed-label">
                    <span>手机号</span>
                </div>
                <div class="filed-value">
                    <input type="tel" maxlength=11 placeholder="请输入11位手机号码" v-model="phone.value"  @blur="phone.show=false" @input="phone.show=true" @focus="phone.show=true">
                    <div class="clear" @click="clearInput('phone')" :class="{'clear-active': phone.value && phone.show}">
                        <i class="iconfont icon-clear"></i>
                    </div>
                </div>
            </div>
            <div class="error-msg" :class="{'error-msg-active': phone.errMsg}">{{phone.errMsg}}</div>
             <div class="filed">
                <div class="filed-label">
                    <span>验证码</span>
                </div>
                <div class="filed-value">
                    <input type="text" maxlength=6 placeholder="请输入6位验证码" v-model="code.value"  @blur="code.show=false" @input="code.show=true" @focus="code.show=true">
                    <div class="clear" @click="clearInput('code')" :class="{'clear-active': code.value && code.show}">
                        <i class="iconfont icon-clear"></i>
                    </div>
                    <div class="send-code" :class="{'btn-disabled': code.msg != '获取验证码'}">
                        <button 
                            @click="handleSendCode"
                            :disabled="code.msg != '获取验证码'"
                            >
                            {{code.msg}}
                        </button>
                    </div>
                </div>
            </div>
             <div class="error-msg" :class="{'error-msg-active': code.errMsg}">{{code.errMsg}}</div>
            <div class="reg-protocol">
                <input type="checkBox" v-model="checked">
                <span class="reg-protocol__text">
                我已阅读并同意<router-link to="/user" class="reg-protocol__link">《用户注册协议及隐私保护政策》</router-link>
                </span>
            </div>
            <div class="submit-btn" :class="{'submit-btn-active': isDisabledBtn}">完成</div>
        </div>
    </div>
</template>

<script>
import {checkPhone, checkVerifyCode} from '@/utils/validate'
export default {
    name: 'Login',
    data() {
        return {
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
        isDisabledBtn () {
            const {phone: {value: phoneVal}, code: {value: codeVal}} = this
            return checkPhone(phoneVal) && checkVerifyCode(codeVal)
        }
    },
    watch: {
        'phone.value': function () {
            const {value} = this.phone
            if (!checkPhone(value)) {
                this.phone.errMsg = '请输入正确的手机号！'
                return
            }
            checkPhone(value) && (this.phone.errMsg = '')

        },
        'code.value': function () {
            const {value} = this.code
            if (!checkVerifyCode(value)) {
                this.code.errMsg = '请输入正确的验证码！'
                return
            }
            checkVerifyCode(value) && (this.code.errMsg = '')
        },
    },
    methods: {
        clearInput (key) {
            this[key].value = ''
            this[key].errMsg = ''
        },
        handleSendCode () {
            const {value} = this.phone
            if (!checkPhone(value)) {
                this.phone.errMsg = '请输入正确的手机号！'
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
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    .form{
        margin-top: 0.11rem;
    }
    .filed{
        display: flex;
        padding: .26rem .3rem;
        margin-top: 0.2rem;
        border-top: .01rem solid #EFEDEF;
        border-bottom: .01rem solid #EFEDEF;
        background: #fff;
        &-label{
            width: .96rem;
            font-size: .32rem;
            color: #4A4A4A;
            padding-right: .3rem;
            border-right: .01rem solid #EFEDEF;
        }
        &-value{
            flex: 1;
            display: flex;
            padding-left: .3rem;
            input{
                border: none;
                display: block;
                font-size: .28rem;
                width: 100%;
                box-sizing: border-box;
            }
            .send-code{
                padding-left: .28rem;
                border-left: .01rem solid #EFEDEF;
                flex-shrink: 0;
                button{
                    display: block;
                    border: none;
                    background: transparent;
                    font-size: 0.32rem;
                    color: #8E6C2D;
                }
            }
            .btn-disabled{
                opacity: 0.5;
            }
            .clear{
                font-size: .28rem;
                opacity: 0;
                .iconfont{
                    color: #ccc;
                    font-size: .28rem;
                    padding: 0 .1rem;
                    vertical-align: middle;
                }
            }
            .clear-active{
                opacity: 1;
            }
        }
    }
    .submit-btn{
        padding: .23rem 0;
        text-align: center;
        width: 6.1rem;
        margin: 3.71rem auto;
        background-color: #A99164;
        border-radius: 0.12rem;
        font-size: 0.36rem;
        color: #fff;
        opacity: 0.5;
    }
    .submit-btn-active{
        opacity: 1;
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
    .error-msg{
        font-size: .24rem;
        padding-left: .3rem;
        margin-top: .2rem;
        color: red; 
        opacity: 0;
    }
    .error-msg-active{
        opacity: 1;
    }
}
</style>