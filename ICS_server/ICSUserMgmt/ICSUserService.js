const config = require('./ICSUserConfig');
const User = require("./ICSUserModel");;

module.exports = {
    authenticate,
    registerUser,
    getAll
};

async function authenticate(userParam) {
	console.log('ICSUserService: authenticate: userId = %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
	const user = await User.findOne(query);
    if (user) {
        if(user.userPassword === userParam['userPassword'])
    	{
    		console.log('ICSUserService: authenticate: Login Success');
        	const user1 = user.toObject();
        
        	return { user1};
        }
    }
    console.log('ICSUserService: authenticate: Login Failed');
    return null;
}

async function getAll() {
    return await User.find().select('-hash');
}

async function registerUser(userParam) {
	console.log('userId : %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
	const user = await User.findOne(query);
    
    if (user) 
    {
        throw 'Username "' + userParam.userId + '" is already taken';
    }

    const newUser = new User(userParam);

    // save user
    await newUser.save();
    return newUser;
}