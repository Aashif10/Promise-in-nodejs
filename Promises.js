
// let fs=require("fs/promises");
// let fs =require("fs").promises;

const { promises } = require("dns");

// read file using promises
//  method name=readFile("path,"utf-8").then.().catch()

// readFile=fs.readFile("../data.txt","utf-8")

// readFile.then((data)=>{
//     console.log(data);
// });

// readFile.catch((err)=>{
//     console.log(err)
// });


//  Write file





//  append file
// fs.appendFile(".server1.js","This is appended file")
// .then(()=>{
//     console.log("File appended");
// })

// .catch((err)=>{
//     console.log(err);
// })

// copying the content  fo data.txt to a new file to indx.txt
// fs.readFile("../data.txt","utf-8")
// .then((data)=>{
//     console.log("Data copied");
// })

// fs.writeFile("index.txt",data)
// .then(()=>{
//     console.log("new file created"); 
// })
// .catch((err)=>{
// console.log(err);
// })

//  deleting file --- unlink

// fs.unlink("")
// .then(()=>{
//     console.log("file deleted");
// })
// .catch((err)={
//     console.log(err);
// })

//  readFile with async & await

// async function readFile(){
//    let readFile=await fs.readFile("../data.txt","utf-8")
//    console.log(readFile);
// }
// readFile();



// async function writeFile(){
//    await fs.writeFile("../data.txt","key:value");
//    console.log("file created");
// }

// writeFile();

// let copycontent=  async()=>{
// let readFile=await fs.readFile("/style.css","utf-8");
// await fs.writeFile("../data.txt",readFile)
// console.log("data copied");
// }
// copycontent();
 
// let deleteFile= async ()=>{
//     await fs.unlink("../data.txt")
//     console.log("file deleted");
// }
// deleteFile();


//  appendFile 

// let appendFile=async ()=>{
//      await fs.appendFile("/style.css","this is css file");
//      console.log('file appended ');
// }
// appendFile();

//  create  directory 

// let createFolder=async ()=>{
//      await fs.mkdir("NewFolder/index.html");
//      console.log("folder created");
// }
//  createFolder();



//  folder delete
// let createFolder=async ()=>{
//      await fs.rmdir("NewFolder/style.css");
//      console.log("folder created")y;
// }
//  createFolder();


//   read file sync

// let fs= require("fs")

// console.log("start");
// fs.writeFileSync("./data.html","data written in this file");
//  console.log("data written");
// console.log("end");


// fs.writeFile("./data.html","some data ", (err,data)=>{
//      if(err) throw err;
// console.log('file created')
// });
// console.log("last");

// / using promises

// let fs=require("fs/promises");
//  fs.writeFile("")