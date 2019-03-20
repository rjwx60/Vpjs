import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  // 若无则加?号，有则加&号
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[ k ] !== undefined ? data[ k ] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // 去除第一个&
  return url ? url.substring(1) : ''
}
