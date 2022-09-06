function authUser(req, res, next) {
    if(req.user == null){
        return res.status(403).send("You need to sign in");
    } 
}

module.exports = {authUser};