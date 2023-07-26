import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(cors()); 
app.use(express.json()); // body parser
import postRouter from './routes/post.mjs'

app.use("/api/v1", postRouter)



app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})