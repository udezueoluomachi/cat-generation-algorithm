"use strict";
const catData = 
`
###################################################

                 #  _______  #                                                              
                ###*********####
               #                #
              #    (0)    (0)    #
              #     == O ==      #
               #       w        #
                 #            #
                   #         #
                 #             #
                #                #
               #                  #
               #                   #
               #  #    #    #    #  #
                #  #   #    #    #   #
                 #  #  #     #  #    ##
                   # # #____ # #    ####
                     ###     ###___#  ###
                 #____________________###
                  ######################
`;

const rows = catData.split("\n").map(e => e.split(""));

const chars = ["#","_","*","(0)","o","=","w"]
const charCords = [];

for(let i = 0; i < rows.length; i++) {
  if(rows[i].length > 0) {
    for(let j = 0; j < rows[i].length; j++) {
      if(chars.some(e => e == rows[i][j])) {
        charCords.push({
          char : rows[i][j],
          x : j,
          y : i
        })
      }
    }
  }
}

const orgChars = [];
let maxX = 0 , maxY = 0;

for(let i = 0; i < charCords.length; i++) {
  if(charCords[i].x > maxX) {
    maxX = charCords[i].x;
  }
  if(charCords[i].y > maxY) {
    maxY = charCords[i].y;
  }
}

for(let i = 0; i <= maxY; i++) {
  orgChars.push([]);
  for(let j = 0; j <= maxX; j++) {
    orgChars[i].push(" ");
  }
}


for(let i = 0; i < charCords.length; i++) {
  orgChars[charCords[i].y][charCords[i].x] = charCords[i].char;
}

for(let i = 0; i < orgChars.length; i++) {
  console.log(orgChars[i].join(""))
}

//My goal is to create an algorithm that generates the data below

`
{char: '#', x: 0, y: 1},
{char: '#', x: 1, y: 1},
{char: '#', x: 2, y: 1},
{char: '#', x: 3, y: 1},
{char: '#', x: 4, y: 1}, 
{char: '#', x: 5, y: 1},
{char: '#', x: 6, y: 1},
{char: '#', x: 7, y: 1},
{char: '#', x: 8, y: 1},
{char: '#', x: 9, y: 1},
{char: '#', x: 10, y: 1},
{char: '#', x: 11, y: 1},
{char: '#', x: 12, y: 1},
{char: '#', x: 13, y: 1},
{char: '#', x: 14, y: 1},
{char: '#', x: 15, y: 1},
{char: '#', x: 16, y: 1},
{char: '#', x: 17, y: 1},
{char: '#', x: 18, y: 1},
{char: '#', x: 19, y: 1},
{char: '#', x: 20, y: 1},
{char: '#', x: 21, y: 1},
{char: '#', x: 22, y: 1},
{char: '#', x: 23, y: 1},
{char: '#', x: 24, y: 1},
{char: '#', x: 25, y: 1},
{char: '#', x: 26, y: 1},
{char: '#', x: 27, y: 1},
{char: '#', x: 28, y: 1},
{char: '#', x: 29, y: 1},
{char: '#', x: 30, y: 1},
{char: '#', x: 31, y: 1},
{char: '#', x: 32, y: 1},
{char: '#', x: 33, y: 1},
{char: '#', x: 34, y: 1},
{char: '#', x: 35, y: 1},
{char: '#', x: 36, y: 1},
{char: '#', x: 37, y: 1},
{char: '#', x: 38, y: 1},
{char: '#', x: 39, y: 1},
{char: '#', x: 40, y: 1},
{char: '#', x: 41, y: 1},
{char: '#', x: 42, y: 1},
{char: '#', x: 43, y: 1},
{char: '#', x: 44, y: 1},
{char: '#', x: 45, y: 1},
{char: '#', x: 46, y: 1},
{char: '#', x: 47, y: 1},
{char: '#', x: 48, y: 1},
{char: '#', x: 49, y: 1},
{char: '#', x: 50, y: 1},
{char: '#', x: 17, y: 3},
{char: '_', x: 20, y: 3},
{char: '_', x: 21, y: 3},
{char: '_', x: 22, y: 3},
{char: '_', x: 23, y: 3},
{char: '_', x: 24, y: 3},
{char: '_', x: 25, y: 3},
{char: '_', x: 26, y: 3},
{char: '#', x: 29, y: 3},
{char: '#', x: 16, y: 4},
{char: '#', x: 17, y: 4},
{char: '#', x: 18, y: 4},
{char: '*', x: 19, y: 4},
{char: '*', x: 20, y: 4},
{char: '*', x: 21, y: 4},
{char: '*', x: 22, y: 4},
{char: '*', x: 23, y: 4},
{char: '*', x: 24, y: 4},
{char: '*', x: 25, y: 4},
{char: '*', x: 26, y: 4},
{char: '*', x: 27, y: 4},
{char: '#', x: 28, y: 4},
{char: '#', x: 29, y: 4},
{char: '#', x: 30, y: 4},
{char: '#', x: 31, y: 4},
{char: '#', x: 15, y: 5},
{char: '#', x: 32, y: 5},
{char: '#', x: 14, y: 6},
{char: '#', x: 33, y: 6},
{char: '#', x: 14, y: 7},
{char: '=', x: 20, y: 7},
{char: '=', x: 21, y: 7},
{char: '=', x: 25, y: 7},
{char: '=', x: 26, y: 7},
{char: '#', x: 33, y: 7},
{char: '#', x: 15, y: 8},
{char: 'w', x: 23, y: 8},
{char: '#', x: 32, y: 8},
{char: '#', x: 17, y: 9},
{char: '#', x: 30, y: 9},
{char: '#', x: 19, y: 10},
{char: '#', x: 29, y: 10},
{char: '#', x: 17, y: 11},
{char: '#', x: 31, y: 11},
{char: '#', x: 16, y: 12},
{char: '#', x: 33, y: 12},
{char: '#', x: 15, y: 13},
{char: '#', x: 34, y: 13},
{char: '#', x: 15, y: 14},
{char: '#', x: 35, y: 14},
{char: '#', x: 15, y: 15},
{char: '#', x: 18, y: 15},
{char: '#', x: 23, y: 15},
{char: '#', x: 28, y: 15},
{char: '#', x: 33, y: 15},
{char: '#', x: 36, y: 15},
{char: '#', x: 16, y: 16},
{char: '#', x: 19, y: 16},
{char: '#', x: 23, y: 16},
{char: '#', x: 28, y: 16},
{char: '#', x: 33, y: 16},
{char: '#', x: 37, y: 16},
{char: '#', x: 17, y: 17},
{char: '#', x: 20, y: 17},
{char: '#', x: 23, y: 17},
{char: '#', x: 29, y: 17},
{char: '#', x: 32, y: 17},
{char: '#', x: 37, y: 17},
{char: '#', x: 38, y: 17},
{char: '#', x: 19, y: 18},
{char: '#', x: 21, y: 18},
{char: '#', x: 23, y: 18},
{char: '_', x: 24, y: 18},
{char: '_', x: 25, y: 18},
{char: '_', x: 26, y: 18},
{char: '_', x: 27, y: 18},
{char: '#', x: 29, y: 18},
{char: '#', x: 31, y: 18},
{char: '#', x: 36, y: 18}, 
{char: '#', x: 37, y: 18}, 
{char: '#', x: 38, y: 18}, 
{char: '#', x: 39, y: 18}, 
{char: '#', x: 21, y: 19}, 
{char: '#', x: 22, y: 19}, 
{char: '#', x: 23, y: 19}, 
{char: '#', x: 29, y: 19}, 
{char: '#', x: 30, y: 19}, 
{char: '#', x: 31, y: 19}, 
{char: '_', x: 32, y: 19}, 
{char: '_', x: 33, y: 19}, 
{char: '_', x: 34, y: 19}, 
{char: '#', x: 35, y: 19}, 
{char: '#', x: 38, y: 19}, 
{char: '#', x: 39, y: 19}, 
{char: '#', x: 40, y: 19}, 
{char: '#', x: 17, y: 20}, 
{char: '_', x: 18, y: 20}, 
{char: '_', x: 19, y: 20}, 
{char: '_', x: 20, y: 20}, 
{char: '_', x: 21, y: 20}, 
{char: '_', x: 22, y: 20}, 
{char: '_', x: 23, y: 20}, 
{char: '_', x: 24, y: 20}, 
{char: '_', x: 25, y: 20}, 
{char: '_', x: 26, y: 20}, 
{char: '_', x: 27, y: 20}, 
{char: '_', x: 28, y: 20}, 
{char: '_', x: 29, y: 20}, 
{char: '_', x: 30, y: 20}, 
{char: '_', x: 31, y: 20}, 
{char: '_', x: 32, y: 20}, 
{char: '_', x: 33, y: 20}, 
{char: '_', x: 34, y: 20}, 
{char: '_', x: 35, y: 20}, 
{char: '_', x: 36, y: 20}, 
{char: '_', x: 37, y: 20}, 
{char: '#', x: 38, y: 20}, 
{char: '#', x: 39, y: 20}, 
{char: '#', x: 40, y: 20}, 
{char: '#', x: 18, y: 21}, 
{char: '#', x: 19, y: 21}, 
{char: '#', x: 20, y: 21}, 
{char: '#', x: 21, y: 21}, 
{char: '#', x: 22, y: 21},
{char: '#', x: 23, y: 21}, 
{char: '#', x: 24, y: 21}, 
{char: '#', x: 25, y: 21}, 
{char: '#', x: 26, y: 21}, 
{char: '#', x: 27, y: 21}, 
{char: '#', x: 28, y: 21}, 
{char: '#', x: 29, y: 21}, 
{char: '#', x: 30, y: 21}, 
{char: '#', x: 31, y: 21}, 
{char: '#', x: 32, y: 21}, 
{char: '#', x: 33, y: 21}, 
{char: '#', x: 34, y: 21}, 
{char: '#', x: 35, y: 21}, 
{char: '#', x: 36, y: 21}, 
{char: '#', x: 37, y: 21}, 
{char: '#', x: 38, y: 21}, 
{char: '#', x: 39, y: 21}
`