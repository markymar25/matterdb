const Matter = require("../models/Matter");

module.exports.addMatter = (body) => {
	let newMatter = new Matter({
		name : body.name,
        matterType : body.matterType,
		description : body.description,
		details : body.details,
        custody : body.custody,
        firm : body.firm
	});

	return newMatter.save().then((matter, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
}

module.exports.getAll = () => {
	return Matter.find().then(result => {
		return result;
	})
}

module.exports.getAllActive = () => {
	return Matter.find({isActive : true}).then(result => {
		return result;
	})
}

module.exports.getMatter = (matterId) => {
	return Matter.findById(matterId).then(result => {
		return result;
	})
}

module.exports.updateMatter = (matterId, body) => {
	let updatedMatter = {
		name : body.name,
		matterType : body.matterType,
		description	: body.description,
		nextDate : body.nextDate,
		details : body.details,
		custody : body.custody,
		firm : body.firm,
		dateOfCA : body.dateOfCA
	}

	return Matter.findByIdAndUpdate(matterId, updatedMatter).then((matter, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
}

module.exports.archiveMatter = (matterId) => {
	let updateActiveField = {
		isActive : false
	}

	return Matter.findByIdAndUpdate(matterId, updateActiveField).then((matter, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
}

module.exports.activateMatter = (matterId) => {
	let updateActiveField = {
		isActive : true
	}

	return Matter.findByIdAndUpdate(matterId, updateActiveField).then((matter, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
}