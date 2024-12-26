const mongoose = require('mongoose');

// 定义小组数据模型
const groupSchema = new mongoose.Schema({
  groupId: { type: String, required: true },
  groupName: { type: String, required: true },
  members: [
    {
      userName: String,
      avatarUrl: String,
      activityTime: String,
      smoking: String,
      budget: Number,
      rule: String
    }
  ]
});

module.exports = mongoose.model('Group', groupSchema);
