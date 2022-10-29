var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var port = 8080;
var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var testingRouter = require("./routes/testing");
var blogRouter = require("./routes/blog");
// const client = require("./connection");
var app = express();
// var bodyParser = require("body-parser");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/test", (req, res)=>{
  console.log(req.body);
  return res.send("ok ini  create user");
})

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/testing", testingRouter);
app.use("/blog", blogRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err);
  return res.status(500).json({
    message : err.message,
    status : err.status 
  });
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(port, () =>
  console.log("server started and listen on port " + port)
);

// client.connect((err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("connect");
//   }
// });

