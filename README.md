# discord-decorator  
Parse decorator into readable object for your command options!  

## simple usage  
```js  
const parser = require("discord-decorator");  
let rawcmd = "!hello -c ninja --o devfurr.exe -h";  

const decor = parser.parse(rawcmd, {prefix:["--"], defaultValue: true});  

console.log(rawcmd.c);  
console.log(rawcmd.o);  
console.log(decor.h);  

console.log(decor);  
```  

**parse(command, option)**  
`command`: Raw string command  
`option`: Object options to parse  

## Options list:  
| Option      | Description |
| ----------- | ----------- |
| prefix      | array of prefix, example `["--", "-"]` |
| defaultValue   | if a decorator found with no value, it will return `defaultValue` |
| multiSpace   | tell to parser to capture next word until new decorator found or meet the EOF |


For more info, [Github link](https://github.com/Fastering18/discord-decorator)  
Discord, [server](https://discord.gg/zh9zknfGPp)  