document.addEventListener("DOMContentLoaded", () => {
  // 获取 DOM 元素
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const attractionsList = document.getElementById("attractions-list");
  const attractions = [
    {
      name: "黄山",
      region: "安徽",
      openingHours: "07:00-19:00",
      features:
        "黄山原名黟山,因峰岩青黑,遥望苍黛而名.后因传轩辕黄帝曾在此炼丹成仙,唐玄宗信奉道教,故于天宝六年(公元747年)六月十七日改为黄山",
      category: "神秀山河",
      imageUrl: "images/huangshan.jpg",
      videoUrl: "videos/huangshan.mp4",
    },
    {
      name: "武夷山",
      region: "福建",
      openingHours: "07:00-19:00",
      features:
        "作为中国东南地区的主要标志和联合国教科文组织世界文化遗产名录之一,武夷山以其身为程朱理学的起源与发展地备受推崇。",
      category: "神秀山河",
      imageUrl: "images/wuyishan.jpg",
      videoUrl: "videos/wuyishan.mp4",
    },
    {
      name: "月牙泉",
      region: "甘肃省",
      openingHours: "07:00-19:00",
      features:
        "环抱月牙泉的鸣沙山由一系列小山丘组成.鸣沙山以其独一无二的外形和随风而鸣的特点而闻名于世。",
      category: "神秀山河",
      imageUrl: "images/yueyaquan.jpg",
      videoUrl: "videos/yueyaquan.mp4",
    },
    {
      name: "黄果树瀑布",
      region: "贵州",
      openingHours: "07:00-19:00",
      features:
        "作为亚洲最高的瀑布,宏伟壮观的黄果树瀑布高约77.8米,宽约101米.它也是世界上首屈一指的大型瀑布,从上下左右前后,几乎所有方位都可以览其胜景。",
      category: "神秀山河",
      imageUrl: "images/huangguoshupubu.jpg",
      videoUrl: "videos/huangguoshanpubu.mp4",
    },
    {
      name: "九寨沟",
      region: "四川",
      openingHours: "07:00-19:00",
      features:
        "该湖湖水的神奇之处在于,它能够日日夜夜年复一年的变换颜色.湖水的颜色来源于湖边风景的倒影,还有湖底的藻类和钙化的岩石。",
      category: "神秀山河",
      imageUrl: "images/jiuzhaigou.jpg",
      videoUrl: "videos/jiuzhaigou.mp4",
    },
    {
      name: "海上观音像",
      region: "海南",
      openingHours: "08:00-21:00",
      features:
        "一体化三尊造型的佛像分别朝向中国大陆,中国台湾和南中国海,寓意为观音菩萨不仅保佑中国,也保佑全世界。",
      category: "人文胜迹",
      imageUrl: "images/hainanguanyinxiang.jpg",
      videoUrl: "videos/guanyin.mp4",
    },
    {
      name: "西安城墙",
      region: "陕西",
      openingHours: "08:00-21:00",
      features:
        "除却举世闻名的万里长城之外,始建于2000多年前的西安城墙,也反应了这个文明古国全盛时期劳动人民的智慧和力量。",
      category: "人文胜迹",
      imageUrl: "images/xianchengqiang.jpg",
      videoUrl: "videos/xian.mp4",
    },
    {
      name: "云冈石窟",
      region: "山西",
      openingHours: "08:00-21:00",
      features:
        "这批砂岩雕像组合了风格迥异的佛像艺术品,有中国式佛像,印度式佛像,也有波斯式佛像.其中最大的雕塑高达17米,最小的则只有2厘米。",
      category: "人文胜迹",
      imageUrl: "images/yungang.jpg",
      videoUrl: "videos/yungang.mp4",
    },
    {
      name: "布达拉宫",
      region: "西藏",
      openingHours: "08:00-21:00",
      features:
        "共有九层的布达拉宫矗立在3600米高的海拔上,这使它成为世界上最高的宫殿.它曾是达赖喇嘛的冬宫居所和西藏原执政政府所在地。",
      category: "人文胜迹",
      imageUrl: "images/budalagong.jpg",
      videoUrl: "videos/buladagong.mp4",
    },
    {
      name: "云和梯田",
      region: "浙江",
      openingHours: "06:00-19:00",
      features:
        "云和的字面意思是祥和的云朵。1000多年来,云和以及周边的梯田已经成为当地农民们赖以生存的家园。",
      category: "人文胜迹",
      imageUrl: "images/yunti.jpg",
      videoUrl: "videos/yunti.mp4",
    },
    {
      name: "维多利亚港",
      region: "香港",
      openingHours: "06:00-22:00",
      features:
        "维多利亚港两岸的夜景是世界上著名的观光点,是世界三大夜景之一.由于香港岛和九龙半岛高楼大厦满布,入夜后,大厦的灯光使维多利亚港两岸相互辉映。",
      category: "都市丽景",
      imageUrl: "images/HK.jpg",
      videoUrl: "videos/hk.mp4",
    },
    {
      name: "圣索非亚大教堂",
      region: "哈尔滨市",
      openingHours: "00:00-24:00",
      features:
        "远东地区最大的东正教教堂坐落在哈尔滨_这座中国最有俄国风味的城市。20世纪初期日俄战争结束后,流亡的俄罗斯人建立了这座占地721平米,高54米的拜占庭式建筑,作为当地东正教团体的精神支柱。",
      category: "都市丽景",
      imageUrl: "images/haerbin.jpg",
      videoUrl: "videos/suofeiya.mp4",
    },
    {
      name: "栈桥",
      region: "青岛",
      openingHours: "06:00-20:00",
      features:
        "栈桥自1892年建立之初一直是青岛市的标志.起初是为了欢迎清朝杰出的政治家李鸿章而建立的.栈桥的一端是如古典美人的回澜阁,这里终年举办有丰盛的历史文化展。",
      category: "都市丽景",
      imageUrl: "images/qingdao.jpg",
      videoUrl: "videos/zhanqiao.mp4",
    },
    {
      name: "凤凰古城",
      region: "湖南",
      openingHours: "06:00-20:00",
      features:
        "凤凰吊脚楼式的房屋是中国文艺爱好者的理想居所.古城还有着丰富的苗族和土家族文化,每年都有成群结队的背包客慕名而至。",
      category: "都市丽景",
      imageUrl: "images/hunanfenghuang.jpg",
      videoUrl: "videos/fenghuanggucheng.mp4",
    },
    {
      name: "灵山梵宫",
      region: "江苏",
      openingHours: "06:00-22:00",
      features:
        "中国的建筑一直深受风水和佛教思想的影响,在梵宫更是表现的淋漓尽致.因为梵宫可是占据着最好的风水:它位于小灵山脚下,太湖之滨,侧畔还有高达88米的灵山大佛。",
      category: "都市丽景",
      imageUrl: "images/fangong.jpg",
      videoUrl: "videos/lingshanfangong.mp4",
    },
    {
      name: "羌寨碉楼",
      region: "四川",
      openingHours: "06:00-20:00",
      features:
        "羌族碉楼有四角/五角/六角/八角/十角/十二角等不同形体,有片石/粘土/石粘混合等不同建造方式,高者达十余丈。",
      category: "民族风情",
      imageUrl: "images/diaolou.jpg",
      videoUrl: "videos/diaolou.mp4",
    },
    {
      name: "西江千户苗寨",
      region: "贵州省",
      openingHours: "06:00-20:00",
      features:
        "西江千户苗寨在半山建造独具特色的木结构吊脚楼,千余户吊脚楼随着地形的起伏变化,层峦叠嶂,鳞次栉比,蔚为壮观。",
      category: "民族风情",
      imageUrl: "images/miaozhai.jpg",
      videoUrl: "videos/qianhumiaozhai.mp4",
    },
    {
      name: "丽江古城",
      region: "云南",
      openingHours: "06:00-22:00",
      features:
        "丽江古镇又名大研镇,坐落在丽江坝中部,它是中国历史文化名城中唯一没有城墙的古镇,据说是因为丽江土司(世袭统治者)姓木,筑城势必如木字加框而成困字之故。",
      category: "民族风情",
      imageUrl: "images/lijiang.jpg",
      videoUrl: "videos/lijiang.mp4",
    },
    {
      name: "槟榔谷",
      region: "三亚",
      openingHours: "06:00-22:00",
      features:
        "槟榔谷黎苗文化旅游区创建于1998年,地处北纬18°，位于保亭县与三亚市交界的甘什岭自然保护区境内.景区坐落在万余棵亭亭玉立/婀娜多姿的槟榔林海,并置身于古木参天/藤蔓交织的热带雨林中",
      category: "民族风情",
      imageUrl: "images/binlanggu.jpeg",
      videoUrl: "videos/binlanggu.mp4",
    },
    {
      name: "呼伦贝尔大草原",
      region: "内蒙古",
      openingHours: "08:00-19:00",
      features:
        "呼伦贝尔草原是世界著名的天然牧场,是世界四大草原之一,被称为世界上最好的草原",
      category: "民族风情",
      imageUrl: "images/hulunbeier.jpeg",
      videoUrl: "videos/hulunbeier.mp4",
    },
  ];
  // 渲染景点列表
  function renderAttractions(attractionsToRender) {
    attractionsList.innerHTML = "";
    attractionsToRender.forEach((attraction) => {
      const article = document.createElement("article");
      article.classList.add("attraction-item");
      article.innerHTML = `
          <h2>${attraction.name}</h2>
          <p>${attraction.region} | ${attraction.openingHours}</p>
          <p>${attraction.features}</p>
          <video src="${attraction.videoUrl}" controls></video>
          <img src="${attraction.imageUrl}" alt="${attraction.name} 照片">
      `;
      attractionsList.appendChild(article);
    });
  }

  // 初始渲染
  renderAttractions(attractions);

  // 搜索功能
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredAttractions = attractions.filter((attraction) => {
      return (
        attraction.name.toLowerCase().includes(searchTerm) ||
        attraction.features.toLowerCase().includes(searchTerm)
      );
    });
    renderAttractions(filteredAttractions);
  });

  // 分类筛选
  categorySelect.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    let filteredAttractions = attractions;
    if (selectedCategory) {
      filteredAttractions = attractions.filter((attraction) => {
        return attraction.category === selectedCategory;
      });
    }
    renderAttractions(filteredAttractions);
  });
});
