-- 创建hanshang数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS hanshang;
CREATE DATABASE hanshang;
USE hanshang;


-- 创建轮播图表格
CREATE TABLE carousel(
  cid INT NOT NULL,
  img VARCHAR(128)
);
-- 插入数据
INSERT INTO carousel VALUES
  (1,"/img/index/pic1.jpg"),
  (2,"/img/index/pic2.jpg"),
  (3,"/img/index/pic3.jpg"),
  (4,"/img/index/pic4.jpg");

  -- 楼层一
  CREATE TABLE floor1(
    fid INT NOT NULL,
    img VARCHAR(128),
    title VARCHAR(128),
    price DECIMAL(10,2)
  )

  -- 插入数据
  INSERT INTO floor1 VALUES
  (1,'/img/index/fl1.jpg','轻汉坊（鱼莲说）原创明制袄裙琵琶袖刺绣单层日常秋冬袄裙汉',158),
  (2,'/img/index/fl2.jpg','【呦呦鹿鸣】（韩十一）原创设计传统汉服 烫金 齐胸襦裙齐腰襦',79),
  (3,"/img/index/fl3.jpg","【呦呦鹿鸣】（白鹿青崖）原创汉服设计重工刺绣齐胸襦裙 春秋",168),
  (4,"/img/index/fl4.jpg","轻汉坊汉服防掉神器搭配齐胸襦裙齐腰防滑两片式可调长度",8.8),
  (5,"/img/index/fl5.jpg","岁寒:松寒客池夏原创设计改良汉服汉元素立领长披风马面裙套装",158),
  (6,"/img/index/fl6.jpg","【碧落】梨花渡汉服女原创女齐胸对襟襦裙春夏款绣花日常小清",196),
  (7,"/img/index/fl7.jpg","【诸仙记】漫天星 齐腰对襟襦裙女原创正版汉服红黑立体金丝绣",78),
  (8,"/img/index/fl8.jpg","曼珠沙华:洛离池夏原创改良汉服彼岸花提花长袄6米摆织金马面裙",158);


