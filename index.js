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
    for(let j = 0; j < rows[i].length; i++) {
        for(let p in chars) {
            
                console.log(rows[i][j])
        }
    }
}
/*
console.log(rows)

let height = 21;
let string = `

`;

for(let i = 0; i < 21; i++) {

}
*/
console.log(catData);