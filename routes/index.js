const router = require("express").Router()
const controllers = require("../controllers")

router.get("/posts", (req,res) => {
    res.send(posts)
})

router.get("/post", controllers.getOnePost)

module.exports = router