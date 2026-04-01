const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.sendPosts);
router.post("/", postController.createPost);
router.get("/:id", postController.sendPostById);

module.exports = router;
