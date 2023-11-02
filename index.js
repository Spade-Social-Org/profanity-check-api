const Filter = require("bad-words");
const filter = new Filter();
const express = require("express");
const app = express();
const port = 3000;

const checkProfanity = (sentence) => {
  if (filter.isProfane(sentence)) {
    return true;
  } else {
    return false;
  }
};

app.get("/", (req, res) => {
  const sentence = req.query.sentence;
  if (checkProfanity(sentence)) {
    res.status(200).send(true);
  } else {
    res.status(200).send(false);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
