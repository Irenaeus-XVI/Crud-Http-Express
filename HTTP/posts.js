
//NOTE - import http
const http = require("http");
//NOTE - initialize the port
const port = 3000;

//NOTE - declare the array 

let posts = [{
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
},
{
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
},
{
    id: 3,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
},
{
    id: 4,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
},
{
    id: 5,
    title: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
},
{
    id: 6,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
},
{
    id: 7,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
},
{
    id: 8,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
},
{
    id: 9,
    title: "Goodfellas",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
},
{
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
}]

const server = http.createServer((req, res) => {
    const { url, method } = req;


    //NOTE - Display All posts
    if (url == "/" && method == "GET") {
        //NOTE - Default it database must be sorted by id  
        posts = posts.sort((a, b) => a.id - b.id)
        if (posts.length == 0) {
            res.write("No Person To Display.");
            res.end();
        } else {
            res.write(JSON.stringify(posts));
            res.end();
        }
    }



    //NOTE - Add post
    else if (url == "/addPost" && method == "POST") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const post = posts.find(post => post.id == convertedData.id)
            if (post) {
                console.log("post Already Exist...");
                res.write("post Already Exist...");
                res.end();
            }
            else {
                posts.push(convertedData);
                res.write("post Add Successfully");
                console.log("post Add Successfully");
                res.end();
            }


        })
    }


    //NOTE - Display All posts Sorted By title
    else if (url == "/reversedPosts" && method == "GET") {
        let sortedPosts = [...posts].reverse();
        console.log(posts);
        if (sortedPosts.length == 0) {
            res.write("No Person To Display.");
            res.end();
        } else {
            res.write(JSON.stringify(sortedPosts));
            res.end();
        }
    }


    //NOTE - Update post 
    else if (url == "/updatePost" && method == "PUT") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const post = posts.find(post => post.id == convertedData.id)
            const indexPost = posts.indexOf(post);
            console.log(indexPost);
            if (post) {
                posts[indexPost] = convertedData;
                res.write("post Updated Successfully");
                res.end("post Updated Successfully");
            }
            else {
                console.log("No post Exist...");
                res.end("No post Exist...");
            }
        })
    }

    //NOTE - Delete post 
    else if (url == "/deletePost" && method == "DELETE") {

        let receivedData;
        req.on("data", (data) => {
            receivedData = data;
        })

        req.on("end", () => {
            let convertedData = JSON.parse(receivedData);

            const post = posts.find(post => post.id == convertedData.id)
            const indexPost = posts.indexOf(post);
            console.log(indexPost);
            if (post) {
                posts.splice(indexPost, 1);
                res.write("post Deleted Successfully");
                res.end("post Deleted Successfully");
            }
            else {
                console.log("No post Exist...");
                res.end("No post Exist...");
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

            const post = posts.find(post => post.id == convertedData.id)
            console.log(post);
            if (post) {
                res.write(JSON.stringify(post));
                console.log(post);
                res.end();
            }
            else {
                console.log("No post Exist...");
                res.end("No post Exist...");
            }
        })
    }

    res.end()
});


server.listen(port, () => {
    console.log(`"server is listening at port ${port}`);
})