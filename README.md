koahub web fast framework

## Installation

```sh
$ npm install koahub
```

## Use with koa

```js
  var app = require('koa')();
  var router = require('koa-router')();

  require('koahub');

  for (var key in koahub.controller){
      router.use(key, koahub.controller[key]);
  }

  // sample as
  router.use('/home', auth('home').skip({path: [/public/]}));
  app.use(router.routes());

  // sample as
  console.log(koahub.model);
  console.log(koahub.controller);
  console.log(koahub.util);

  app.listen(3000);
```

官网：[http://js.koahub.com](http://js.koahub.com)

[![image](http://www.koahub.com/public/ad.jpg "koahub软件市场")](http://www.koahub.com)