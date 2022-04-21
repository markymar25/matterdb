const express = require("express");
const router = express.Router();
const matterController = require("../controllers/matterController");
const auth = require("../auth");

router.post("/", (req, res) => {
	matterController.addMatter(req.body).then(resultFromController => res.send(resultFromController))
})

router.get("/all", (req, res) => {
	matterController.getAll().then(resultFromController => res.send(resultFromController));
})

router.get("/active", (req, res) => {
	matterController.getAllActive().then(resultFromController => res.send(resultFromController));
})

router.get("/:matterId", (req, res) => {
	matterController.getMatter(req.params.matterId).then(resultFromController => res.send(resultFromController))
})

router.put("/:matterId", auth.verify, (req, res) => {
	if(auth.decode(req.headers.authorization).isAdmin === false) {
		res.send(false);
	} else {
		matterController.updateMatter(req.params.matterId, req.body).then(resultFromController => res.send(resultFromController))
	}
})

router.put("/:matterId/archive", auth.verify, (req, res) => { 
	//need for middleware
	if(auth.decode(req.headers.authorization).isAdmin === false) {
		res.send(false);
	} else {
		matterController.archiveMatter(req.params.matterId).then(resultFromController => res.send(resultFromController))
	}
})

router.put("/:matterId/activate", auth.verify, (req, res) => { //need for middleware
	if(auth.decode(req.headers.authorization).isAdmin === false) {
		res.send(false);
	} else {
		matterController.activateMatter(req.params.matterId).then(resultFromController => res.send(resultFromController))
	}
})

module.exports = router;