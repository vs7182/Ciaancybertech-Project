import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'



import { connectDB } from './lib/db.js'
import router from './routers/auth.route.js'
import userRouter from './routers/user.route.js'
import postRouter from './routers/posts.route.js'






dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(bodyParser.json())



app.use("/api/auth",router);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);


app.listen(5000,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();

})