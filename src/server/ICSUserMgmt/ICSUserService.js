const config = require('./ICSUserConfig');
const User = require("./ICSUserModel");;

module.exports = {
    authenticate,
    registerUser,
    getAll,
    findById,
    findByAddrs
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

async function findById(userParam) {
	console.log('ICSUserService: v: userId = %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
	const user = await User.findOne(query);
    if (user) {
    		console.log('ICSUserService: findById: User found');
        	const user1 = user.toObject();
        
        	return { user1};
    }
    console.log('ICSUserService: findById: User not found');
    return null;
}

async function findByAddrs(userParam) {
	console.log('ICSUserService: findByAddrs: address = %s', userParam['userAddress'] );
	var query = { userId:/userParam['userAddress']/i };
	var users = null;
	await User.findOne(query).toArray(function(err, result) {
	    if (err)
	    {
		    console.log(err);
		    //throw err;
		    
	    }
	    else{
		console.log('ICSUserService: findByAddrs: User/s found within address range');
    		console.log(result);
		users = result;
	    }
    	});
	return users;
}

async function getAll() {
    return await User.find().select('-hash');
}

async function registerUser(userParam) {
	console.log('ICSUserService:registerUser: userId = %s', userParam['userId'] );
	var query = { userId:userParam['userId'] };
	const user = await User.findOne(query);
    
    if (user) 
    {
       // throw 'Username "' + userParam.userId + '" is already taken';
	console.log('ICSUserService: registerUser: User already exists');
	    return null;;
    }
   else
   {
   	 const newUser = new User(userParam);
    // save user
    	await newUser.save();
	   console.log('ICSUserService: registerUser: New user created');
    	return newUser;
   }
}
