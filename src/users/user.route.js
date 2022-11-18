const express = require('express');
const userService = require ("./user.service");
const userRouter = express.Router();

userRouter.get("/users", async (req,res)=>{
    const users = await userService.getAllUsers();
    res.json(users);
    // return res.send("okkkkk");
});

userRouter.post("/users", async(req, res)=>{
    console.log(req.body);
    const {username, password} = req.body;
    const newUser = await userService.createUser(username, password);
    res.json(newUser);
})

userRouter.get("/users/:username", async(req, res)=>{
    console.log(req.params);
});

userRouter.delete("/users/:userId", async(req, res)=>{
    const{userId} = req.params;
    const deleteUser = await userService.deleteUser(userId);
    res.json(deleteUser);
   
});

userRouter.put("/users/:userId", async(req, res)=>{
    const{userId} = req.params;
    console.log(req.body);
    const {username, password} = req.body;
    const updateUser = await userService.updateUser(username, password, userId);
    res.json(updateUser);

});

module.exports = userRouter; 