const express = require("express");

const app = express();
//NOTE - global use
app.use(express.json());
const port = 3000;
const users = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Emma",
        age: 32
    },
    {
        id: 3,
        name: "Michael",
        age: 40
    },
    {
        id: 4,
        name: "Sophia",
        age: 28
    },
    {
        id: 5,
        name: "William",
        age: 35
    },
    {
        id: 6,
        name: "Olivia",
        age: 22
    },
    {
        id: 7,
        name: "James",
        age: 29
    },
    {
        id: 8,
        name: "Ava",
        age: 27
    },
    {
        id: 9,
        name: "David",
        age: 33
    },
    {
        id: 10,
        name: "Isabella",
        age: 31
    }
];



//NOTE - Display all users
app.get("/", (req, res) => {
    res.send(users);
})


//NOTE - Sort users by name 
app.get("/sortedUsers", (req, res) => {
    let sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    res.send(sortedUsers);
})


//NOTE - Add user 
app.post("/addUser", (req, res) => {

    const { id } = req.body;

    const user = users.find((user) => user.id == id)

    if (user) {
        res.send("User is already exist");
    }
    else {
        users.push(req.body);
        res.send("User Added");
    }
})




//NOTE - Delete user
app.delete("/deleteUser", (req, res) => {
    const { id } = req.body;

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex > -1) {
        users.splice(userIndex, 1);
        res.send("User Deleted Successfully");
    }
    else {
        res.send("Invalid Id");
    }
})





//NOTE - Update user
app.put("/updateUser", (req, res) => {

    const { id } = req.body;

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex > -1) {
        users[userIndex] = req.body;
        res.send("User Updated");
    }
    else {
        res.send("Invalid Id");
    }
});




//NOTE - Search by id 


app.get("/searchById", (req, res) => {

    const { id } = req.body;

    let userIndex = users.findIndex((user) => user.id == id);

    if (userIndex > -1) {

        res.send({ "message": "user is found", "user": users[userIndex] })
    }
    else {
        res.send("user is not exist ");
    }
})





//NOTE - listen to the port 
app.listen(port, () => {
    console.log(`Server is listening at ${port} `);
})




