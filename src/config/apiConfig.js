import store from '../store'

const {url} = store.getters.apiConfig

export function codeErrorHandler (response, curtomHandler) {
  
}

export default{
  baseConfig: {
    baseURL: url
  },
  resCheck: (res) => (res.retCode === 'SUCCESS'),
  
}
