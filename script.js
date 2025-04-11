// 全域變數來儲存所有景點資料
let attractions = [
    // --- 範例資料 ---
    // 你需要將這裡替換成至少 20 筆真實的景點資料
    // 請確保每個物件都包含需求中提到的 6 個欄位 + 1 個分類欄位
    {
      name: '台北 101', // 地點名稱 (對應 item-title)
      region: '信義區', // 地區 (對應 item-subtitle 或 tag)
      openingHours: '觀景台: 11:00-21:00', // 開放時間 (對應 item-subtitle 或 details)
      features: '曾是世界第一高樓，提供壯觀的城市景觀，擁有高速電梯和購物中心。', // 特色 (對應 item-details)
      category: '地標景點', // 分類 (用於 ion-select 過濾 和 ion-chip 顯示)
      imageUrl: 'https://via.placeholder.com/800x600.png?text=Taipei+101+Image', // 景點照片 URL (請替換為真實、合規的圖片 URL)
      videoUrl: 'https://www.youtube.com/watch?v=exampleVideoID', // 導覽影片 URL (YouTube 或 本地影片路徑)
    },
    {
      name: '故宮博物院',
      region: '士林區',
      openingHours: '09:00-17:00 (週一休館)',
      features: '收藏大量中華古代文物與藝術品，是研究漢學和華夏文化的重要機構。',
      category: '博物館',
      imageUrl: 'https://via.placeholder.com/800x600.png?text=NPM+Image',
      videoUrl: 'videos/npm_intro.mp4', // 假設有一個本地影片
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
const listElement = document.querySelector('ion-list');

// 找到搜尋框 <ion-searchbar> 元素
const searchbarElement = document.querySelector('ion-searchbar');

// 找到分類下拉選單 <ion-select> 元素
const categorySelectElement = document.querySelector('ion-select');

// --- 檢查是否成功選取 (可選，用於除錯) ---
// console.log(listElement, searchbarElement, categorySelectElement); 
// 你可以在瀏覽器的開發者工具 Console 中看到這些元素是否被正確找到