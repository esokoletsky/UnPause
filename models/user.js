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

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};