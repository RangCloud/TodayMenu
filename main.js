let playButton = document.getElementById("handler"); // 시작버튼
let resetButton = document.getElementById("resetBtn"); // 리셋버튼
let koFoodBtn = document.getElementById("koBtn") // 한식버튼
let jaFoodBtn = document.getElementById("jaBtn") // 일식버튼
let chFoodBtn = document.getElementById("chBtn") // 중식버튼
let usFoodBtn = document.getElementById("usBtn") // 양식버튼
let allFoodBtn = document.getElementById("allBtn") // 모두버튼
let resultText = document.getElementById("resultText") // 나오는 음식

playButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

// 모든 메뉴 리스트
let allFood = [
  "김치찌개",
  "삼겹살",
  "떡볶이",
  "갈비찜",
  "냉면",
  "닭볶음탕",
  "국밥",
  "감자탕",
  "아구찜",
  "회/매운탕",
  "초밥",
  "라멘",
  "돈가스",
  "카레",
  "우동",
  "규동",
  "오코노미야키",
  "소바",
  "텐동",
  "타코야끼",
  "짜장면",
  "마라탕",
  "양꼬치",
  "짬뽕",
  "양장피",
  "마파두부밥",
  "중화볶음밥",
  "팔보채",
  "깐풍기",
  "라조기",
  "피자",
  "햄버거",
  "파스타",
  "리조또",
  "필라프",
  "함박스테이크",
  "스테이크",
  "토스트",
  "핫도그",
  "치킨",
];
// 한식 리스트
let koFood = [
  "김치찌개",
  "삼겹살",
  "떡볶이",
  "갈비찜",
  "냉면",
  "닭볶음탕",
  "국밥",
  "감자탕",
  "아구찜",
  "회/매운탕",
];
// 일식 리스트
let jaFood = [
  "초밥",
  "라멘",
  "돈가스",
  "카레",
  "우동",
  "규동",
  "오코노미야키",
  "소바",
  "텐동",
  "타코야끼",
];
// 중식 리스트
let chFood = [
  "짜장면",
  "마라탕",
  "양꼬치",
  "짬뽕",
  "양장피",
  "마파두부밥",
  "중화볶음밥",
  "팔보채",
  "깐풍기",
  "라조기",
];
// 양식 리스트
let usFood = [
  "피자",
  "햄버거",
  "파스타",
  "리조또",
  "필라프",
  "함박스테이크",
  "스테이크",
  "토스트",
  "핫도그",
  "치킨",
];


// 랜덤 메뉴 생성
function randomValueFood(foodList){
  const random = Math.floor(Math.random() * foodList.length);
  return foodList[random];
}

let koFoodList = randomValueFood(koFood);
let jaFoodList = randomValueFood(jaFood);
let chFoodList = randomValueFood(chFood);
let usFoodList = randomValueFood(usFood);
let allFoodList = randomValueFood(allFood);

function start() {
  resultText.innerText = allFoodList;

  
}
start();

// 리셋 클릭시 설정
function reset() {
  resultText.style.display = none;
}

// 다시 눌렀을 때 슬롯이벤트 다시 보이게