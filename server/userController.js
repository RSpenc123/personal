const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req,res) => {
        const {username, password} = req.body;
        const db = req.app.get('db')

        let foundUser = await db.checkUser(username);
        foundUser = foundUser[0]
        if(foundUser){
            res.status(409).send("Username Taken")
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password,salt)

            let newUser = await db.register({username, password:hash});
            newUser = newUser[0];
            req.session.user = {...newUser};
            res.status(200).send(req.session.user)
        }
    },
    login: async(req,res) => {
        const{username, password} = req.body;
        const db = req.app.get('db')
        let foundUser = await db.checkUser(username);
        foundUser = foundUser[0];
        if(!foundUser){
            res.status(401).send("Username does not exists")
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(authenticated){
            delete foundUser.password;
            req.session.user = foundUser;
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("incorrect password")
        }
    },
    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req,res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }
    }

}