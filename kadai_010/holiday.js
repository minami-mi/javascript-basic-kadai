const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for (let i = 0; i < holidays.length; i ++ ) {
  console.log(holidays[i]);
}

// while文の場合
let i=0 ;  //変数(let)の名前をiとする＝０番め（正月）を表示
while (i<holidays.length) {　　//変数（i)がholidays.lengthまで指定した数字（祝日の数）より少ない間繰り返す
  console.log(holidays[i]);  //holidays(i番目)を出力する※０番目から順番に
　i++;                     //i番目＋1〜holidays.lengthまで(16番目)までやってね
}