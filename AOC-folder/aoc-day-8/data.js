const raw =  `.............C.7..................G..0...y........
..................7................C..............
....................................0......W....y.
.......................................D..W.......
..........u.......................................
..................................4.......D0...j..
.....................................D............
................O.....C................G..........
............F.....................C...............
......u..........F.................4.......y......
..........X..........5....4...........1...........
..........F...........5X...................3......
.............F.............................j.3....
.................u..............X.................
............................7.....................
..................................................
..........................5.....j2.........4......
....d.....................y...................j1..
..................................................
............................Y.e...................
.................d...X...............J...........e
.............d....................................
..............................Y..............1....
.........................................Y........
......................W......8..f...J.........3...
.......w.............J............................
...................................U.....f......e.
.................................Of....e....t...1.
.......g..........d......s........................
................G................f................
.....................................O............
...g........................T.....U...............
......................s..........T.............G..
................................s.......8.........
.....9........g...........o...U............E......
............g............................t....o...
...........................................6....E.
.....................s......x........6....E.......
..........w.9................x............t.......
...........9........w...........J.....6o..........
.............................................o....
..........S................U......................
.......S..2..........c........T.O....t............
.....2...S.....c...................T..............
..................x.......................8.......
....9.............................................
...wS.....................................6.......
................2........................8........
..................................................
.................x....c........................E..`.split('\n')

export const map = [];

raw.forEach(line => {
  const temp = [];
  for (let i = 0; i < line.length; i++) {
    temp.push(line[i]);
  }
  map.push(temp);
})