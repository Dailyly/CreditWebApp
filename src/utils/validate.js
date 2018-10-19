// 本系统中验证表单数据所需要的方法
export function checkPhone (value) {
  if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
    return false
  } else {
    return true
  }
}
