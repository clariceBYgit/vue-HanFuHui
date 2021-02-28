-- 创建hanshang数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS hanshang;
CREATE DATABASE hanshang CHARSET=UTF8;
USE hanshang;


-- 创建轮播图
CREATE TABLE hanshang_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
--商品的总类型
CREATE TABLE product_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);



  -- 插入首页轮播数据
  INSERT INTO hanshang_index_carousel VALUES
  (NULL,'/img/index/fl1.jpg','春季焕新','https://shop.hanfuhui.com/special/198'),
  (NULL,'/img/index/fl2.jpg','庚子年汉服爆点回顾','https://shop.hanfuhui.com/special/197'),
  (NULL,"/img/index/fl3.jpg","贺岁礼物",'https://shop.hanfuhui.com/special/196'),
  (NULL,"/img/index/fl4.jpg","新年新气象",'https://shop.hanfuhui.com/special/195');
  
  --插入总商品类型
  INSERT INTO product_family VALUES
  (NULL,'本周热卖'),
  (NULL,'汉服女装'),
  (NULL,'汉服男装'),
  (NULL,'汉元素'),
  (NULL,'周边配饰'),


