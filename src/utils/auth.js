import Cookies from 'js-cookie'

const UserToken = 'usertoken'

export function getUserToken () {
  return Cookies.get(UserToken)
}
export function setUserToken (token) {
  return Cookies.set(UserToken, token)
}
