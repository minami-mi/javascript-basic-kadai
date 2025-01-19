// btnというidを持つHTML要素を取得し、定数に代入する
// textというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
text.textContent = 'ボタンをクリックしました';
});