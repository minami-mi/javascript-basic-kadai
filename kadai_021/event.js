// btnというidを持つHTML要素を取得し、定数に代入する
// textというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//btnをクリックした２秒後(2000)に表示が「ボタンをクリックしました」に変わる
btn.addEventListener('click', () => {
  setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
  }, 2000);
});