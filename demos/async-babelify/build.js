// build babel with runtime

var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
browserify()
  .transform(babelify.configure({
    optional: ["es7.asyncFunctions", "runtime"]
  }))
  .require("./lib/app.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error : " + err.message); })
  .pipe(fs.createWriteStream("./app.out.js"));