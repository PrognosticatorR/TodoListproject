var mongoose =require('mongoose');
todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is must !'
    },
    completed:{
        type: Boolean,
        default: false
    },
    created_date:{
        type:Date,
        default:Date.now()
    }
});

var Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;