import express from "express";
import data from "./data/mock.json" assert { type: 'json' };




const app = express();

const PORT = 3000;

// using the public folder at the root of project
app.use(express.static("public"));



// using the images folder at the route images
app.use("/images",express.static("images"));

// using express.json and express.urlencoded

// app.use(express.json());
app.use(express.urlencoded({extended : true}));

// GET
app.get('/',(req,res)=>{
    res.json(data);
});

// POST - express.json and express.urlencoded
app.post("/item", (req,res) => 
{
    console.log(req.body);
    res.send(req.body);
});

// GET - download method
app.get('/download',(req, res)=>{
    res.download('./images/agile terminology.jpg');
});

// GET - redirect method
app.get('/redirect',(req,res)=>{
    res.redirect("https://www.youtube.com/playlist?list=PLu6GUQnUMikjOxI02-0LyktZcQlhIhHaN");
});

// GET WITH NEXT

app.get("/next",(req,res,next) => {
    console.log("The response will be sent by the next function");
    next();
},
(req,res) => {
    res.send("I just set up a second callback")
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

// sending error messages

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something is Broken!!!!")
});


app.listen(PORT,()=>{
    console.log(`The Server is Running on ${PORT}!`);
    console.log(data);
});