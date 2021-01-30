const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    signUpDate: { type: Date, required: true, default: new Date },
    publications: [{ type: ObjectId, ref: 'Publication' }],
    liked: [{ type: ObjectId, ref: 'Publication' }],
    verificationCode: { type: String, required: true },
    verifyed: { type: Boolean, required: true, default: false }
})