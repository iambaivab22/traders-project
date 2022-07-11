const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: String,
    password: String
},
{ collection: 'admin' });


let Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;