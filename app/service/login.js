const axios = require('axios')
const Service = require('egg').Service;
class LoginService extends Service {
  async index(code) {
    let APPID = 'wx8853fbef5230dfd4',
        SECRET = 'e91667d1ef2f4585be027d4b2de41c4b'
    let params = `?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
    await axios.get('https://api.weixin.qq.com/sns/jscode2session' + params).then(resp => {
      console.log(resp.data)
    })
  }
}

module.exports = LoginService;