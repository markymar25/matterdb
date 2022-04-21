const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName : {
        type: String,
        required: [true, 'Last Name is required']
    },
    email : {
        type: String,
        required: [true, 'Email is required']
    },
    password : {
		type : String,
		required : [true, 'Password is required']
	},
    isAdmin : { 
		type : Boolean,
		default : false 
	},
    clients: [
        {
            matters : [
                {
                    matterName : {
                        type: String,
                        required: [true, 'Matter name is required']
                    },
                    matterId : {
                        type: String,
                        required: [true, 'Matter ID is required']
                    }
                }
            ]
        }
    ]
})

module.exports = mongoose.model("User", userSchema);
//module.exports allows us to use the file as a module, similar to packages, and can be used by other files