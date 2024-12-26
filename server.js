const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const groupRouter = require('./routes/group');  // 引入路由

const app = express();
const port = process.env.PORT || 3000;  // 使用 Vercel 给定的端口

// 连接到 MongoDB 数据库
mongoose.connect('mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/wechat-groups', { useNewUrlParser: true, useUnifiedTopology: true });

// 解析 JSON 请求
app.use(bodyParser.json());

// 设置 API 路由
app.use('/api', groupRouter);

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
