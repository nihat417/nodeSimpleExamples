const express = require('express');

const app =express();


app.get('/',(req,res)=>{
    res.send("Nikos get method");
})

app.post('/',(req,res)=>{
    res.send("post request recieved");
});

app.put('/',(req,res)=>{
    res.send("put request recieved");
});

app.delete('/',(req,res)=>{
    res.send("delete request recieved");
});

app.use((req,res)=>{
    res.status(404).send('404 not found');
});


app.listen(3001,()=>{
    console.log("server running in 3001");
})