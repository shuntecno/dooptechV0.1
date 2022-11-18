const {User} = require('../db/models');
// const userService = require('./user.service');

const repoGetAllUsers = async () => {
    return await User.findAll();
};

const repoCreateUser = async (username, password) =>{
//   console.log(username, password);
    return await User.create({
        username : username,
        password : password
    });
};

const repoGetUserByUsername = async (username)=>{
    return await User.findOne({
        where: {username : username},
    });
};

const repoDeleteUser = async (userId)=>{
    return await User.destroy({
        where: {
          id: userId,
        }
      });
};

const repoUpdateUser = async (username, password, userId)=>{
    return await User.update({ 
        username:username,
        password:password  
    },
     {
        where: {
          id: userId
        }
      }); 
};

const userRepo = {
    repoGetAllUsers,
    repoCreateUser,
    repoGetUserByUsername,
    repoDeleteUser,
    repoUpdateUser
};

module.exports = userRepo;