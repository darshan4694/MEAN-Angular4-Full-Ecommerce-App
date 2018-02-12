const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce');
const db = mongoose.connection;

db.on('open', () => {
    console.log('db connection established!');
})

db.on('error', () => {
    console.log('db connection failed!');
})

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username :{
        type: String,
        required: true,
        unique : true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
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
    location: {
        type: String,
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

const User = mongoose.model('users', UserSchema);

module.exports.saveUser = (newUser) => {
    var user1 = new User({
        firstname: newUser.first_name,
        lastname: newUser.last_name,
        password: newUser.password,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        location: newUser.location,
        fav: [],
        orders: [],
        history: [],
        isSeller: false
    });
    // var t;
    return new Promise((resolve, reject) => {
        user1.save((err) => {
            if (err) {
                console.log(err);
                // return false;
                reject("user data store failed!")
            } else {
                resolve();
                // return true;
            }
        });
    })

}

module.exports.signinVerification = (creds) => {
    return new Promise((resolve, reject) => {
        User.find({username : creds.username}, (err, docs) => {
            if(err) {
                reject("some error!");
            } else {
                if(docs == [] || docs.length == 0) {
                    reject("Username does not exist!");
                } else if(docs[0].password == creds.password){
                    resolve("sign in success");
                } else {
                    reject("Password does not match!");
                }
            }
        })
    })
}

module.exports.getUserByUsername = (username) => {
    return new Promise((resolve, reject)=> {
        User.find({username : username}, (err, docs) => {
            if(err) {
                reject("some error!");
            } else {
                if(docs == [] || docs.length == 0) {
                    reject("Username not found");
                } else {
                    resolve(docs[0]);
                }
            }
        })
    })
}