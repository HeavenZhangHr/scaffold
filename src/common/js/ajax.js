/**
 * Created by hhly-pc on 2017/9/20.
 */
import qs from "qs"
import axios from "axios"

const IP_PORT = {
  // 接口调试
  test: "http://testm.zcopain.com/partnerWeb", // 测试环境
  comb: "http://unionm.zcopain.com/partnerWeb", // 联调环境
  onLine: "http://newm.zcopain.com/partnerWeb", // 线上环境
}

/**
 * ajax初步封装
 *
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {String} method 请求方法
 */
function ajaxs({
  url,
  params,
  method = "POST",
  qsStatus = true,
  headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
} = {}) {
  return new Promise((resolve, reject) => {
    axios({
      withCredentials: true,
      //TOOD:路径前缀
      url: IP_PORT.comb + url,
      data: qsStatus ? qs.stringify(Object.assign({}, params)) : params,
      headers,
      method,
      timeout: 200000,
    }).then(
      res => {
        resolve(res)
      },
      err => {
        reject(err)
      },
    )
  })
}

export default ajaxs