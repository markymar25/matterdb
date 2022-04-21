//setup the dependencies
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const userController = require("../controllers/userController");

router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})

router.get("/details", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
	
	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));
})


module.exports = router;