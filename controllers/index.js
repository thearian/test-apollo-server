const posts = require("../database");

function id_gen() {
    return Math.random() * 100
}

module.exports = {
    addPost: (req,res) => {
        const content = req.query.content;
        const user = req.query.user;
        posts.push({
            id: id_gen(),
            user: user,
            content: content,
            likes: 0,
            createdAt: new Date(),
        })
        return res.send("success")
    },
    getPosts: (req,res) => {
        res.send(posts)
    },
    getPostById: (req,res) => {
        const id = req.params.id;
        for (let post of posts) {
            if (id == post.id) {
                return res.send(post)
            }
        }
    },
    getPostId:(req,res) =>{
        // cost.quary.id=ali
        for(any of posts){
            if(any.id=req.query.id)
            return(any)
        }
    }
}

const array = [1,2,3]
for (index of [1,2,3]) {
    // index == 3
}

const posts = ["a","b","c","c","d","d","d"]
const khaste = "c"
for (ozv of majmooe){
    if(ozv==khaste)
    return(ozv)
}