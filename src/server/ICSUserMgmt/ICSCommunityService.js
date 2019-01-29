const Community = require("./ICSCommunityModel");;

module.exports = {
    register,
    findById
};

async function findById(userParam) {
    console.log('ICSCommunityService: userId = %s', userParam['userId'] );
    var query = { userId:userParam['userId'] };
        return await Community.find(query);
}

async function register(userParam) {
    console.log('ICSCommunityService:registerUser: userId = %s', userParam['userId'] );
    const newCommunity = new Community(userParam);
    await newCommunity.save();
    console.log('ICSCommunityService: register: New Community added');
    return newCommunity;
}