import store from '../store'

const {url} = store.getters.apiConfig

const notifyQueue = []
export function notifyMsg (msg) {
  if (notifyQueue.includes(msg)) return
  notifyQueue.push(msg)
  
}

export function codeErrorHandler (response, curtomHandler) {
  const { retCode, retMsg } = response
  let msg = retMsg || '请求失败'
  if (retCode !== 'SUCCESS') {
    curtomHandler ? curtomHandler(retCode, notifyMsg) : notifyMsg(msg)
  }
}

export default{
  baseConfig: {
    baseURL: url
  },
  resCheck: (res) => (res.retCode === 'SUCCESS'),
  forceAxios: true,
}
