# 描述


- vue单页应用，前后端分离
- 移动设备兼容：使用flexible.js和rem处理兼容问题
- 路由懒加载：Vue Router 处理路由
- axios做ajax请求
- vuex实现关注/取关club
- vue-awesome-swiper 触摸滑动组件完成导航组件
- mint-UI完成图片懒加载、下拉刷新、infinite-scroll、navbar等组件
- 图标引入 import Icon from 'vue-awesome/components/Icon'
- esay-mock模拟数据
- stylus编写样式




### 预览 :point_right: (http://forwe.club)

## Build Setup

```

npm install


npm run dev

```
## 部署到服务器
### 项目打包
npm run build后会有一个dist目录，这个文件夹就是我们要部署上线的项目

### 写一个小脚本app.js
```
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})
app.listen(8081);
```
这个脚本使用了express框架,所以我们可以生成一个package.json，把依赖项添加进去
```
{
    "name": "vue-duitang",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.15.3"
    }
  }
```
把 dist目录  app.js  package.json  三者 上传到服务器 /root/www/duitang 文件夹下
再 npm i  生成 node_modules目录
再pm2 start app.js成功启动服务

现在通过ip加端口形式能正常访问，但是如果想通过域名访问就需要配置nginx映射
到/etc/nginx/conf.d/目录下  新建 duitang-8082.conf 编辑
```
upstream dt {
    server 127.0.0.1:8082;
}

server {
    listen 80;
    server_name forwe.club;

    location / {
        proxy_set_header Host  $http_host;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header X-Nginx-proxy true;
        proxy_pass http://dt;
        proxy_redirect off;
    }
}

```
执行sudo nginx -s reload重启nginx服务器，过会就应该能正常访问了

