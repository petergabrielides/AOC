const raw = `773 79858 0 71 213357 2937 1 3998391`

const a = raw.split(` `);

let stones = [];

a.forEach(str => {
  stones.push(+str);
})

for (let i = 0; i < 25; i++) {
  blink();
}

console.log(stones.length);

function blink() {
  const arr = [];

  stones.forEach(stone => {
    if (stone === 0) {
      arr.push(1);
    } else if (stone.toString().length % 2 === 0) {
      const str = stone.toString();
      let newStr1 = '';
      for (let i = 0; i < str.length / 2; i++) {
        newStr1 += str[i];
      }
      let newStr2 = '';
      for (let i = str.length / 2; i < str.length; i++) {
        newStr2 += str[i];
      }
      arr.push(+newStr1);
      arr.push(+newStr2);
    } else {
      arr.push(stone * 2024);
    }
  })

  stones = arr;
}