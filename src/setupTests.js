// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path =  require('path');


// declaren static path

let staticPath = path.join(__dirname, "puclic");

// intializing express.js

const app = express();

// middlewares
app.use(express.static(staticPath));
// routes
// home route
app.get.get("/", (req, res) => {
res.sendFile(path.join(staticPath, "index.html"));
})
// signup route
app.get('/signup', (req,res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})
// 404 route

app.get('/404', (req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})
app.use((req,res ) => {
   res.redirect('/404');
})
app.listen(3000, () =>{
    console.log('listening on port 3000......');
})