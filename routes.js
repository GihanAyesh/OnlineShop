const fs = require ('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if (url==='/'){
        res.write('<html>');
        res.write('<body><h1>Enter details<h1>');
        res.write('<form action="/messages" method="POST"> <input type="text" name="name"> <button type="Submit">Submit</button></form></body></html>');
        return res.end();
    }
    if(url==='/messages' && method==='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
                const parseBody = Buffer.concat(body).toString();
                const message = parseBody.split('=')[1];
                fs.writeFile('something.txt',message, err=>{
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    return res.end();
                });
        });
        
    }
};

exports.handler = requestHandler;