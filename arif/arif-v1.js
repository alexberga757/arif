/*
Attribute Reader In File v1
*/

var fs = require('fs');
module.exports.readArif = class {

  constructor(content) {
    this.txt = content;
  
  }
  getString(getPopertiesType) {
    let token = "";
    const line = this.txt.split('\n');
    for (let n = 0;n < line.length;n++) {
       const Poperties = line[n].split(':');
           for (let i = 0;i < Poperties.length;i++) {
             if (Poperties[0] == getPopertiesType) {
              
               if (i == 0) {
                 
               }
               else {
                 token += ":"+Poperties[i];
               }
             }
             else {
               
             }
           }
      }
      return token.slice(1);
      
    }
  
  getBool(getPopertiesType){
    const get = this.getString(getPopertiesType);
    if (get == "true") return true;
    if (get == "false") return true;
    return 0;
  }
  
  getInt(getPopertiesType) {
    return parseInt(this.getString(getPopertiesType));
  }
  getPoperties(getPopertiesType) {
    return {
      popertiesName:getPopertiesType,
      popertiesValue:this.getString(getPopertiesType)
    }
  }
}


