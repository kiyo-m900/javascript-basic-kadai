//ボタン要素とh2要素の取得
const btn = document.getElementById("btn");
const text = document.getElementById("text");

//イベント処理の定義
btn.addEventListener("click", () => {
  //非同期処理の定義
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  },2000);
});