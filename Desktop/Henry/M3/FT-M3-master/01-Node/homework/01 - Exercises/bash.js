const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');


function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
   
}
function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on("data", function (data){
      var args = data.toString().trim().split(" ");
      var cmd = args.shift();
      if(commands[cmd]){
         commands[cmd](print, args.join(" "));
      }
      else{
         print(`command not found: ${cmd}`);
      }
   } )
;
}

bash();
module.exports = {
   print,
   bash,
};
