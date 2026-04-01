const sendBlogList = ("/", (req, res) => {
    res.send("ye lo saare blogs ki list");
});

const addNewBlog = ("/", (req, res) => {
    res.send("kr diya aapka blog post");
});


router.getBlogByID = ("//:id", (req, res) => {
    res.send("ye lo is id wala blog");
});

module.exports = {sendBlogList, addNewBlog, sendBlogList};