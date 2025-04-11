// 全域變數來儲存所有景點資料
let attractions = [
  // --- 範例資料 ---
  // 你需要將這裡替換成至少 20 筆真實的景點資料
  // 請確保每個物件都包含需求中提到的 6 個欄位 + 1 個分類欄位
  {
    name: "	黄山	",
    region: "	安徽	",
    openingHours: "	07:00-19:00	",
    features:
      "	黄山原名黟山，因峰岩青黑，遥望苍黛而名。后因传轩辕黄帝曾在此炼丹成仙，唐玄宗信奉道教，故于天宝六年（公元747年）六月十七日改为“黄山”	",
    category: "	神秀山河	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=tnUAhPEtSIE	",
  },
  {
    name: "	武夷山	",
    region: "	福建	",
    openingHours: "	07:00-19:00	",
    features:
      "	作为中国东南地区的主要标志和联合国教科文组织世界文化遗产名录之一，武夷山以其身为程朱理学的起源与发展地备受推崇。	",
    category: "	神秀山河	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=UFZCCOgOnZI	",
  },
  {
    name: "	月牙泉	",
    region: "	甘肃省	",
    openingHours: "	07:00-19:00	",
    features:
      "	环抱月牙泉的鸣沙山由一系列小山丘组成。鸣沙山以其独一无二的外形和随风而鸣的特点而闻名于世。	",
    category: "	神秀山河	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=9MbMP4DGdyY	",
  },
  {
    name: "	黄果树瀑布	",
    region: "	贵州	",
    openingHours: "	07:00-19:00	",
    features:
      "	作为亚洲最高的瀑布，宏伟壮观的黄果树瀑布高约77.8米，宽约101米。它也是世界上首屈一指的大型瀑布，从上下左右前后，几乎所有方位都可以览其胜景。	",
    category: "	神秀山河	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=eTTbEl6PnPo	",
  },
  {
    name: "	九寨沟	",
    region: "	四川	",
    openingHours: "	07:00-19:00	",
    features:
      "	该湖湖水的神奇之处在于，它能够日日夜夜年复一年的变换颜色。湖水的颜色来源于湖边风景的倒影，还有湖底的藻类和钙化的岩石。	",
    category: "	神秀山河	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=DKLP_By5gBo	",
  },
  {
    name: "	海上观音像	",
    region: "	海南	",
    openingHours: "	08:00-21:00	",
    features:
      "	一体化三尊造型的佛像分别朝向中国大陆，中国台湾和南中国海，寓意为观音菩萨不仅保佑中国，也保佑全世界。	",
    category: "	人文胜迹	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=CzC0ZtHGr80	",
  },
  {
    name: "	西安城墙	",
    region: "	陕西	",
    openingHours: "	08:00-21:00	",
    features:
      "	除却举世闻名的万里长城之外，始建于2000多年前的西安城墙，也反应了这个文明古国全盛时期劳动人民的智慧和力量。	",
    category: "	人文胜迹	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=vyfbp4X5QTg	",
  },
  {
    name: "	云冈石窟	",
    region: "	山西	",
    openingHours: "	08:00-21:00	",
    features:
      "	这批砂岩雕像组合了风格迥异的佛像艺术品，有中国式佛像，印度式佛像，也有波斯式佛像。其中最大的雕塑高达17米，最小的则只有2厘米。	",
    category: "	人文胜迹	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=e2HQKm6ORU0	",
  },
  {
    name: "	布达拉宫	",
    region: "	西藏	",
    openingHours: "	08:00-21:00	",
    features:
      "	共有九层的布达拉宫矗立在3600米高的海拔上，这使它成为世界上最高的宫殿。它曾是达赖喇嘛的冬宫居所和西藏原执政政府所在地。	",
    category: "	人文胜迹	",
    imageUrl: "		",
    videoUrl:
      "	https://www.youtube.com/watch?v=nj2x5BEPZsA&list=PLMX26aiIvX5q6_ohtz78W0pk_R_Q51wWZ	",
  },
  {
    name: "	云和梯田	",
    region: "	浙江	",
    openingHours: "	06:00-19:00	",
    features:
      "	“云和”的字面意思是“祥和的云朵”。1000多年来，云和以及周边的梯田已经成为当地农民们赖以生存的家园。	",
    category: "	人文胜迹	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=B6xsrMGpIl0	",
  },
  {
    name: "	维多利亚港	",
    region: "	香港	",
    openingHours: "	06:00-22:00	",
    features:
      "	维多利亚港两岸的夜景是世界上著名的观光点，是世界三大夜景之一。由于香港岛和九龙半岛高楼大厦满布，入夜后，大厦的灯光使维多利亚港两岸相互辉映。	",
    category: "	都市丽景	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=q9z348DSW-g	",
  },
  {
    name: "	圣索非亚大教堂	",
    region: "	哈尔滨市	",
    openingHours: "	00:00-24:00	",
    features:
      "	远东地区最大的东正教教堂坐落在哈尔滨——这座中国最有俄国风味的城市。20世纪初期日俄战争结束后，流亡的俄罗斯人建立了这座占地721平米，高54米的拜占庭式建筑，作为当地东正教团体的精神支柱。	",
    category: "	都市丽景	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=qmG3DsNLN4w	",
  },
  {
    name: "	栈桥	",
    region: "	青岛	",
    openingHours: "	06:00-20:00	",
    features:
      "	栈桥自1892年建立之初一直是青岛市的标志。起初是为了欢迎清朝杰出的政治家李鸿章而建立的。栈桥的一端是如古典美人的回澜阁，这里终年举办有丰盛的历史文化展。	",
    category: "	都市丽景	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=PflLUjTXYQE	",
  },
  {
    name: "	凤凰古城	",
    region: "	湖南	",
    openingHours: "	06:00-20:00	",
    features:
      "	凤凰吊脚楼式的房屋是中国文艺爱好者的理想居所。古城还有着丰富的苗族和土家族文化，每年都有成群结队的背包客慕名而至。	",
    category: "	都市丽景	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=FNYyxdevZ7E	",
  },
  {
    name: "	灵山梵宫	",
    region: "	江苏	",
    openingHours: "	06:00-22:00	",
    features:
      "	中国的建筑一直深受风水和佛教思想的影响，在梵宫更是表现的淋漓尽致。因为梵宫可是占据着最好的风水：它位于小灵山脚下，太湖之滨，侧畔还有高达88米的灵山大佛。	",
    category: "	都市丽景	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=5lDKdGKnUoc	",
  },
  {
    name: "	羌寨碉楼	",
    region: "	四川	",
    openingHours: "	06:00-20:00	",
    features:
      "	羌族碉楼有四角、五角、六角、八角、十角、十二角等不同形体，有片石、粘土、石粘混合等不同建造方式，高者达十余丈。	",
    category: "	民族风情	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=QDHcWmQ2qwQ	",
  },
  {
    name: "	西江千户苗寨	",
    region: "	贵州省	",
    openingHours: "	06:00-20:00	",
    features:
      "	西江千户苗寨在半山建造独具特色的木结构吊脚楼，千余户吊脚楼随着地形的起伏变化，层峦叠嶂，鳞次栉比，蔚为壮观。	",
    category: "	民族风情	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=avGUYCXV24Y	",
  },
  {
    name: "	丽江古城	",
    region: "	云南	",
    openingHours: "	06:00-22:00	",
    features:
      "	丽江古镇又名大研镇，坐落在丽江坝中部，它是中国历史文化名城中唯一没有城墙的古镇，据说是因为丽江土司（世袭统治者）姓木，筑城势必如木字加框而成“困”字之故。	",
    category: "	民族风情	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=PJAG5hDwerQ	",
  },
  {
    name: "	槟榔谷	",
    region: "	三亚	",
    openingHours: "	06:00-22:00	",
    features:
      "	槟榔谷黎苗文化旅游区创建于1998年，地处北纬18°，位于保亭县与三亚市交界的甘什岭自然保护区境内。景区坐落在万余棵亭亭玉立、婀娜多姿的槟榔林海，并置身于古木参天、藤蔓交织的热带雨林中	",
    category: "	民族风情	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=SEAcnlUvO5o	",
  },
  {
    name: "	呼伦贝尔大草原	",
    region: "	内蒙古	",
    openingHours: "	08:00-19:00	",
    features:
      "	呼伦贝尔草原是世界著名的天然牧场，是世界四大草原之一，被称为世界上最好的草原	",
    category: "	民族风情	",
    imageUrl: "		",
    videoUrl: "	https://www.youtube.com/watch?v=uW9ptimEYZk	",
  },

  // ... 請在這裡繼續加入更多景點資料，至少 20 筆 ...
];

// --- 重要提醒 ---
// 1. 請務必找到真實的景點資料來替換上面的範例。
// 2. 圖片 URL 需注意版權、大小 (<300KB) 和尺寸 (<800x800)。
// 3. 影片 URL 可以是 YouTube 連結，或是本地影片檔案路徑 (大小 <5MB)。
// 4. 'category' 欄位是你自己定義的分類，至少要有 3 種。
// 5. 如果使用本地圖片/影片，你需要在專案資料夾中建立對應的 `images` 和 `videos` 資料夾來存放檔案。

// --- 選取 DOM 元素 ---

// 找到顯示列表的 <ion-list> 元素
const listElement = document.querySelector("ion-list");

// 找到搜尋框 <ion-searchbar> 元素
const searchbarElement = document.querySelector("ion-searchbar");

// 找到分類下拉選單 <ion-select> 元素
const categorySelectElement = document.querySelector("ion-select");

// --- 檢查是否成功選取 (可選，用於除錯) ---
// console.log(listElement, searchbarElement, categorySelectElement);
// 你可以在瀏覽器的開發者工具 Console 中看到這些元素是否被正確找到

// --- 渲染列表的函數 ---
function renderAttractions(itemsToRender) {
  // 首先清空現有的列表內容，防止重複添加
  listElement.innerHTML = "";

  // 如果沒有項目需要渲染 (例如搜尋結果為空)，可以顯示提示訊息
  if (itemsToRender.length === 0) {
    listElement.innerHTML = "<ion-item>找不到符合條件的景點。</ion-item>";
    return; // 結束函數執行
  }

  // 遍歷要渲染的景點陣列
  itemsToRender.forEach((item) => {
    // 為每個景點創建一個 ion-item 元素字串
    // 使用模板字串 (``) 可以方便地插入變數
    const itemHTML = `
        <ion-item>
          <div class="item-content">
            <div class="item-title">${item.name}</div> 
            <div class="item-subtitle">${item.region} | ${
      item.openingHours
    }</div> 
            <div class="item-details">${item.features}</div>
            
            <div class="item-media">
              <img src="${item.imageUrl}" alt="${
      item.name
    } 的照片" loading="lazy"> 
              </div>
  
            <div class="item-media">
              ${
                // 判斷 videoUrl 是 YouTube 連結還是本地檔案
                item.videoUrl.includes("youtube.com") ||
                item.videoUrl.includes("youtu.be")
                  ? `<iframe width="100%" height="auto" src="https://www.youtube.com/embed/${getYoutubeVideoId(
                      item.videoUrl
                    )}" frameborder="0" allowfullscreen></iframe>`
                  : item.videoUrl // 如果是本地影片，先簡單顯示路徑文字，或之後再改成 <video> 標籤
                // : `<video controls width="100%" preload="metadata"><source src="${item.videoUrl}" type="video/mp4">您的瀏覽器不支援 HTML5 影片。</video>` // 完整的 video 標籤用法
              }
              </div>
  
            <div class="tag-container">
              <ion-chip size="small" outline="true">${item.category}</ion-chip> 
              </div>
          </div>
        </ion-item>
      `;
    // 將創建好的 HTML 字串添加到 ion-list 的末尾
    listElement.innerHTML += itemHTML;
  });
}

// --- 輔助函數：從 YouTube URL 中提取 Video ID (如果需要嵌入 YouTube) ---
function getYoutubeVideoId(url) {
  // 簡單的提取邏輯，可能需要根據實際 YouTube URL 格式調整
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }
    return null; // 不是有效的 YouTube 連結
  } catch (e) {
    return null; // URL 格式錯誤
  }
}
// --- 初始載入 ---
// 頁面載入完成後，首次渲染所有景點
document.addEventListener("DOMContentLoaded", () => {
  renderAttractions(attractions);
  // 之後在這裡也會加入設定分類選單的程式碼
});
