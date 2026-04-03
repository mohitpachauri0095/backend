const sendPosts = (req, res) => {
    res.send('ye lo saare blogs ki list');
};

const createPost = (req, res) => {
    res.send('kr diya aapka blog post');
};

const sendPostById = (req, res) => {
    res.send(`ye lo is id wala blog: ${req.params.id}`);
};

module.exports = {
    sendPosts,
    createPost,
    sendPostById
};
