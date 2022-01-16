// calling and api

const http=require('http')
const data=require('./data')
http.createServer((req,res)=>{
res.writeHead(201,{'Content-type':'application\json'})
res.write(JSON.stringify(data))
res.end()
}).listen(9000)


// jHaving a command line argument
// const fs=require('fs')
// const input=process.argv
// fs.writeFileSync(input[2],input[3])
// // console.log(process.argv[2])
// fs.unlinkSync(input[2],input[3])


// to create a file in loop and write into it


// const path=require('path')
// const fs=require('fs')


// const dirPath=path.join(__dirname,'files')
// console.log(dirPath)
// //  for(i=0;i<5;i++)
// // {
// //     fs.writeFileSync(`${dirPath}/hellos${i}.txt`,`lasts command ${i++}`)
// // }

// fs.readdir(dirPath,(err,files)=>{
//    files.forEach((item)=>
//    console.log(item))
// })


