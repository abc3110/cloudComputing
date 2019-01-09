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

module.exports=router;
