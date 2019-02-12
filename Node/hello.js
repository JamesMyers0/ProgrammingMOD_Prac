/* eslint-disable no-undef */
var express = require("express");
var recipes = require("./potato.json");
var app = express();

app.use(express.static('client'));

app.get("/", function (req, resp) {
	resp.send("Hello World!");
});

app.get("/test", function (req, resp) {
	resp.send("This is a test. Wowmoo!");
});

app.get("/wave/:w", function (req, resp) {
	resp.send("Waving at " + req.params.w);
});

app.get("/p", function (req, resp) {
	resp.send("Hello " + req.query.person + "!");
});

app.get("/s", function (req, resp) {
	var result = "";
	for (index=0; index<recipes.length; index++) {
		if (recipes[index].title.search(req.query.search) != -1) {
			for (var prop in recipes[index]) {
				result += recipes[index][prop] + "<br>";
				result += "<br><br>";
			}
		}
	}
	resp.send(result);
});

app.listen(8090);