-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-04 11:24:10
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myapp`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` bigint(10) NOT NULL,
  `news-title` varchar(1024) NOT NULL,
  `category` varchar(1024) NOT NULL,
  `news-img` varchar(2048) NOT NULL,
  `news-content` text NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `news-title`, `category`, `news-img`, `news-content`, `time`) VALUES
(136, '＂早餐奶奶＂卖5毛钱早餐坚持24年 每月贴数百元', '推荐', 'http://www.fawan.com/UploadFiles/allimg/160704/25_160704012807_1.jpg', ' 央视新闻客户端7月3日消息，五毛钱能买什么？在浙江衢州黄坛口乡的毛师花奶奶的早餐摊上，五角钱是一碗香醇的豆浆，是一个金黄的蛋饼，是一个软软的糯米粿。这位83岁的老奶奶，坚持24年每天都到当地一所学校门口卖早点，而且从未涨过价。当地人亲切地称她为“早餐奶奶”。\r\n \r\n       清晨2点，当城市还在熟睡时，毛师花老人已经起床，伛偻着腰开始准备今天的早餐。\r\n \r\n       毛师花老人今年83岁，家住在浙江省衢州市衢江区黄坛口乡。老人住的地方虽然简陋，但给孩子们做的早餐却从不马虎，豆浆是石磨磨的、糯米粿是手工包的，就连蛋饼用的鸭蛋，也是老人到村里收来的正宗土鸭蛋。\r\n \r\n       老人卖早餐的地方是当地黄坛口中心小学旁的一个弄堂口，早上五点半，一切准备就绪。', '2016-07-04'),
(137, '游客泡进辣椒缸吃辣椒赢黄金', '推荐', 'http://pic.miercn.com/uploads/allimg/160704/102H64523-0.jpg', '7月2日，云南丽江宋城旅游区举办吃辣椒比赛活动，吸引了众多来自全国各地的游客参加。经过激烈的初选，进入决赛的9位吃辣高手，整个身体泡进直径1.1米泡满辣椒的大缸中，感受从内到外的辣爽体验。', '2016-07-04'),
(138, '两天两夜没睡 抗洪战士在雨中睡着', '推荐', 'http://www.qiwen007.com/imgsy/image/2016/0703/6360313865629892646177539.jpg', '在湖北麻城抗洪抢险的战士，因为两天两夜没睡，就这么在雨中睡着了……哪里有危险，哪里就有他们！', '2016-07-04'),
(139, '深港走私又出新招！370部苹果手机藏匿鱼桶', '推荐', 'http://img6.aili.com/201607/04/1467570925_32972100.jpg', '深港走私又出新招！2016年6月29日，武警广东省边防总队深圳市支队在深圳湾成功截获一艘超马力快艇，当场查获涉嫌走私苹果手机6S、6S plus共370部，案值约两百万元。', '2016-07-04'),
(140, '中国最富的城市有你家乡吗', '推荐', 'http://pic.miercn.com/uploads/allimg/160704/100U025c-0.jpg', '由中国社会科学院财政与贸易研究所倪鹏飞博士牵头，两岸四地城市竞争力专家共同携手，根据过去五年全国城市发展的格局，以及未来全球、中国发展的主导力量及其趋势，比较各城市内外环境，从294个城市中选了24个城市进行深入的案例研究分析。这15个城市具有不可比性；未来任何城市都具有跨越的可能。看其中有你家乡吗？\r\n　　1、唐山：\r\n　　“北方深圳”助飞跃，环渤中心展新颜。唐山市具备工业化和城市化的地理优势，雄厚的工业基础和丰富的焦煤产业，为唐山实现区域工业化、城市化的跨越式发展打下坚实的基础平台。', '2016-07-04'),
(141, '伊能静晒女儿睡姿照 却因给小米粒戴手套引争议', '推荐', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/07/04/146759023737045089_720_1000.JPEG&fm=37', '搜狐娱乐讯 据香港媒体报道，一个星期前台湾女星伊能静同内地男星秦昊的爱情结晶小米粒在美国出世，7月4日凌晨，伊能静晒出小米粒睡觉照片并写道：“每次喝完妈妈的milk，都像喝醉的米粒，这姿势，美人醉卧。”该张照片一出，却立刻引发网友在伊能静微博下不停留言争论。', '2016-07-04'),
(142, '媒体:北京一所著名大学有40人被确诊为抑郁症', '推荐', 'http://upload.cankaoxiaoxi.com/2016/0704/1467586248783.jpg', '7月，成千上万的大学毕业生即将奋身投入新角色，在离别的喧闹声中，有这么一群人站在角落一直沉默，这是高校中不断增多的抑郁症患者，他们正经受着常人难以理解的痛苦、孤独与隔离。写完毕业论文，找份像样的工作，对此刻的他来说，着实艰难。北青报记者近日调查发现，在京一所著名重点大学有40人被确诊为抑郁症，约占到学校心理咨询中心访问量的两成。智识高、求胜心强的大学生，已然成为抑郁症高发人群。\r\n\r\n　调查\r\n抑郁症学生占到咨询中心来访量的两成“你好，这里是李家杰珍惜生命大学生心理热线，请问有什么可以帮助你的吗”一段固定的开场白，电话接通的那一刻，听筒那头迟疑了好几秒，缓缓地吐出：“你好，我想咨询下抑郁症相关的问题，已失眠3个月了……”当了三年接线的学生志愿者小卿遇到这样声称自己抑郁症的来电者，依然会紧张到手心冒汗。', '2016-07-04'),
(143, '从优衣库到宜家，公众场合为何成了情趣直播间？', '推荐', 'http://b.hiphotos.baidu.com/news/crop%3D0%2C27%2C601%2C360%3Bw%3D638/sign=48399b15b93533fae1f9c96e95e3d12d/203fb80e7bec54e767300805b1389b504ec26ac8.jpg', '优衣库之后，宜家抢镜，试衣间的香艳弥漫了家居卖场，在随时可能被发现的公共场合，那份未知的不安尤其能刺激看客们充满想象力的荷尔蒙。\r\n\r\n尽管宜家心不在焉的否认事件发生在北京，试图用二线城市的定义压制事件的传播，并声称绝非炒作且已报警，但网络热点一旦形成，就有自己的引爆规律。\r\n\r\n每个“福利”背后都有一个被流量扭曲的心灵\r\n\r\n想红很难，自古使然，帝王将相，亦不例外。陈子昂万金买琴，只为推销诗稿；李太白醉草吓蛮书，无非想当唐玄宗的清平宰相，说起来都是网红界的前辈。\r\n\r\n流量为王的时代，秘诀是脱！第83届奥斯卡颁奖晚会，安妮·海瑟薇跟搭档詹姆斯·弗兰科吐槽“知道吗，詹姆斯，曾经的规则可是脱了就能获得提名”，虽是自嘲褪去罗衫的新片《爱情药不药》票房口碑双输，亦是反讽学院派与下里巴人日趋合流的恶趣。\r\n\r\n安妮公主尚且不能免俗，何况我辈。', '2016-07-04'),
(144, '中国“天眼”还要调试两个月 预计9月底投入使用', '推荐', 'http://himg2.huanqiu.com/attachment2010/2016/0704/20160704070941410.jpg', '位于贵州黔南州平塘县大窝凼的世界最大单口径射电望远镜——500米口径球面射电望远镜（FAST）的最后一块反射面单元3日成功吊装，这标志着FAST主体工程顺利完工。这只“观天巨眼”预计于今年9月全部竣工，开始探索宇宙深处的奥秘。据介绍，FAST突破了射电望远镜的百米极限，它拥有30个足球场大的接收面积，与号称“地面最大的机器”的德国波恩100米望远镜相比，灵敏度提高约10倍。它将在未来10至20年保持世界一流设备的地位。\r\n　　揭秘“超级天眼”既是中国制造 更是中国创造\r\n　　3日在贵州平塘架设完成的500米口径球面射电望远镜，犹如一只瞄向外太空的 “超级天眼”。数千科学家、工程师和建设者们深扎山谷，用近两千个日日夜夜精雕“眼窝”、勾勒“眼底”、密布“神经”、点睛“眼珠”，靠智慧头脑和精湛技艺雕琢出深邃“天眼”。\r\n　　“巧夺天工”书写中国创造“在这里，再高的吊车也望尘莫及、再长的臂手也鞭长莫及！”回顾建设历程，国家天文台500米口径球面射电望远镜工程总工艺师王启明对记者说，射电望远镜的建设施工量比不上机场或高铁站，但极其特殊的地形条件却带来巨大的施工难度，高度、跨度、坡度、斜度让常规机械设备在这里显得无能为力、一筹莫展。', '2016-07-04'),
(145, '不止《欢乐颂》，《余罪》里的奔驰也是假的', '推荐', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=8ae6e318c095d143da76e7204bf08296/a8773912b31bb0513058bc333e7adab44aede0a9.jpg', '最近红的剧不少，假的车很多。\r\n\r\n文 ▍威猛先生\r\n\r\n本来我就想贴着热点梳理一下《余罪》里的人儿开些什么车？万万没想到，不仅是前段时间《欢乐颂》里奇点开的奔驰是贴牌货，老傅开的奔驰竟然也是！', '2016-07-04'),
(146, '华为若要做操作系统：到底有多难？', '推荐', 'http://e.hiphotos.baidu.com/news/crop%3D0%2C11%2C348%2C209%3Bw%3D638/sign=0b416854962f07084b4a7040d41494a8/962bd40735fae6cdf71ed17a07b30f2442a70f06.jpg', '前段时间外媒一则消息传的沸沸扬扬：中国电信设备巨头华为公司正在自主研发智能手机操作系统。基于国内的猜测与质疑，华为高级副总裁余承东在微博上表示，“谷歌打造的Android操作系统和生态极大促进了智能终端的发展并让消费者受益，只要安卓系统保持其开放性，华为智能手机就会永远使用该操作系统和生态，并基于安卓系统在性能、体验做些改进，以更好满足各国消费者需求。”\r\n\r\n但其实我们发现，余承东的回应没有肯定也没有否定，但从这句话的言外之意看出，华为使用Android包含了一个前提是安卓的开放，如果安卓不保持开放，华为就有可能不使用该操作系统。这里并没有否定华为自主操作系统存在的可能性。\r\n\r\n传华为研发操作系统的背景是拥有Android系统的谷歌正与移动运营商讨论合作推出自有品牌的手机，这让Android手机厂商有了危机感，这意味着谷歌想要挟Android来收割市场。因此，据说华为还拉来了前诺基亚工程师帮忙。但是，华为若要做一款成功的操作系统，究竟有多难？', '2016-07-04'),
(147, '上海中学生锐减40万 人口危机终结一线城市神话？', '推荐', 'http://c.hiphotos.baidu.com/news/w%3D638/sign=5e4a541e3bfa828bd1239ee0c51e41cd/fd039245d688d43f65e041e9751ed21b0ef43b64.jpg', '近日关于本世纪末中国人口到底是萎缩到6亿还是10亿的讨论再次让人口问题成为焦点。其实不用等到本世纪末，当下中国的人口危机已经对中国带来冲击，劳动力人口自2012年起已持续下降，而这与中国经济放缓的时间惊人一致。\r\n\r\n更可怕的是，官方统计数据显示：过去二十多年全国小学生入学人数正经历断崖式下跌。简单的推算，00后人口大致比90后减少了约3000万。不仅身陷增长困境的东北三省遭遇人口流出的打击，一线城市也恐难幸免。去年上海普通中等学校在校生人数已经较十年前峰值减少近40万，中小学生总数则减少了近60万。\r\n\r\n人口断崖在对三四线城市形成冲击之后，是否已经悄无声息的蔓延到一线城市，在未来对中国经济形成持续的冲击？\r\n\r\n', '2016-07-04'),
(148, '一次性餐具太恶心，印度大叔做了个能吃的勺子！', '推荐', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C12%2C300%2C180%3Bw%3D638/sign=4f97dc1204d79123f4afce34900475b3/0b46f21fbe096b637333d24a04338744ebf8ac86.jpg', '在中国，每年要消耗数百亿双一次性筷子，上百亿个一次性餐盒。。。。。。触目惊心！\r\n\r\n全世界，每年被丢掉的一次性餐具有数千亿件。。。。。\r\n\r\n在印度，有一项重大发明，正在逐渐改变这一切，那是一件可以吃的餐具，远销欧美亚，上千万人在抢购，已经卖到脱销，每年光在印度就卖出超过150万把勺子。', '2016-07-04'),
(149, '年轻人该如何摆脱贫穷', '推荐', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C9%2C589%2C353%3Bw%3D638/sign=a1d3272d293fb80e189e3b970be10317/d000baa1cd11728be72aa73ec0fcc3cec3fd2ca2.jpg', '昨天有篇文章，说了年轻人为何越来越贫穷，这不光是中国的特例，在全球都是一样的。为什么你觉得跟有钱人的差距越来越大，完全看不到希望，如果总结起来就是一句话，劳动无法跑赢资本，你凭借双手创造出来的财富，永远不可能赶上资本的力量。那么既然问题提出了，年轻人贫穷的问题是否找到了解药呢？\r\n\r\n其实，这个事情并不复杂，除了王思聪这样的富二代，大部分年轻人都是贫穷的，没有资本，没有资金，甚至工作也难找。但随着年轻人不断的打怪升级，收入不断增加，财富也会越来越多，之后年轻人也就变成了有产一族，然后通过多年来攒下的资本，再跟下一代年轻人竞争。这其中，有人会胜出，成为让人艳羡的富裕阶层，而有些人则会返贫，将多年的积累付之一炬。', '2016-07-04'),
(150, '从“情怀”到“卖身”，聊一聊罗永浩错在了哪？', '推荐', 'http://e.hiphotos.baidu.com/news/crop%3D42%2C1%2C507%2C304%3Bw%3D638/sign=0f269acc3ed12f2eda4af42072f6e74e/f7246b600c3387449f32d467590fd9f9d72aa032.jpg', '善于讲情怀的罗永浩，终究还是选择了向资本妥协。\r\n\r\n从北京市工商局网站公示的信息来看，罗永浩将锤子科技的205万股的股权出质给阿里巴巴，接近老罗此前持股的一半。尽管双方并未公布具体的资金数目，锤子的“卖身”已然成为事实。\r\n\r\n阿里不是老罗所寻求的第一个买主，锤子也不是阿里投资的第一家手机品牌。此前就传出过老罗和张近东“密会”的消息，而阿里在去年年初就以5.9亿美元入股魅族。有人说老罗的股权质押很可能让锤子被阿里所“绑架”，也有人质疑老罗又在上演“售卖情怀”的好戏，只不过这次卖的不是手机，而是股权。', '2016-07-04'),
(151, '假如地方网站的未来不是APP', '推荐', 'http://c.hiphotos.baidu.com/news/w%3D638/sign=1e7d4886c3ef76093c0b9a9c16dca301/ae51f3deb48f8c548667893432292df5e0fe7f70.jpg', '你可以用比较传统的思维认为没有BBS的平台不是地方网站，你可以认为没有APP的也不是地方网站，但是你无法回避的事实就是很多地方大号正在与你分羹。\r\n\r\n由此可以推导出，地方网站还存在两个问题：\r\n\r\n√ 认为APP也就是BBS的升级。\r\n\r\n√ 认为APP就是未来地方网站的全部。\r\n\r\n根据上述的数据及逻辑分析，问题不攻自破！\r\n\r\n二、有人认为:目前APP不具有盈利模式。\r\n\r\n目前对于APP盈利模式的所有误解，都基于两个错误的前提：广告、流量变现。', '2016-07-04'),
(152, '1万粉时写出300万阅读爆文，而且竟然还是文言文？', '推荐', 'http://f.hiphotos.baidu.com/news/crop%3D47%2C2%2C830%2C498%3Bw%3D638/sign=2780157b3d2ac65c734a3c33c6c6853d/4d086e061d950a7b1f0f87df02d162d9f2d3c9f7.jpg', '柴静讨论雾霾、奶茶妹妹嫁人、杨绛逝世、英国脱欧……这些朋友圈刷屏事件，曾都出现在一些以“史记”为题的文章中。这些文章以艰涩的古文叙事，却能做到爆文频出，而且均出自公众号“刘备我祖”的运营者刘黎平一人之手。\r\n\r\n公众号以行业为垂直划分标准已有多时，以文风来分帮派的还鲜有讨论。公众号“刘备我祖”正是公众号生态中以古文表意的典型。刘黎平的“史记”系列文章，又被称为“当代史记”。粉丝在评论中称他为刘公、刘郎亦或太史刘。\r\n\r\n阅读数最高的一篇写的是毕姥爷，据刘黎平回忆，当时阅读数在300万左右，而粉丝不过一万有余。', '2016-07-04'),
(153, '弃自家系统：黑莓离退出手机市场还有多远？', '百家', 'http://b.hiphotos.baidu.com/news/crop%3D0%2C70%2C1200%2C720%3Bw%3D638/sign=27d18a12be003af359f58620081aea6b/4a36acaf2edda3cc6ddbd23b09e93901213f92e9.jpg', '风雨飘摇中的黑莓日前向美国参议院工作人员，AT&T，Verizon公司以及客户公司的系统管理员，行政经理发送了邮件，通知他们该公司已经决定停产运行黑莓10操作系统的设备，而这意味着一直盛传的黑莓将放弃自家系统（生态系统）已经成真。那么放弃自家系统的黑莓离退出手机市场还有多远？\r\n\r\n也许有人会质疑，为何黑莓放弃自家系统与其退出手机市场有何关系？自家系统对于目前的黑莓真的有那么重要或者说事关生死吗？其实就在黑莓刚刚宣布放弃自家系统的同时，美国参议院就通过一封公开信告知员工，由于黑莓放弃了旗下的BB10操作系统，未来政府在清除库存之后不会再使用黑莓手机了，而众所周知的事实是，美国政府，甚至包括美国总统奥巴马本人使用的就是黑莓手机。看来黑莓宣布放弃自家系统市场的反应还真是立竿见影。相信随着时间的推移，本应属于黑莓的用户（尤其是高价值的政府及企业客户）都会相继放弃更换或者采购黑莓手机。在此也许业内会产生疑问，为何黑莓放弃自家系统会有如此的影响？', '2016-07-04'),
(154, '视频: 揭秘六国年轻人的地铁生活', '百家', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=cb66603cb112c8fcb4f3f5cec40292b4/9f510fb30f2442a760deefb9d943ad4bd01302dd.jpg', '这是《胡说七道》关注全球青年互联网生活方式的第二期，本期我们关注的是全球各地国家的年轻人在地铁上的差异性。\r\n\r\n如今在全球一线的大城市，地铁以其高效、快速的特点成为市内交通的首选工具，这已经成为了一个城市文化的缩影。在包括中国在内的东亚地区的地铁上，人们都习惯了这样的场景——几乎所有年轻人都在玩手机，没有阅读，也不会跟陌生人交流。而英国等欧美国家的年轻人，阅读或交谈在地铁上是一种常态。为什么中外会存在那么大的差别？\r\n\r\n中外年轻人地铁行为的差异\r\n\r\n和中国地铁的纯商业化气氛不一样的是，英国的地铁站装饰很特别，墙上大多贴着音乐剧和充满艺术范的海报。而在地铁车厢里，乘客们几乎人手一本书。伦敦人十分注重文化氛围，他们的地铁上没有开通WIFI 。2011年，GoodMobilePhones.co.uk网站针对是否要在地铁覆盖手机网络做过一次民意调查，调查访问了1094名伦敦群众，结果发现76%的受访者反对这样一个提案。其中有14%的民众表示，他们不想在地铁里面听到别人吵吵嚷嚷地煲手机。为了保持住地铁站的阅读习惯，伦敦人还曾经进行过一次公投，投票决议不在地铁内开通WIFI。', '2016-07-04'),
(155, '投资人小红书：如何鉴别真假人工智能创业公司', '百家', 'http://e.hiphotos.baidu.com/news/crop%3D0%2C17%2C500%2C300%3Bw%3D638/sign=ba4aa1aeb1014a9095711cfd94471523/0ff41bd5ad6eddc4f587aae731dbb6fd5266334d.jpg', '人工智能快速进入大众视野，源于今年3月谷歌围棋人工智能程序AlphaGo战胜世界冠军李世石。人机围棋对弈只是普及人工智能的一个秀。它的背后是规模千亿级的人工智能产业市场。BBC预测，2020年全球人工智能市场规模将达1190亿元人民币。\r\n\r\n目前看，这一数据远比不上2015年中国移动互联网的产业规模。但人工智能的意义不仅于此，人工智能技术的发展，还将带动云服务、大数据分析、移动互联网和物联网产业的升级迭代。它甚至将超越移动互联网，全面改变人类的生活和工作方式。', '2016-07-04'),
(156, '哥大最新研究：被“骗怕了”的读者更相信谁的新闻', '百家', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=e6a55b4f0b4f78f0800b99f041310a83/b21c8701a18b87d63a376e040f0828381f30fdb0.jpg', '互联网作为最重要新闻源地位的日益巩固以及纸质媒体的衰落，使新闻媒体的主页也正在失去动力。在美国，超过60%的社交媒体用户通过Facebook和Twitter等平台获取新闻，而各种新闻媒体的流量有一半也来源于这些社交媒体。\r\n\r\n信任度对新闻媒体的生存至关重要，而数字景观的碎片性质给杂志和其他新闻媒体创造了一个难题。如果读者打破各种条件限制、随意阅读新闻，出版商还能建立忠实受众吗？品牌还有意义吗？\r\n\r\n答案仍是肯定的。根据哥伦比亚大学新闻评论（Columbia Journalism Review）和乔治•T•德拉克特杂志新闻中心（George T. Delacorte Center for Magazine Journalism）的一项研究，就长篇新闻而言，读者对于新闻杂志的信任度仍比网络媒体高得多。', '2016-07-04'),
(157, '责任判定不是自动驾驶最大问题，技术才是', '百家', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C1%2C352%2C211%3Bw%3D638/sign=0f67ff2f7b8da9775a60dc6b8d61d428/2934349b033b5bb58c1d1ce23ed3d539b700bce7.jpg', '最近，美国一辆特斯拉Model S电动汽车在途径十字路口的时候，撞上了一辆正在左转的卡车。Model S的前挡风玻璃撞进了卡车底部，驾驶人也因此死亡。这是特斯拉自动驾驶系统Autopilot系统发布以来的第一起致命事故。', '2016-07-04'),
(158, '邓超圆梦“超剧场”，刘亦菲白百何等半个娱乐圈来贺', '百家', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=c1e1440325f5e0feee188a02646134e5/4034970a304e251fa434afe2af86c9177e3e53ec.jpg', '“我知道你们最想看的不是我”，6月30日，在《分娩大师》超剧场首演现场，俞白眉打趣道，“邓超，上来吧”，追光灯下，邓超一身休闲西装，伴随着BGM《无敌》，怪不好意思地跑上台，“怎么又是《无敌》”，一开口，台下便笑声一片，藏在观众席中的“娘娘”孙俪也不禁莞尔。\r\n\r\n架不住观众们的热情呼声，落幕后孙俪也上台支持《分娩大师》在超剧场的首演，并“呛声”有些动作比他们演得更好，希望以后能上舞台表演话剧，被邓超调侃家教很好，随后霸气的“娘娘”一脸娇羞地给了邓超一脚，将现场气氛推向高潮。', '2016-07-04'),
(159, '吴亦凡李易峰到朴有天，粉丝权力如何变得越来越大?', '娱乐', 'http://c.hiphotos.baidu.com/news/crop%3D69%2C0%2C457%2C274%3Bw%3D638/sign=92f03801dc2a283457e96c4b6683f0c6/a08b87d6277f9e2ff5a135141730e924b899f312.jpg', '“朴有天我们来守护，相信你、支持你、守护你，一直到永远。”6月28日，近来因性侵丑闻陷入困境的韩国艺人朴有天再次被刷上热搜，这一次，没有讥笑和指责，有的是来自朴有天全球粉丝联合会的声援。\r\n\r\n在这份声援声明中，中国、日本、韩国、越南、德国、巴西等国粉丝联合俱乐部表示将一如既往地支持朴有天，同时希望警方能够以合法程序对此案进行公正的调查，早日查明事实真相，更希望今后广大媒体不要再刊登没有依据的猜测性报道。', '2016-07-04'),
(160, '离开香港时，为什么Beyond选择了日本而不是大陆？', '娱乐', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=afebcc1fc095d143da76e7204bf08296/a8773912b31bb051155593343e7adab44aede0bd.jpg', '后来，这片大陆天南地北的人都听过他们的歌，但在讨论「中国摇滚」的时候，总是会跳过他们的名字。和崔健同时期出道和走红的Beyond，不在一个圈子，也不是一个路子。\r\n\r\nBeyond身上有成为传奇乐队必备的所有经历：死磕地下出头，发行金曲成名，远走他乡发展，意外夭折封神。而黄家驹离世后乐队在音乐上的所有努力，都被掩盖在光环之下。讣告传来时，已成定局。', '2016-07-04'),
(161, '被毒化的鸡汤', '百家', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=25a00e2473f40ad115e4c4e06f2d1151/0df3d7ca7bcb0a46ddc4b2256363f6246a60afc3.jpg', '自从有了朋友圈，就常见心灵鸡汤。自从新媒体盛行，鸡汤文就尤其多。\r\n\r\n有人就爱“毒鸡汤”\r\n\r\n“这碗鸡汤有毒”、“干了这碗毒鸡汤”，有时候，那些油腻的快要溢出手机屏的鸡汤，也会常遭到这样的吐槽。因此有一段时间，我们不屑再发鸡汤安慰别人或自我安慰，甚至看到一篇稍有鸡汤味道的文章就要拿出来与旁边的人调侃一番——“你看这人多傻！”', '2016-07-04'),
(162, '谁来填补银行的坏账黑洞？', '百家', 'http://g.hiphotos.baidu.com/news/crop%3D9%2C1%2C366%2C220%3Bw%3D638/sign=2bee4dd04b166d222c384fd47b1a25c6/2e2eb9389b504fc2ab777a1eeddde71190ef6d85.jpg', '（作者微信公众号：jiguantx）银行坏账成了今天的大问题。假如银行已经不赚钱了，我们还把钱存在银行干什么呢？据英国《每日电讯报》6月29日报导，中国大陆国有银行的盈利下滑了3.5%，坏账也持续增加，凸显中国经济放缓。五大国有银行的2015年年度报告显示，中国银行、农业银行、工商银行、建设银行2015年的利润增长均不足1%，交通银行也仅增长1.03%。', '2016-07-04'),
(163, '苹果要收购Tidal，还给Spotify下绊儿', '百家', 'http://e.hiphotos.baidu.com/news/crop%3D0%2C2%2C800%2C480%3Bw%3D638/sign=d5c76ffd2f7f9e2f647a47482200c516/11385343fbf2b211e75f5855c28065380cd78ebc.jpg', 'Apple Music一岁了。自家音乐流媒体服务过生日，苹果总得要表示表示。最近该公司就与韩国音乐表演者联合会（Federation of Korean Music Performers）达成了协议，这意味着Apple Music很快将进入韩国市场，补足其在国际市场上的重要漏洞。\r\n\r\n不过区区小礼，恐怕未必能让Apple Music尽兴。据《华尔街日报》报道，苹果正在与Jay-Z创办的音乐流媒体服务Tidal展开收购谈判。\r\n\r\n', '2016-07-04'),
(164, '高铁八纵八横终于开启，哪些“洼地”将被填平？', '百家', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C22%2C800%2C480%3Bw%3D638/sign=ea53e52266061d9569096d7846c426e3/a50f4bfbfbedab64401dd1daff36afc379311eb8.jpg', '八纵”照顾西部，“八横”平衡南北\r\n\r\n八纵八横规划是基于国家“十三五”规划纲要的总体目标进行的，目标是全国高铁路营业里程达到3万公里，覆盖80%以上的大城市。\r\n\r\n在此基础上出炉的八纵八横线路，不是“四纵四横”简单的翻番，而是在原来基础上经过了重新的梳理整合，其覆盖辐射的国土面积较之“四纵四横”均有很大的拓展。', '2016-07-04'),
(165, '我们生活在模拟世界里的概率到底有多大', '百家', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C2%2C1025%2C615%3Bw%3D638/sign=0e02946cfa1fbe090811995456502001/060828381f30e924cd50372b44086e061d95f730.jpg', '特斯拉、SpaceX 等前沿科技公司的创始人伊隆·马斯克在 Code Conference （Re/code 网站举办的科技峰会）上回答了一个令人意想不到的问题。观众席中的一个人问：「为什么马斯克认为我们所生活的世界并不是真实的，而是由电脑精心编造模拟出来的？」而马斯克则展现了对这一概念的惊人熟悉。「关于模拟世界，我已经讨论过很多次了，这的确很疯狂」马斯克说道。马斯克提到了电子游戏发展的速度，他认为发展出一个「与现实无法区分开来」的模拟世界是不可避免的。他还总结道：我们生活在「现实世界」里的概率只有「十亿分之一」。', '2016-07-04'),
(166, '中国人盯上英国楼市暗藏风险', '百家', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C451%2C270%3Bw%3D638/sign=24a5df4cd8160924c86af85be93719cb/0bd162d9f2d3572c838724c68213632762d0c347.jpg', '英国公投结果出来后，令全球市场爆发巨震，也令全球投资者开始重新配置投资区域。公投后一个最大影响就是英镑暴跌，按照货币与投资的关系是，货币贬值将赶走投资者以及投资资金。\r\n\r\n这次英国公投以后已经导致国际投资投机资本大举撤离英国，全球在英企业包括美国银行以及亚洲的李嘉诚等都表示或者说开始撤离英国。\r\n\r\n想不到的是，随着英国市场混乱的持续，一些中国人开始把目光投向英国市场，以期获得一个不错的价格。一部分中国投资者逆向逆势而行开始进入英国投资购买房地产，所谓的捡便宜与抄底。', '2016-07-04'),
(167, '不能抢!无论是冠军,还是德国的官方赞助商阿迪达斯', '百家', 'http://e.hiphotos.baidu.com/news/w%3D638/sign=05e81d20384e251fe2f7e7fb9f87c9c2/d31b0ef41bd5ad6e9918dbf089cb39dbb7fd3cc2.jpg', '明天凌晨，德国与意大利的男模德比就要火爆上演。一想到日耳曼的汉子或是亚平宁的帅哥可能要打道回府，圈妹（ID:Eco_Sports）的心里就开心不起来。其实比起他们穿着笔挺的西装，圈妹觉得身披着球衣的他们才最有魅力。说到球衣，咱们再来说说国家队球衣赞助的故事——最近阿迪达斯与德国队63年的情缘再续，绝不只是忠诚那么简单，更是颜值与价值的全面体现。', '2016-07-04'),
(168, '上战场下厨房，做家务还卖萌耍宝，这只狗要上天！', '百家', 'http://h.hiphotos.baidu.com/news/crop%3D66%2C1%2C546%2C327%3Bw%3D638/sign=f9ccfaa396510fb36c562dd7e405feb9/d009b3de9c82d158d3beedab880a19d8bc3e42ef.jpg', '设想这样一个美好的周末，窗帘缝隙中钻出缕缕晨光，而你舒舒服服的与被子缱绻，赖在床上不愿起来。想要享受一杯咖啡，但是杯子在遥远的厨房……\r\n\r\n如果你只能认命的从被窝里爬出来的话，那你一定还没认识刀哥接下来要介绍的这只机器狗。前段时间刷屏波士顿动力最近推出了全新的做家务机器人：', '2016-07-04'),
(169, '万科复牌 中小股东将用脚投票', '百家', 'http://h.hiphotos.baidu.com/news/crop%3D0%2C17%2C453%2C272%3Bw%3D638/sign=482216e10246f21fdd7b0413cb144751/8ad4b31c8701a18b183e4a55962f07082938fed7.jpg', '万科复牌 中小股东将用脚投票\r\n\r\n作者：齐俊杰(qijunjie82)\r\n\r\n7月4日，也就是明天，万科A股将复牌交易，万科公告显示，拟以发行股份的方式购买地铁集团持有的前海国际100%股权，初步交易价格为456.13亿元。公司将以发行股份的方式支付全部交易对价，初步确定对价股份的发行价格为每股15.88元，为定价基准日前60个交易日上市公司股票交易均价的93.61%。据此计算，上市公司将就本次交易向地铁集团发行28.72亿股A股股份。', '2016-07-04'),
(170, '绿色和平组织的弥天大谎', '本地', 'http://t2.baidu.com/it/u=http%3A%2F%2Fnews.ts.cn%2Fcontent%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20160704%2F448a5baf8c9e18e400da09.jpg&fm=30', '近日110名诺贝尔奖获得者（几乎都是自然科学领域的诺贝尔奖获得者，主要是生物学方面的）发出联名信，敦促绿色和平组织承认权威科学机构和管理机构关于转基因食品安全性的结论，不要再反对转基因作物，尤其是不要反对为解决维生素A缺乏症问题研发的金大米。绿色和平组织国际总部对这封公开信装聋作哑，在其网站上没有对此做出回应。倒是绿色和平组织的北京办事处以绿色和平的名义发了一则中文回应《对诺贝尔奖得主就绿色和平关于转基因态度联名信的回应》（http://www.greenpeace.org.cn/replay-to-nobelist/ ）。为什么只发中文回应，不发英文或其他语言的回应，颇为奇怪，可能是觉得中国人好欺骗。不信请看，该回应称：\r\n\r\n【绿色和平并没有像信中所说阻碍转基因黄金大米的推广。水稻研究所（International Rice Research Institute，该机构计划向亚洲国家推广黄金大米）评估认为，至今为止还未能有效证明黄金大米能够切实解决维生素A缺乏的问题。黄金大米在经过超过20年的研发后仍没有实现商业推广。】', '2016-07-04'),
(171, '孙楠曝《歌手》退赛内幕 称以后将当导演', '娱乐', 'http://www.jiaoman.cc/uploads/allimg/160704/20-160F4111331.jpg', '明星语言励志演说秀《说出我世界》已于7月3日正式登陆江苏卫视[微博]周日10点晚间档，首期节目“歌王”孙楠[微博]一举夺冠，他也将有机会进入鸟巢，争夺总决赛冠军宝座。作为该节目第一期话题担当的孙楠，在演讲的舞台上他大打温情牌，讲述举家从北京搬迁至徐州的不为人知内情。此外，他还首次正面回应《我是歌手》退赛问题，称：“为了节目更好看。”\r\n\r\n　　为孩子举家搬迁远离大都市 邀韩红[微博]毛阿敏一起打造“学堂乐歌”\r\n\r\n　　《说出我世界》是一档棚内录制的名人演说类真人秀，节目组邀请60多位当红明星、各界精英、意见领袖和名人大腕来分享自己的人生故事，传递社会正能量。演讲结束后，由在场的51家媒体和200多位现场观众票选出他们眼中的“头条之星”。节目中，孙楠身着一袭汉服登场，他并没有选择自己的音乐经历作为演讲主题，而是以一位父亲的身份谈孩子的教育问题，这个主题也是本期助他夺冠的重要因素。', '2016-07-04'),
(172, '贾玲深夜发“告白文” 网友猜对象是薛之谦', '本地', 'http://img5.aili.com/201607/04/1467599789_17067300.jpg', '今日凌晨2点，贾玲在微博发了一张戴口罩的自拍，并且附上了深情的“告白文”：“刚才想编个小品关于你～根本没办法～难受的胃都疼。我长得越来越像你了……”', '2016-07-04'),
(173, '什么鬼？《津东奶茶》拍电影邀王思聪出演', '社会', 'http://www.jiaoman.cc/uploads/allimg/160704/20-160F4112144.jpg', '　《津东奶茶》，是个什么鬼?据说是快递员刘津东与奶茶店小妹的励志爱情故事。有多励志?人家可是打败了情敌花心阔少王大葱哦，你说励不励志!所以，这部去年就被网友曝光已获国家新闻出版广电总局审核通过备案的电影，真的要开拍了。', '2016-07-04'),
(174, '王思聪想找黄子韬当嘉宾 周杰被吐槽反击', '本地', 'http://img7.aili.com/201607/04/1467596980_97632400.jpg', '3日晚，《吐槽大会》发布会在沪举办，王思聪、叫兽易小星、谷大白话等悉数到场。现场，王思聪直言应该会上第二季节目，并呼唤一向格外“关心”的黄子韬，“我希望找黄子韬上。”\r\n \r\n王思聪：想找黄子韬当嘉宾\r\n \r\n据介绍，《吐槽大会》每期会邀请一位有黑点的明星主角来到现场，6位吐槽团成员对该明星进行轮番吐槽，最后由被吐槽的主角上场进行绝地反击。\r\n \r\n王思聪作为节目的投资人，被问及是如何与《吐槽大会》结缘，他十分耿直地给出答案“便宜”，“我现在把中国戏剧节目看了个遍，各大卫视做的我就不点名了，反正是所有的嘛。我说实话一点都不好笑，当然这个节目也就是强一点。但是这么便宜给我，我觉得有戏就投了。”', '2016-07-04'),
(175, '李易峰出席广州见面会 实力宠粉男友力Max （1', '娱乐', 'http://shehui.rmzxb.com.cn/upload/resources/image/2016/07/04/716782_500x500.jpg', '7月2日，李易峰现身广州出席“健康活力派”见面会，吸引了近2万名粉丝的到场助阵。活动上，李易峰与观众互动传递绿色健康的生活方式，面对高温天气贴心护粉令众人感动不已。整场活动高潮迭起，新作品《青云志》也成为众人关注的焦点，李易峰不仅透露即将与大家见面，也表达了自己对该剧的看法。\r\n　　继北京的“健康3km走”活动后，为了更有效倡导“绿色健康”的生活方式，李易峰再次现身广州将“健康活力”的理念持续扩散和传递。', '2016-07-04'),
(176, '哈林小13岁女友素颜热裤配美腿身材火辣', '社会', 'http://img6.aili.com/201607/04/1467597203_01931900.jpg', '据台湾媒体报道，日前47岁伊能静在美国顺利产下1女，54岁前夫庾澄庆（哈林）现则与小13岁民视主播张嘉欣感情稳定，一度传出好事将近。前天到东区跑步健身，恰巧遇到她搭小黄到发廊，一身热裤的张嘉欣，展现主播台下看不到的美腿，近似素颜的她肤质不赖，算是主播界白白美魔女1枚。\r\n', '2016-07-04'),
(177, '赫子铭实力黑老婆 吐槽何洁肉太肥 （1）', '本地', 'http://shehui.rmzxb.com.cn/upload/resources/image/2016/07/04/717032_500x500.jpg', '上周五，刘芸、陈紫函、戴向宇、何洁、赫子铭同台亮相《大牌对王牌》组团虐汪。节目中陈紫函首度公开了求婚细节，称太过惊喜竟忘了说“我愿意”急坏了老公戴向宇。何洁赫子铭则展示了独特的恩爱互动方式，一个黑老婆一个坑老公，被网友称为秀恩爱的最高境界。\r\n　　赫子铭实力黑老婆 吐槽何洁肉太肥\r\n　　结婚3年的何洁赫子铭从不吝啬秀恩爱，在微博中时常能看到两人或搞怪或逗比的甜蜜互动，在《大牌对王牌》的节目中两人更是将相爱相黑的恩爱模式发挥到了极致。', '2016-07-04'),
(178, '太爱易烊千玺，大张伟把偶像“穿”在身上', '娱乐', 'http://img6.aili.com/201607/04/1467599647_78890700.jpg', '近日，大张伟在录某节目时，身穿印有易烊千玺头像的T-shirt，被网友调侃是易烊千玺的脑残粉。', '2016-07-04'),
(179, '当宋小宝遇上吴亦凡…这颜值对比实在太强烈', '社会', 'http://p3.ifengimg.com/a/2016_28/a44ba4093436843_size441_w690_h920.jpg', '今日（7月4日），大鹏晒出一张吴亦凡和宋小宝的合影，附文“哈哈哈哈哈哈哈哈哈”。照片中，宋小宝在身高187cm的吴亦凡身边显得十分娇小，两人一黑一白的肤色也形成了强烈的对比。\r\n\r\n网友纷纷调侃“没有对比就没有伤害”、“宋小宝比影子还黑”、“我要牛奶加咖啡一杯又一杯”。', '2016-07-04'),
(180, '鹿晗在跑男的表现完全就是老司机进阶史啊', '本地', 'http://img5.aili.com/201607/04/1467596257_76293000.jpg', '\r\n不知不觉，鹿晗已经在“跑男”里奔跑了两季，上周迎来了收官战。细心的观众一定都感受到了他的成长。从总是被女嘉宾首撕，到可以“手刃”大黑牛；从智商捉急的傻狍子，到学霸属性全开的机智鹿；从总是说话不怕得罪人的耿直boy，到懂得搞siao的综艺咖。让人不由惊叹，这哪是《跑男4》啊，明明是《鹿晗老司机进阶史》嘛！下面小编就来给大家撸一撸他的进阶之路。\r\n \r\n女嘉宾首撕对象→逆袭成功，手撕金钟国和大黑牛\r\n \r\n还记得鹿晗在《跑男3》“初跑”以后，大家都为王祖蓝松了一口气，总算又多了一个垫底同胞了。本以为是体能担当的他，却总是自带呆萌属性地被女嘉宾第一个盯上。连陈赫都调侃“鹿晗是女嘉宾的菜”。', '2016-07-04'),
(181, '   自拍、热舞、玩直播…影后李小璐为何走上网红路', '娱乐', 'http://d.ifengimg.com/mw600/p1.ifengimg.com/haina/2016_28/bfee7e71a7b5bfe_w690_h563.jpeg', '但如今发个自拍拍照对李小璐来说都是小CASE了，她迷恋上了和大家分享她的跳舞视频，前两天她又上传了一段模仿韩女团SISTAR的《shake it》舞蹈。', '2016-07-04'),
(182, ' 《影视风云》风云探星游记 马德华的西游往事', '社会', 'http://photocdn.sohu.com/20160704/Img457663778.jpg', '搜狐娱乐讯 电视剧《西游记》自1986年开播至今已经三十年，剧中生动的人物形象、亦真亦幻的情境给观众留下了深刻的印象。而唐僧、孙悟空、猪八戒、沙僧师徒四人历经重重磨难最后取得真经的故事，更是打动了无数的观众。剧中的猪八戒不仅嘴馋，还爱偷懒、有点花心，但他的扮演者马德华是一个喜爱美食、局气、有担当、感情专一的地道北京男人，生活中与妻子更是恩爱有加。北京电视台文艺频道7月6日19:35，《影视风云》特别版“风云探星游记”再度出发，不仅与“猪八戒”马德华重游北京陶然亭公园，更一同前往白魁老号饭庄探寻地道的老北京清真美食，爱吃西瓜的“猪八戒”马德华还专程带领我们去水果店，传授挑西瓜的秘诀！本期节目中，个性爽朗的马德华不仅回忆了《西游记》拍摄时的惊险故事，更分享了与太太相处的点滴趣事。', '2016-07-04'),
(183, '李敏镐公司警告恶意攻击者 将用法律手段对应', '本地', 'http://img1.gtimg.com/ent/pics/hv1/52/135/2093/136131802.png', '腾讯娱乐讯 近日，针对#李敏镐#受到恶意攻击的问题，所属经纪公司MYM娱乐表示：“近来，部分网友在门户网站及社交论坛上散播虚假谣言，并发布具有人身攻击性质的帖子及评论。为了保护我社艺人的权益，日后将通过法律手段来强硬对应。”\r\n\r\n7月4日，公司方面通过某媒体表示，先前公司便了解到了恶意性留言的问题，期间持续有粉丝要求公司进行强硬对应，经过一番考虑，最终作出了以上决定。', '2016-07-04'),
(184, '泰勒抖森海中湿身相拥 网友调侃狗粮一波接一波', '娱乐', 'http://fun.youth.cn/yl24xs/201607/W020160704517765308621.png', '泰勒抖森海中湿身相拥，秀恩爱成双成对霉霉、抖森与众多好友海边玩耍，泰勒抖森两人上演鸳鸯戏水，抖森上衣更印有“I T.S”字样。超模karlie kloss、Gigi Hadid等排成一线，好身材甚是养眼，不少情侣档水中拥吻。网友调侃狗粮一波接一波', '2016-07-04'),
(185, '《夏日甜心》举办发布会 粉丝直播季正式启动', '社会', 'http://photocdn.sohu.com/20160704/Img457662547.jpg', '　搜狐娱乐讯 7月3日，湖南卫视全新推出的暑期大型少女团体综艺节目《夏日甜心》于珠海举行节目开机发布会。湖南卫视联动十大直播平台打造前所未有的“甜心派对”，直播平台美女主播探访甜心录制基地，体验梦幻红毯走秀，直击暑期档最令人期待的节目发布会现场，与甜心兄长、萌萌的团宠亲密互动，与节目主创亲切交流访谈，再次将“直播＋综艺”的传播方式推上新高潮，这也是湖南卫视“2016暑期粉丝直播季”宣告正式启动的“开幕式”。甜心来袭，直播助力，点燃初夏高温的“2016暑期粉丝直播季”，即将闪耀整个夏季荧屏！', '2016-07-04'),
(186, '《银魂》真人电影化决定！小栗旬出演银时', '社会', 'http://www.comicyu.com/UploadFiles/mylb/2016/7/201674133656.jpg', '根据最新情报显示，人气漫画「银魂」将被改编成真人电影，并于2017年公开。据悉，本作主人公坂田银时将会由日本知名男演员小栗旬担当，而出任监督和负责剧本的会是执导过「变态假面」、「勇者义彦」等作品的福田雄一。\r\n「银魂」原作漫画是空知英秋自「周刊少年Jump」2004年2号上开始连载的作品，目前单行本已经推出了64卷。值得一提的是，该作的电视动画版第1期、第2期及其延长战，分别曾于2006年4月至2010年3月、2011年4月至次年3月和2012年10月至次年3月间播出，而其第3期「银魂゜」也已于今年3月底完结。', '2016-07-04'),
(187, '冯小刚余文乐自金立后再度携手暑期档', '本地', 'http://pic.imobile.com.cn/images/source/2016/7/42/422749_d8e7f.png', '这部电影片名确定为《手机芯战》，不仅冯导亲自上阵主演，还有“时尚潮神”余文乐鼎力加盟。影片海报今天发布，并定档7月26日上映。\r\n\r\n冯小刚、余文乐此前已有过合作基础，一个月前，两人就曾携手宣布代言著名手机品牌金立。对于此番两人再度联袂，不少影迷表示十分期待。', '2016-07-04');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(12) NOT NULL,
  `users` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `users`, `password`) VALUES
(9, 'admin', '202cb962ac59075b964b07152d234b70'),
(10, 'admin', '202cb962ac59075b964b07152d234b70'),
(11, 'admin', '202cb962ac59075b964b07152d234b70'),
(12, 'admin', '47bce5c74f589f4867dbd57e9ca9f808'),
(13, 'admin', '202cb962ac59075b964b07152d234b70'),
(14, 'qqq', '698d51a19d8a121ce581499d7b701668'),
(15, '111', '6512bd43d9caa6e02c990b0a82652dca'),
(16, '123', '202cb962ac59075b964b07152d234b70'),
(17, 'admin', '202cb962ac59075b964b07152d234b70'),
(18, 'admin', '202cb962ac59075b964b07152d234b70'),
(19, 'admin', '3d4478eb8cae476e97eacd52aa1cca16'),
(20, 'admin', '202cb962ac59075b964b07152d234b70'),
(21, 'ad', 'c20ad4d76fe97759aa27a0c99bff6710');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;