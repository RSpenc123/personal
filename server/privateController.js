module.exports = {
    getPrivateText: async (req,res) =>{
        console.log('hit')
        const db = req.app.get('db')
        let text = await db.getPrivateText()
        console.log(text)
        res.status(200).send(text)
        },
        getPrivate: async (req,res) =>{
            console.log('hit')
            const db = req.app.get('db')
            const {id} = req.params
            let text = await db.getPrivate(+id)
            console.log(text)
            res.status(200).send(text)
            },
    addPrivate: (req,res) =>{
        const db = req.app.get('db')
        const{title, content, user_id}=req.body
        console.log(title.title)
        db.addPrivate([title.title, content, user_id])
        .then(db => res.status(200).send(db))
    },
    editPrivate: (req,res) => {
        const db = req.app.get('db')
        const{id}=req.params
        const{title,content}=req.body
        db.editPrivate([id,title.title,content])
        .then(db=> res.status(200).send(db))
    },
    deletePrivate: (req,res)=>{
        const db = req.app.get('db')
        const{id}=req.params
        db.deletePrivate([id])
        .then( rs => res.status(200).send(rs))
    },
    getPrivateId: async (req,res) =>{
        console.log('hit')
        const db = req.app.get('db')
        let {id} = req.params
        db.getPrivateId([id]).then(op=> res.status(200).send(op))
        console.log(db)
        
        }

}