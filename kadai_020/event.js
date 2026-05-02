// button要素の取得
const btn = document.getElementById("btn");

// ボタンを押したときのイベント処理
btn.addEventListener('click', () => {
  const textLine = document.getElementById("text");
  textLine.textContent = "ボタンをクリックしました";
});