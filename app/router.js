'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.index);
  router.post('/reserve', controller.reserve.index);
  router.get('/img', controller.img.index);
};
