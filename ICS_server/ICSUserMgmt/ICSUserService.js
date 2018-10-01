const config = require('./ICSUserConfig');
const User = require("./ICSUserModel");;

module.exports = {
    authenticate,
    registerUser
};

function authenticate({ username, passwrd }) {
    const user = await User.findOne({ username });
    if (user) {
        const user1 = user.toObject();
        
        return { user1};
    }
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