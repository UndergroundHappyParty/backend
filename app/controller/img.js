'use strict';

const Controller = require('egg').Controller;

class ImgController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.redirect('/public/img/1.JPG');
  }
}

module.exports = ImgController;
