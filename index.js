import express from "express";
import data from "./data/mock.json" assert { type: 'json' };


const app = express();

const PORT = 3000;

// using the public folder at the root of project
app.use(express.static("public"));

// using the images folder at the route images
app.use("/images",express.static("images"));

// GET
app.get('/',(req,res)=>{
    res.json(data);
});


// POST
app.post('/create',(req,res)=>{
    res.send('POST request successful at /create')
});

// PUT
app.put('/edit',(req,res)=>{
    res.send('PUT request successful at /edit')
});

// DELETE
app.delete('/delete',(req,res)=>{
    res.send('DELETE request successful at /delete')
});



app.listen(PORT,()=>{
    console.log(`The Server is Running on ${PORT}!`);
    console.log(data);
});