const express = require("express");
const cookieparser = require("cookie-parser");
const {connectMongo }= require("./connect");
const userRoute = require("./routes/user");
const notesRoute = require("./routes/note");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieparser());
app.use(express.urlencoded({extended:true}));
app.use("/user", userRoute);
app.use("/notes", notesRoute);

app.get("/", (req, res) => {
     res.send("Server Running");
})
async function start(){
     try{
          await connectMongo(process.env.MONGO_URL);
          console.log("Mongo DB conected");
          app.listen(process.env.PORT, () => console.log("Server Started"));
     }
     catch(err){
          console.log("Error while starting the app", err);
          process.exit(1);
     }
}

start();
