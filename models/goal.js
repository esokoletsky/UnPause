'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const goalSchema = mongoose.Schema(
{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },    
    minutes: {type: "string", required: true },
    hours: {type: "string", required: true },
    day: {type: "string", required: true },
    overall: {type: "string", required: true }

});

goalSchema.methods.serialize = function() {
    return {
      id: this._id,
      user: this.user,
      minutes: this.minutes,
      hours: this.hours,
      day: this.day,
      overall: this.overall
    };
    }; 

    goalSchema.pre('find', function(next) {
        this.populate('user');
        next();
      });
      
      goalSchema.pre('findOne', function(next) {
        this.populate('user');
        next();
      });

module.exports = mongoose.model("Goal", goalSchema);