const mongoose = require('mongoose');

const matterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Matter name is required']
    },
    matterType: {
        type: String
    },
    description: {
        type: String
    },
    nextDate: {
        type: Date,
        default: new Date()
    },
    details: {
        type: String
    },
    custody: {
        type: String
    },
    firm: {
        type: String
    },
    dateOfCA: {
        type: Date,
        default: new Date()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    timeEntries: [
        {
            entryId: {
                type: String,
                required: [true, 'Entry ID is required']
            },
            date: {
                type: Date,
                default: new Date()
            },
            time: {
                type: Number,
                required: [true, 'Time is required']
            },
            rate: {
                type: Number,
                required: [true, 'Rate is required']
            },
            amount: {
                type: Number,
                required: [true, 'Amount is required']
            },
            addedToBarbooks: {
                type: Boolean,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model("Matter", matterSchema);
