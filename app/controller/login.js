'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    let code = ctx.request.body.code
    let token = await this.service.login.index(code)
    ctx.body = {
      token: token
    }
  }
}

module.exports = LoginController;
