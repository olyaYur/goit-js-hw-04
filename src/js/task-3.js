"use strict"; 

const profile = {
    username: "Jacob",
    playTime: 300,


    changeUsername(newName){
        for(let names in this.username){
        if(names === "Jacob") {
            this.username = "Jacob";
        }else if(names !== "Jacob")
            this.username = newName;
    }
        },

        

    updatePlayTime(hours){ 
       this.playTime +=hours;
    },

    getInfo(){
       return (`${this.username} has ${this.playTime} active hours! `);
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"*/

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"*/

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"*/
