import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.get("/api/jokes", (req, res) => {
  const jokes =[
    {
      id: 1,
      title: 'A joke',
      content: 'joke of the day'
    },
    {
      id: 2,
      title: ' joke',
      content: 'joke of the day'
    },
    {
      id: 3,
      title: 'A joke',
      content: 'joke of the day'
    },
    {
      id: 4,
      title: 'A joke',
      content: 'joke of the day'
    },
    {
      id: 5,
      title: 'A joke',
      content: 'joke of the day'
    },
  ]
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at port ${port}`);
});
