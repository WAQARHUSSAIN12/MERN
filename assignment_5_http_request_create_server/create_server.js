const http = require("http");

const { clearScreenDown } = require("readline");
let data = [
                {
                    name:"WAQAR HUSSAIN",email:"waqar@gmail.com",
                }, 
                {
                    name:"WAQAR HUSSAIN",email:"waqar@gmail.com",
                }, 
                {
                    name:"WAQAR HUSSAIN",email:"waqar@gmail.com",
                }, 
                {
                    name:"WAQAR HUSSAIN",email:"waqar@gmail.com",
                }, 
                {
                    name:"WAQAR HUSSAIN",email:"waqar@gmail.com",
                } 
            ]

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application\json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);
