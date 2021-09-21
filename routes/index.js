const route = require("express").Router();
const Blog = require("../models/Blog");

route.post("/post", (req, res) => {
  const { title, des } = req.body;

  if (!title || !des) {
    return res.status(400).json({ error: "All the fields are required" });
  }

  const blogPost = Blog({
    title,
    des,
  });

  Blog.create(blogPost)
    .then((resData) => {
      res.json({ PostResult: resData, message: "Post created Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all data
route.get("/getdata", (req, res) => {
  Blog.find({})
    .sort({ date: "DESC" })
    .then((resultData) => {
      res.json(resultData);
    })
    .catch((err) => {
      console.log(err);
    });
});
//delete api
route.delete("/delete/:id", (req, res) => {
  var deleteQuery = { _id: req.params.id };

  Blog.findByIdAndDelete(deleteQuery)
    .then((deleteData) => {
      res.json({ message: "Post Deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = route;
