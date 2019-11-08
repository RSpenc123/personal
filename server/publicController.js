module.exports = {
    getPublicText: async (req,res) =>{
        console.log('hit')
        const db = req.app.get('db')
        let text = await db.getPublic()
        console.log(text)
        res.status(200).send(text)
        },
    addPublic: (req,res) =>{
        const db = req.app.get('db')
        const{title, content}=req.body
        db.addPublic([title.title, content])
       
        .then(db => res.status(200).send(db))
        console.log(content)
    },
    editPublic: (req,res) => {
        const db = req.app.get('db')
        const{id}=req.params
        const{title,content}=req.body
        db.editPublic([id,title, content])
        .then(db=> res.status(200).send(db))
        console.log(req.body)
    },
    deletePublic: (req,res)=>{
        const db = req.app.get('db')
        const{id}=req.params
        db.deletePublic([id])
        .then(db=> res.status(200).send(db))
    }
}