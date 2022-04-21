const User = require("../models/User");
const Matter = require("../models/Matter");
const auth = require("../auth"); 
const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);

module.exports.registerUser = (body) => {
	return User.find({
            firstName: body.firstName,
            lastName: body.lastName,
            email : body.email,
            password: body.password
        }).then(result => {
		if (result.length > 0){
			return false; 
		} else {
			let newUser = new User({
                firstName: body.firstName,
                lastName: body.lastName,
				email : body.email,
				password : bcrypt.hashSync(body.password, salt)
			});
		
			return newUser.save().then((user, error) => {
				if (error){
					return false; 
				} else {
					return true; 
				}
			})
		}
	})
}

module.exports.loginUser = (body) => {
	return User.findOne({email : body.email}).then(result => {
		if(result == null){
			return false;
		} else {
			const isPasswordCorrect = bcrypt.compareSync(body.password, result.password);

			if(isPasswordCorrect){
				return {access : auth.createAccessToken(result.toObject())}
			} else {
				return false; 
			}
		}
	})
}

module.exports.getProfile = (data) => {
	return User.findById(data.userId).then(result => {
		result.password = undefined;
		return result;
	})
}