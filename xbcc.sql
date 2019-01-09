#设置客户端连接的字符集
SET NAMES utf8;
#如果存在删除xbcc
DROP DATABASE IF EXISTS xbcc;
#创建数据库xbcc,设置字符集utf8
CREATE DATABASE xbcc CHARSET=utf8;
#选择数据库
USE xbcc;

#网站导航数据表：xbcc_site_nav
CREATE TABLE xbcc_site_nav(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(11),
    target VARCHAR(20)
);
#向导航数据表添加数据
INSERT INTO xbcc_site_nav VALUES
(NULL,'首页','/index.html'),
(NULL,'关于我们','/about.html'),
(NULL,'解决方案','/fangan.html'),
(NULL,'客户案列','/custom.html'),
(NULL,'新闻资讯','/new.html'),
(NULL,'联系我们','/contact.html');

#网站团队人物信息表：xbcc_site_team
CREATE TABLE xbcc_site_team(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    cname VARCHAR(18),
    ename VARCHAR(18),
    head  VARCHAR(50),
    sex BOOL,
    position VARCHAR(20),
    about VARCHAR(100),
    description VARCHAR(500)
);