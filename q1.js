
const mynode = require("express"); 
const app = mynode(); 
app.get("/", (req, res) => { 
res.send("<h1> Hello World </h1>"); 
}); 
app.listen(3000, () => { 
console.log("Listening to port 3000"); 
});
