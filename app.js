const express=require('express');
const siteRouter=require('./routes/site.js');
const teamRouter=require('./routes/team.js');
const bodyParser=require('body-parser');

var app=express();
//新浪云只允许监听5050端口
app.listen(5050);

//托管静态资源到public目录
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/site',siteRouter);
app.use('/team',teamRouter);

