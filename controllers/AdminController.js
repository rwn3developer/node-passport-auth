


const index = (req,res) => {

    if(res.locals.users)
    {
        return res.redirect('/admin');
    }

    return res.render('login');
}

const logindata = (req,res) => {
    return res.redirect('/admin');
}

const admin = (req,res) => {
    return res.render('admin');
}

const contact = (req,res) => {
    return res.render('contact');
}

const logout = (req,res) => {
    req.logout((err)=>{
        if(err)
        {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    })
   
}

module.exports = {index,logindata,admin,contact,logout};