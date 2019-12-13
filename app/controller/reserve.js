'use strict';

const Controller = require('egg').Controller;

class ReserveController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.openId)
    ctx.body = ctx.openId;
  }
}

module.exports = ReserveController;
