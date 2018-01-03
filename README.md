# 描述


- vue单页应用，前后端分离
- 移动设备兼容：使用flexible.js和rem处理兼容问题
- 路由懒加载：Vue Router 处理路由
- axios做ajax请求
- vue-awesome-swiper 触摸滑动组件完成导航组件
- mint-UI完成图片懒加载、下拉刷新、infinite-scroll、navbar等组件
- 图标引入 import Icon from 'vue-awesome/components/Icon'
- esay-mock模拟数据
- stylus编写样式

预览(http://ozlrrk52c.bkt.clouddn.com/Animation.gif)
(http://ozlrrk52c.bkt.clouddn.com/Animation1.gif)
(http://ozlrrk52c.bkt.clouddn.com/Animation2.gif)
(http://ozlrrk52c.bkt.clouddn.com/Animation3.gif)

## Build Setup

```

npm install


npm run dev

```
## 部署到服务器
### 项目打包
npm run build后会有一个dist目录，这个文件夹就是我们要部署上线的项目

### 写一个小脚本
```
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.resolve(__dirname, './public')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8')
    res.send(html)
})
app.listen(8081);
```
