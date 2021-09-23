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

//post delete

route.delete("/delete/:id", (req, res) => {
  var deleteQuery = { _id: req.params.id };

  Blog.findByIdAndDelete(deleteQuery)
    .then((postDelete) => {
      res.json({ message: "Post deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//edit api

route.get("/edit/:id", (req, res) => {
  var editQuery = { _id: req.params.id };
  Blog.findOne(editQuery)
    .then((editData) => {
      res.json(editData);
    })
    .catch((err) => {
      console.log(err);
    });
});

//details post api

route.get("/details/:id", (req, res) => {
  var detailsQuery = { _id: req.params.id };
  Blog.findOne(detailsQuery)
    .then((detailsdata) => {
      res.json(detailsdata);
    })
    .catch((err) => {
      console.log(err);
    });
});

//udate edit data api

route.put("/update/:id", (req, res) => {
  var updateQuery = { _id: req.params.id };

  Blog.updateOne(updateQuery, {
    $set: {
      title: req.body.title,
      des: req.body.des,
    },
  })
    .then((updatedata) => {
      res.json(updatedata);
    })
    .catch((err) => {
      console.log(err);
    });
});

//latest post api

route.get("/latestpost", (req, res) => {
  Blog.find({})
    .sort({ date: "DESC" })
    .limit(5)
    .then((latespost) => {
      res.json(latespost);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
