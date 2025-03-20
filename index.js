import mongoose from 'mongoose';
import express from 'express';
import { Data } from "./models/data.js";  // Ensure filename matches

let conn = await mongoose.connect("mongodb://localhost:27017/data")
const app = express();
const PORT = 3005; // You can change this port

//app.set("view engine", "ejs");

/*// Define a route
app.get('/', (req, res) => {
  res.sendFile("index.html" {root:"C:\\Users\\LENOVO\\Desktop\\New folder\\templates"});
}); 

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["Hey", 54, 65]
  res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when?"
  let blogContent = "Its a very good brand"
  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
}) */

app.get('/',(req, res) => {

  const data = new Data({name:"HARRY",course:"python",isManger:true})
  data.save()
  res.send('Hello World!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
