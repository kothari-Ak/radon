const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true
    },
    authorName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Fiction", "Thriller", "Mystery","Fantasy","Frame"] //"falana" will give an error
    },
    year:String
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array