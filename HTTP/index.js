
//NOTE - import http
const http = require("http");
//NOTE - initialize the port
const port = 8000;

//NOTE - declare the array 

let users = [{
    id: 1,
    name: "ahmed",
    age: 22
},
{
    id: 2,
    name: "Karim",
    age: 21
},
{
    id: 3,
    name: "Hobaelmohob",
    age: 20
},
{
    id: 4,
    name: "El8aly",
    age: 21
}]

const server = http.createServer((req, res) => {
    const { url, method } = req;


    //NOTE - Display All Users
    if (url == "/" && method == "GET") {
        //NOTE - Default it database must be sorted by id  
        users = users.sort((a, b) => a.id - b.id)
        if (users.length == 0) {
            res.write("No Person To Display.");
            res.end();
        } else {
            res.write(JSON.stringify(users));
            res.end();
        }
    }



    //NOTE - Add User
    else if (url == "/addUser" && method == "POST") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const user = users.find(user => user.id == convertedData.id)
            if (user) {
                console.log("User Already Exist...");
                res.write("User Already Exist...");
                res.end();
            }
            else {
                users.push(convertedData);
                res.write("User Add Successfully");
                console.log("User Add Successfully");
                res.end();
            }


        })
    }


    //NOTE - Display All Users Sorted By Name
    else if (url == "/sortedUsers" && method == "GET") {
        let sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name.toLowerCase()))
        console.log(users);
        if (sortedUsers.length == 0) {
            res.write("No Person To Display.");
            res.end();
        } else {
            res.write(JSON.stringify(sortedUsers));
            res.end();
        }
    }


    //NOTE - Update User 
    else if (url == "/updateUser" && method == "PUT") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const user = users.find(user => user.id == convertedData.id)
            const indexUser = users.indexOf(user);
            console.log(indexUser);
            if (user) {
                users[indexUser] = convertedData;
                res.write("User Updated Successfully");
                res.end("User Updated Successfully");
            }
            else {
                console.log("No User Exist...");
                res.end("No User Exist...");
            }


        })
    }



    //NOTE - Delete User 
    else if (url == "/deleteUser" && method == "DELETE") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const user = users.find(user => user.id == convertedData.id)
            const indexUser = users.indexOf(user);
            console.log(indexUser);
            if (user) {
                users.splice(indexUser, 1);
                res.write("User Deleted Successfully");
                res.end("User Deleted Successfully");
            }
            else {
                console.log("No User Exist...");
                res.end("No User Exist...");
            }


        })
    }

    //NOTE - Search By Id
    else if (url == "/SearchById" && method == "GET") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
            console.log(receivedData);

        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const user = users.find(user => user.id == convertedData.id)
            if (user) {
                res.write(JSON.stringify(user));
                console.log(user);
                res.end();
            }
            else {
                console.log("No User Exist...");
                res.end("No User Exist...");
            }


        })

    }


    res.end()
});














server.listen(port, () => {
    console.log(`"server is listening at port ${port}`);
})