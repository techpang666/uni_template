// 配置基准路径
const BASE_URL = 'http://localhost:3333'

export const myRequest = (options) => {
  return new Promise((resolve, rejects) => {
    uni.request({
      url: BASE_URL + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      success: (res) => {
        if(res.data.status !== 0) {
          return uni.showToast()({
            title: '获取数据失败'
          })
        }
        resolve(res)
      },
      fail: (error) => {
        uni.showToast()({
          title: '请求接口失败'
        })
        rejects(error)
      }
    })
  })
}