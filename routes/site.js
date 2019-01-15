const express=require('express');
const bodyParser=require('body-parser');
const pool=require('../pool.js');

var router=express.Router();

//网站导航栏
router.get('/nav',(req,res)=>{
	pool.query('SELECT * FROM xbcc_site_nav',(err,result)=>{
		console.log(result);
		res.send({code:200,msg:result});
	});
});
//新闻列表
router.get('/news',(req,res)=>{
	pool.query('SELECT * FROM xbcc_new_list WHERE lid<=3',(err,result)=>{
		console.log(result);
		res.send(result);
	});
});

module.exports=router;
