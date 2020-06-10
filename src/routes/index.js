var express = require('express');
var router = express.Router();
const homeContoller = require('../controllers/homeController')

/* GET home page. */
router.get('/', homeContoller.index);
router.get('/movies', homeContoller.listar)
router.get('/detail/:id', homeContoller.detail)
router.get('/guerra', homeContoller.guerra)
router.get('/new', homeContoller.new)
router.get('/recommended', homeContoller.recommended)
router.get('/create', homeContoller.create)
router.post('/store', homeContoller.store)
router.post('/delete/:id', homeContoller.delete)

module.exports = router;
