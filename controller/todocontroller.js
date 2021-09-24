const Todo = require("../model/Todo");


exports.addtodo = async (req, res) => {
    const { user_name, title, category } = req.body;

    const new_todo = new Todo({
        user_name,
        title,
        category,
    });

    new_todo.save((err, new_todo) => {
        if (new_todo) {
            console.log(new_todo)
            return res.status(201).json({ message: "Task added successfully" });
        }
        if (err) {
            return res.status(400).json({ message: "Error", });
        }
    });
};



exports.getalltodo = async (req, res) => {
    const all_todo = await Todo.find()
    if(all_todo){
        res.status(200).json({ all_todo });
    }
    
};



exports.gettodoById = async (req, res) => {
    //   let id = req.params.id;
    const new_todo = await Todo.findById({ _id: req.params.id });
    res.status(200).json({ new_todo });
};

exports.updatetodo = async (req, res) => {
    let id = req.params.id;

    const updated_todo = await Todo.findByIdAndUpdate(id, req.body)
    if (updated_todo) {
        const todo = await Todo.findById({ _id: req.params.id });
        console.log(todo);
        res.status(200).json({ message: "Updated" });
    } else {
        res.status(400).json({ message: "Error while updating" });
    }
}


exports.deletetodo = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    const todo = await Todo.findOneAndDelete({ _id: id });

    if (todo) {
        res.status(201).json({ message: "Todo removed" });
    } else {
        res.status(400).json({ message: "Something went wrong" });
    }
};

