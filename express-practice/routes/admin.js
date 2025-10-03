const express = require("express");

const router = express.Router();

router.get("/Users-product", (req, res, next) => {
  /*  console.log("hello from users"); */
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add Product</button></input></Form>'
  );
});

router.post("/product", (req, res, next) => {
  // app.use for every html method,
  // app.post just for post methods
  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
