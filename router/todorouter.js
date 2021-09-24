const express = require('express');
const router = express.Router();
const todocontroller = require('../controller/todocontroller')



router.post('/addtodo',todocontroller.addtodo )
router.get('/getall', todocontroller.getalltodo);
router.get('/:id', todocontroller.gettodoById);
router.put('/updatetodo/:id',todocontroller.updatetodo )
router.delete('/deletetodo/:id',todocontroller.deletetodo )



module.exports = router;