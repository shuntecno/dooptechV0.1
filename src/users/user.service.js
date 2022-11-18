const userRepo = require("./user.repo");
const {repoGetAllUsers} = require("./user.repo");

const getAllUsers = async () =>{
  return await repoGetAllUsers();
};
const createUser = async (username, password) =>{
  // console.log(username, password);
  const userExsist = await userRepo.repoGetUserByUsername(username); 
  if(!userExsist){
     return await userRepo.repoCreateUser(username,password);
  }else{
    return "user sudah di gunakan ";
  }
};

const deleteUser = async (userId) =>{
  // console.log(userId);
  if(userId != 1){
    return await userRepo.repoDeleteUser(userId);
  }else{
    return 'gak bisaoi';
  }
   
};

const updateUser = async (username, password, userId)=>{
  return await userRepo.repoUpdateUser(username, password, userId)
};

const userService = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser
};



module.exports = userService;