const config = require('./ICSUserConfig');
const User = require("./ICSUserModel");;

module.exports = {
    authenticate,
    registerUser,
    getAll
};

async function authenticate(userParam) {
	console.log('userId : %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
	const user = await User.findOne(query);
    if (user) {
        if(user.userPassword === userParam['userPassword'])
    	{
        	const user1 = user.toObject();
        
        	return { user1};
        }
    }
    /*const user = await User.findOne(username);
    if (user) {
    	if(user.userPassword === passwrd)
    	{
        	const user1 = user.toObject();
        
        	return { user1};
        }
    }*/
    return null;
}

async function getAll() {
    return await User.find().select('-hash');
}

async function registerUser(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // save user
    await user.save();
}