const express = require('express');
const Group = require('../models/groupModel');
const router = express.Router();


router.get('/get-groups', async (req, res) => {
  try {
    const groups = await Group.find();  
    res.json({ success: true, groups });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.post('/submit-selection', async (req, res) => {
  const { groupId, userName, avatarUrl, activityTime, smoking, budget, rule } = req.body;
  try {
    const group = await Group.findOne({ groupId });
    group.members.push({ userName, avatarUrl, activityTime, smoking, budget, rule });
    await group.save(); 
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
