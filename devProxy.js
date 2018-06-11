module.exports = {
  test: {
    '^/pub/mall/**': {
      target: 'http://mall.xiaop.djt.ted',
      hostRewrite: 'http://mall.xiaop.djt.ted',
      changeOrigin: true,
      secure: false,
    },
  },
  prod: {

  }
};
