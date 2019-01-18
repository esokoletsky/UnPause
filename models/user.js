const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
        firstName: String,
        lastName: String
    }
})

userSchema.methods.serialize = function() {
    return {
        id: this._id,
        email: this.email
    };
};

module.exports = mongoose.models("User", userSchema);