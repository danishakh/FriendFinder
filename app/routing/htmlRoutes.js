var path = require("path");

module.exports = (app) => {
	app.get("/survey", (req, res) => {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// home route ('/')
	app.use((req, res) => {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});
}