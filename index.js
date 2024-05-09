//First HomeWork(Events FileSystems)

// const fs = require('fs');
// const events = require('events');

// const emitter = new events.EventEmitter();
// emitter.on("emitterniko",(message)=>{
//     console.log(message)
// });

// emitter.emit('emitterniko','event happen bro)');


// //sinxron version
// const reafile = fs.readFileSync('example.txt','utf8');
// console.log(reafile)

// //asinxron version
// fs.readFile('example.txt','utf8',(error,data)=>{
//     console.log(data);
// });


// fs.writeFile('example.txt',"Hello Nihat",(error)=>{
//     if(error){
//         console.log(`Error : ${error}`);
//         return;
//     }
//     console.log('Succsesfully written');
    
// })



//------------------------------------


//Seconds Homework (Straems,Buffers)

// const fs = require("fs");

// const readStream = fs.createReadStream('example.txt',{encoding:'utf8'});
// const writeStream = fs.createWriteStream('example2.txt');

// readStream.pipe(writeStream);


//------------------------------------

//  Third Homework

const http = require('http');
const fs = require('fs');
const { error } = require('console');

//Simple Version

// const server = http.createServer((req,res)=>{
//     console.log('request made');
// });


//Dif version

// const server = http.createServer((req,res)=>{
//     console.log('request made');
//     res.setHeader('Content-Type','text/html');
//     //res.write('Hello Niko');
//     //res.write("<a href='https://www.google.com' target='_blank'>Go to Google </a>");
//     //res.end();
//     fs.readFile("index.html",(err,data)=>{
//         if(err){
//             console.log(`Error : ${err}`);
//             res.end();
//         }
//         res.write(data);
//         res.end();
//     });
// })


// server.listen(3001,'localhost',()=>{
//     console.log('listning port 3001')
// });