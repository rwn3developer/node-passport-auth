const express = require('express');
const passport = require('passport');

const routes = express.Router();



const admincontroller = require('../controllers/AdminController');

routes.get('/',admincontroller.index);
routes.post('/logindata',passport.authenticate('local',{failureRedirect : '/'}),admincontroller.logindata);

routes.get('/admin',passport.checkAuthentication,admincontroller.admin);
routes.get('/contact',passport.checkAuthentication,admincontroller.contact);
routes.get('/logout',admincontroller.logout);

module.exports = routes;