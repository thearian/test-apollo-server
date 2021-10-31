const posts = require("../database")

module.exports = {
    getOnePost: (req,res) => {
        const id = req.query.id
        for (let i=0; i<=posts.length; i++){
            const post = posts[i]
            if (post.id == id) res.send(post)
        }
    },
}