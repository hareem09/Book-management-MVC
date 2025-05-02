const express= require('express');
const router=express.Router();

const{
    addBook,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook
}= require('../control/book');

router.post('/addBook',addBook);

router.get('/getBooks',getBooks);

router.get('/getBooks/:id',getBooksById);

router.put('/updateBook/:id',updateBook);

router.delete('/deleteBook/:id',deleteBook);

module.exports=router;