const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    todo_status: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ["task", "hobby", "work"],
        default: "task"
    },

}, { timestamps: true })
module.exports = mongoose.model('Todo', TodoSchema)