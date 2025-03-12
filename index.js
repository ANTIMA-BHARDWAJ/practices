import express from 'express';

const app = express();
const PORT = 3000; // You can change this port

app.set("view engine", "ejs");

/*// Define a route
app.get('/', (req, res) => {
  res.sendFile("index.html" {root:"C:\\Users\\LENOVO\\Desktop\\New folder\\templates"});
}); */

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
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
