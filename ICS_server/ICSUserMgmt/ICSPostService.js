const config = require('./ICSUserConfig');
const Post = require("./ICSPostModel");;

module.exports = {
    getAll,
    findById,
    createPost
};

async function findById1(userParam) {
	console.log('ICSPostService:findById: userId = %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
    var posts = null;
	await Post.find(query, function(err, posts1){
        if (err)
        {
            console.log(err);
            //throw err;
            
        }
        else
        {
        console.log('ICSPostService:findById: Got results');
        console.log(posts1);
        posts = posts1;
        }
  });

    console.log('outside');
    console.log(posts);
    return posts;
    
}

async function findById(userParam) {
    console.log('ICSPostService:findById: userId = %s', userParam['userId'] );
    var query = { userId:userParam['userId'] };
    return await Post.find(query);
}

async function getAll() {
    console.log('ICSPostService:getAll: entered');
    return await Post.find().select('-hash');
}

async function createPost(userParam) {
    console.log('ICSPostService:createPost: userId = %s', userParam['userId'] );
    var query = { userId:userParam['userId'] };
     const newPost = new Post(userParam);
    // save user
        await newPost.save();
       console.log('ICSPostService: createPost: New post created');
        return newPost;
}
