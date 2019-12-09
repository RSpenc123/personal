module.exports = {
    getPublicText: async (req,res) =>{
        console.log('hit')
        const db = req.app.get('db')
        let text = await db.getPublic()
        console.log(text)
        res.status(200).send(text)
        },
        getPublicById: async (req,res) => {
            const db = req.app.get('db')
            const {id} = req.params
            let text = await db.getPublicById(+id)
            console.log(text)
            res.status(200).send(text)
        },
    addPublic: (req,res) =>{
        const db = req.app.get('db')
        const{title, content, Image, genre, username, description, user_id}=req.body
        db.addPublic([title.title, content, Image, genre, username, description, user_id])
       
        .then(db => res.status(200).send(db))
        
    },
    editPublic: (req,res) => {
        const db = req.app.get('db')
        const{id}=req.params
        const{title,content}=req.body
        db.editPublic([id,title.title, content])
        .then(db=> res.status(200).send(db))
        console.log(req.body)
    },
    deletePublic: (req,res)=>{
        const db = req.app.get('db')
        const{id}=req.params
        db.deletePublic([id])
        .then(db=> res.status(200).send(db))
    },
    getPublicId: async (req,res) =>{
        console.log('hit')
        const db = req.app.get('db')
        let {id} = req.params
        db.getPublicId([id]).then(op=> res.status(200).send(op))
        console.log(db)
        
        }
}