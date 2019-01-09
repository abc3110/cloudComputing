const express=require('express');
const pool=require('../pool.js');

var router=express.Router();

//网站团队人物列表
//获取人物信息  '/team'
router.get('/list',(req,res)=>{
	var $tid=req.query.tid;
	if(!$tid){
		res.send({code:400,msg:'tid required'});
		return;
	}
	pool.query('SELECT * FROM xbcc_site_team WHERE tid=?',[$tid],(err,result)=>{
		if(result.length>0){
			res.send({code:200,msg:result});
		}else{
			res.send({code:301,msg:'get err'});
		}
	});
});
//添加人物信息
router.post('/add',(req,res)=>{
	var obj=req.body;
	var $code=400;
	for(var key in obj){
		$code++;
		if(!obj[key]){
			res.send({code:$code,msg:obj[key]+' required'});
		}
	}
	pool.query('INSERT INTO xbcc_site_team SET ?',[obj],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:200,msg:'add succ'});
		}else{
			res.send({code:301,msg:'add err'});
		}
	});
});
module.exports=router;