<template>
  <div class="filed-input">
    <div class="filed-input__title">
      <span>{{label}}</span>
    </div>
    <div class="filed-input__value">
      <div class="filed-input__body">
        <input class="input" type="tel" maxlength=11 placeholder="请输入11位手机号码" v-model="phone.value"  @blur="phone.show=false" @input="phone.show=true" @focus="phone.show=true">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FiledInput',
    props: {
      label: String,
      placeholder: String
    }
  }
</script>

<style lang="scss" scoped>
.filed-input{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid #ccc;
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
}
</style>