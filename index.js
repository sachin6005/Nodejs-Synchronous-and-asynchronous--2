const fs = require('fs')


const readTxt = fs.readFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-Synchronous-and-asynchronous--2/file.txt', 'utf-8')
console.log(readTxt)

const writeTxt = `${readTxt} and todays date is ${Date.now()}`
fs.writeFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-Synchronous-and-asynchronous--2/file.txt', writeTxt)


const readTxt2 = fs.readFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-Synchronous-and-asynchronous--2/index.txt', 'utf-8')
console.log(readTxt2)

const data = 'something should be written in the file'
const writeTxt2 = fs.writeFile('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-Synchronous-and-asynchronous--2/file.txt', data, (err,data) => {
     console.log(data)
      console.log(err);
     console.log("new data is added to the file");
 });
 console.log(writeTxt2)

 fs.readFile('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-Synchronous-and-asynchronous--2/index.txt', 'utf-8',(err,data)=>{
      console.log(data)
  } )
 
