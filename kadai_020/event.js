// id属性が"text"の要素を取得し、変数textに格納
const textElement = document.getElementById('text');

// id属性が"btn"のボタン要素を取得し、変数btnに格納
const btn = document.getElementById('btn');

// ボタンがクリックされた時にイベント処理を実行
btn.addEventListener('click', function() {
  // textElementのテキストを変更
  textElement.textContent = 'ボタンをクリックしました';
});