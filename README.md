
---

# 📚 Book Management System (MVC Architecture)

## Overview

The Book Management System is a simple web application built using the **Model-View-Controller (MVC)** architecture. It allows users to perform CRUD operations (Create, Read, Update, Delete) on books.

## Features

* Add new books
* View list of all books
* Update book details
* Delete a book
* Search for books by id



## Project Structure

```
BookManagement/
│
├── model/
│   └── Book.java
│
├── controller/
│   └── BookController.java
│
├── view/
│   ├── listBooks.jsp
│   ├── addBook.jsp
│   └── editBook.jsp
│
├── dao/
│   └── BookDAO.java
│
├── config/
│   └── WebConfig.java
│
└── application.properties
```

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/hareem09/Book-management-MVC
   ```

2. **Configure the database**
   Create a database and update your `application.properties` with correct credentials.

3. **Build and run the project**
   * npm init -y
   * npm i express mongoose
   * nodemon or node server.js
4. **Access the app**
   Navigate to `http://localhost:3000/books`



