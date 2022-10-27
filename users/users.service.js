
let usersList = [
  {
    id : 1,
    nama : "asssw",
    umur : "fdfdff"
  },
  {
    id : 2,
    nama : "asssw",
    umur : "fdfdff"
  },
  {
    id : 3,
    nama : "asssw",
    umur : "fdfdff"
  }
];

const getUsers = ("/", (req, res, next) => {

  return res.json(usersList);
});

const getUsersbyid = ("/", (req, res, next) => {
  const {userId} = req.params;
    const userData = usersList.find(user => user.id == userId);
    console.log(userData);
    return res.json(userData);
  });


const createUser = ("/", (req, res, next) => {
  console.log(req.body);
  return res.send("ok ini  create user");
});

const editUser = ("/:userId", (req, res, next) => {
  console.log(req.params);
  return res.send("ok ini edit user by Id" + req.params.userId);
});

const deleteUser =("/:userId", (req, res, next) => {
  const {userId} = req.params;
  console.log(req.params);

  usersList = usersList.filter((user)=>user.id != userId);
  return res.send("terhapus " + req.params.userId);
});

module.exports = {
    getUsers,
    getUsersbyid,
    createUser,
    editUser,
    deleteUser 
}
