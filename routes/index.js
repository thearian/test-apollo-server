const router = require("express").Router()
const controllers = require("../controllers")

router.get("/newpost",controllers.addPost)
router.get("/posts",controllers.getPosts)
router.get("/post/:id",controllers.getPostById)
router.get("/postId/",controllers.getPostId)
module.exports = router