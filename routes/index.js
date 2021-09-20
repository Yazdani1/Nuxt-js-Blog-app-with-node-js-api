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
      res.json({PostResult:resData,message:"Post created Successfully"});
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
