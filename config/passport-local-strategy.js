const passport = require('passport');

const Registertbl = require('../models/RegisterModel');

const passportLocal = require('passport-local').Strategy;

passport.use(new passportLocal({
    usernameField : 'email'
},async(email,password,done)=>{
    
    try{
        let user = await Registertbl.findOne({email : email});
        
        if(!user || user.password != password)
        {
            console.log("Email and Password not match");
            return (null,false);
        }
         return done(null,user);

    }
    catch(err){
        console.log(err);
        return false;
    }
}));

passport.serializeUser(function(user,done){
    return done(null,user.id);
});

passport.deserializeUser(function(id,done){
    Registertbl.findById(id,(err,user)=>{

        if(err){
            console.log("user not found");
            return done(null,false);
        }
        return done(null,user);
    })
});


passport.checkAuthentication = (req,res,next) => {

    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/');

}

passport.setAuthentication = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.locals.users = req.user;
    }
    return next();
}


module.exports = passport;