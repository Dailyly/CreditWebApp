import { Toast } from 'vant'
import store from '../store'
import {getUserToken} from '@/utils/auth'

const { url } = store.getters.apiConfig

export function codeErrorHandler (response, curtomHandler) {
  const { retCode, retMsg } = response
  let msg = retMsg || '请求失败'
  if (retCode !== 'SUCCESS') {
    curtomHandler ? curtomHandler(retCode, Toast) : Toast({ position: 'bottom', message: msg })
  }
}

export default{
  baseConfig: {
    baseURL: url
  },
  baseData: () => ({
    token: getUserToken()
  }),
  resCheck: (res) => (res.retCode === 'SUCCESS'),
  forceAxios: true

}
