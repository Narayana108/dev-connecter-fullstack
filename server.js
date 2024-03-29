const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
 
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//import express from 'express';
//import * as mongoose from 'mongoose';
//import bodyParser from 'body-parser';
//import passport from 'passport';

//import users from './routes/api/users';
//import profile from './routes/api/profile.js';
//import posts from './routes/api/posts';
 
// Create express server
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// DB Config
const db = require('./config/keys').mongoURI;
 
// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
 
// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users/', users);
app.use('/api/profile/', profile);
app.use('/api/posts/', posts);

 
const port = process.env.PORT || 5000;
 
app.listen(port, () => console.log(`Server running on ${port}`));
