import { map } from "./data.js";
import { guardState, resetGuardState } from "./guardState.js";


function runSimulation() {
  while (
    !guardState.infiniteLoop
    && guardState.locAhead[0] < map.length
    && guardState.locAhead[0] >= 0
    && guardState.locAhead[1] < map[0].length
    && guardState.locAhead[1] >= 0
  ) {
    switch (guardState.type) {
      case 1:
  
        switch(map[guardState.locAhead[0]][guardState.locAhead[1]]) {
          case '.':
            guardState.lastXEntered = undefined;
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[0]--;
            guardState.locAhead[0]--;
  
            break;
  
          case '#':
            guardState.type++;
            guardState.locAhead[0]++;
            guardState.locAhead[1]++;
  
            break;
  
          case 'X':
            if (!guardState.lastXEntered) {
              guardState.lastXEntered = [
                guardState.locAhead[0], 
                guardState.locAhead[1],
                guardState.type
              ];
            } else if (
              guardState.lastXEntered[0] === guardState.locAhead[0] 
              && guardState.lastXEntered[1] === guardState.locAhead[1]
              && guardState.lastXEntered[2] === guardState.type
            ) {
              guardState.infiniteLoop = true;
            }
  
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[0]--;
            guardState.locAhead[0]--;
            
            break;
        }
  
        break;
  
      case 2:
  
        switch(map[guardState.locAhead[0]][guardState.locAhead[1]]) {
          case '.':
            guardState.lastXEntered = undefined;
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[1]++;
            guardState.locAhead[1]++;
            
            break;
  
          case '#':
            guardState.type++;
            guardState.locAhead[0]++;
            guardState.locAhead[1]--;
  
            break;
  
          case 'X':
            if (!guardState.lastXEntered) {
              guardState.lastXEntered = [
                guardState.locAhead[0], 
                guardState.locAhead[1],
                guardState.type
              ];
            } else if (
              guardState.lastXEntered[0] === guardState.locAhead[0] 
              && guardState.lastXEntered[1] === guardState.locAhead[1]
              && guardState.lastXEntered[2] === guardState.type
            ) {
              guardState.infiniteLoop = true;
            }
  
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[1]++;
            guardState.locAhead[1]++;
            
            break;
        }
  
        break;
  
      case 3:
  
        switch(map[guardState.locAhead[0]][guardState.locAhead[1]]) {
          case '.':
            guardState.lastXEntered = undefined;
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[0]++;
            guardState.locAhead[0]++;
            
            break;
  
          case '#':
            guardState.type++;
            guardState.locAhead[0]--;
            guardState.locAhead[1]--;
  
            break;
  
          case 'X':
            if (!guardState.lastXEntered) {
              guardState.lastXEntered = [
                guardState.locAhead[0], 
                guardState.locAhead[1],
                guardState.type
              ];
            } else if (
              guardState.lastXEntered[0] === guardState.locAhead[0] 
              && guardState.lastXEntered[1] === guardState.locAhead[1]
              && guardState.lastXEntered[2] === guardState.type
            ) {
              guardState.infiniteLoop = true;
            }
  
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[0]++;
            guardState.locAhead[0]++;
            
            break;
        }
  
        break;
  
      case 4:
  
        switch(map[guardState.locAhead[0]][guardState.locAhead[1]]) {
          case '.':
            guardState.lastXEntered = undefined;
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[1]--;
            guardState.locAhead[1]--;
            
            break;
  
          case '#':
            guardState.type -= 3;
            guardState.locAhead[0]--;
            guardState.locAhead[1]++;
  
            break;
  
          case 'X':
            if (!guardState.lastXEntered) {
              guardState.lastXEntered = [
                guardState.locAhead[0], 
                guardState.locAhead[1],
                guardState.type
              ];
            } else if (
              guardState.lastXEntered[0] === guardState.locAhead[0] 
              && guardState.lastXEntered[1] === guardState.locAhead[1]
              && guardState.lastXEntered[2] === guardState.type
            ) {
              guardState.infiniteLoop = true;
            }
  
            map[guardState.locAhead[0]][guardState.locAhead[1]] = '^';
            map[guardState.loc[0]][guardState.loc[1]] = 'X';
            guardState.loc[1]--;
            guardState.locAhead[1]--;
            
            break;
        }
  
        break;
    }
  }
}

let result = 0

//SP in real data is 65, 85

map.forEach((line, index1) => {
  line.forEach((square, index2) => {
    if (
      !(index1 === 65 && index2 === 85)
      && map[index1][index2] !== '#'
    ) {
      const mapCopy = JSON.parse(JSON.stringify(map));
      line[index2] = '#';
      runSimulation();
      if (guardState.infiniteLoop) {
        result++;
      }
      map.forEach((line, i) => {
        line.forEach((square, j) => {
          line[j] = mapCopy[i][j];
        })
      })
      resetGuardState();
    }
  })
})

console.log(result);
