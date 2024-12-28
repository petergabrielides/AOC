const raw = `773 79858 0 71 213357 2937 1 3998391`

//if i know the length and the last digit of a number, i dont need to know anything else! (not true - what if it splits in half? how to know the last didgt of that numb)

const a = raw.split(` `);

let stones = [];

const comp = [773];

a.forEach(str => {
  stones.push(+str);
  //comp.push(+str);
})

/*document.querySelector('button').addEventListener('click', () => {
  const b = stones.length;
  blink();
  document.querySelector('.a')
    .innerHTML = `${stones.length}`;
  document.querySelector('.b')
    .innerHTML = `${stones.length / b}`
  document.querySelector('.c')
    .innerHTML = `${stones}`;
});*/

/*for (let i = 0; i < 25; i++) {
  stones = blink(stones);
}*/
debugger
console.log(stones.some((_, i) => {
  comp.every((val, k) => stones[i + k] === val)
}))

function blink(arrIn) {
  const arr = [];

  arrIn.forEach(val => {
    if (val === 0) {
      arr.push(1);
    } else if (val.toString().length % 2 === 0) {
      const str = val.toString();
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
      arr.push(val * 2024);
    }
  })

  return arr;
}

/*const stonesState = {
  zero: 0,
  evenLengthNumber: 0,
  others: 0
}*/

