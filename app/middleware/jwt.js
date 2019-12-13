'use strict'
const jwt = require('jsonwebtoken') //引入jsonwebtoken

module.exports = (options, app) => {
  return async function userInterceptor(ctx, next) {
    let authToken = ctx.header.authorization // 获取header里的authorization
    if (authToken) {
      authToken = authToken.substring(7)
      const res = jwt.verify(authToken, '1233231')
      ctx.openId = res.openid
      await next()
    } else {
    }
  }
}