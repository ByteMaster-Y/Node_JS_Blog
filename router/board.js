const express = require('express');
const router = express.Router();
const controller = require('../controller/boardController');

router.get('/', controller.post);
router.get('/write', controller.write);
router.post('/write', controller.writePost); // POST로 변경
router.get('/list', controller.list);
// router.get('/view', controller.viewPost);
router.get('/view/:postId', controller.viewPost); // 수정: :postId 추가
router.get('/delete/:postId', controller.deletePost); // 게시글 삭제



module.exports = router;