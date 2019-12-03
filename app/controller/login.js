'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    let code = ctx.request.body.code
    await this.service.login.index(code)
    ctx.body = {
      msg: 'sucess'
    }
  }
}

module.exports = LoginController;
