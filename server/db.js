const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce');
const db = mongoose.connection;

db.on('open', ()=>{
    console.log('db connection established!');
})

db.on('error', ()=>{
    console.log('db connection failed!');
})

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isSeller: {
        type: Boolean,
        required: true
    },
    
    fav: {
        type: [String]
    },
    
    orders: {
        type: [String]
    },
    history: {
        type: [String]
    }
})

module.exports.getUserById = (id) => {
    
}