const bookModel = require('../model/bookSchema');

const addBook = async (req, res) => {
    try{
        const book = await bookModel.create(req.body);
        await book.save();
        res.status(201).json({ message: 'Book added successfully', book });
    }
    catch(err){
        res.status(500).json({ message: 'Error adding book', error: err.message });
    }
}
const getBooks = async (req, res) => {
    try{
        const books=await bookModel.find()
        res.status(200).json({ message: 'Books retrieved successfully', books });
    }
    catch(error){
        res.status(500).json({ message:'Error retrieving books',error:error.message})
    }
}
const getBooksById = async (req, res) => {
    try{
        const book=await bookModel.findById(req.params.id)
        res.status(200).json({message:'Book retrieved successfully',book})
    }
    catch(err){
        res.status(500).json({message:'error occured',error:err.messsage})
    }
}
const updateBook = async (req, res) => {
    try{
        const book=await bookModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await book.save()
        res.status(200).json({message:'Book updated successfully',book})
    }
    catch(err){
        res.status(500).json({message:'Error updating book',error:err.message})
    }
}
const deleteBook = async (req, res) => {
  try{
    const book=await bookModel.findByIdAndDelete(req.params.id)
    await book.save()
    res.status(200).json({message:'Book deleted successfully',book})  
}
catch(err){
    res.status(500).json({message:'Error deleting book',error:err.message})
}
}
module.exports = {
    addBook,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook
}