const express = require("express");

const app = express();
//NOTE - global use
app.use(express.json());
const port = 8000;
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



//NOTE - Display all posts
app.get("/", (req, res) => {
    res.send(posts);
})


//NOTE - Sort posts by post 
app.get("/reversedPosts", (req, res) => {
    let sortedPosts = [...posts].reverse();
    res.send(sortedPosts);
})


//NOTE - Add post 
app.post("/addPost", (req, res) => {

    const { id } = req.body;

    const post = posts.find((post) => post.id == id)

    if (post) {
        res.send("post is already exist");
    }
    else {
        posts.push(req.body);
        res.send("post Added");
    }
})




//NOTE - Delete post
app.delete("/deletePost", (req, res) => {
    const { id } = req.body;

    const postIndex = posts.findIndex((post) => post.id == id);

    if (postIndex > -1) {
        posts.splice(postIndex, 1);
        res.send("post Deleted Successfully");
    }
    else {
        res.send("Invalid Id");
    }
})





//NOTE - Update post
app.put("/updatePost", (req, res) => {

    const { id } = req.body;

    const postIndex = posts.findIndex((post) => post.id == id);

    if (postIndex > -1) {
        posts[postIndex] = req.body;
        res.send("post Updated");
    }
    else {
        res.send("Invalid Id");
    }
});




//NOTE - Search by id 


app.get("/searchById", (req, res) => {

    const { id } = req.body;

    let postIndex = posts.findIndex((post) => post.id == id);

    if (postIndex > -1) {

        res.send({ "message": "post is found", "post": posts[postIndex] })
    }
    else {
        res.send("post is not exist ");
    }
})





//NOTE - listen to the port 
app.listen(port, () => {
    console.log(`Server is listening at ${port} `);
})




