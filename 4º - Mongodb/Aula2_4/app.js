import express from 'express';
import mongoose from 'mongoose';
import { accountsRouter } from "./routes/accountsRouter.js";

(async () => {
  try {  
  await mongoose.connect(
  "mongodb+srv://guilherme:G132.546t@ty@cluster0.o7nq8.mongodb.net/account?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)} catch(error) {
  console.log("Erro ao conectar no MongoDB")
}})();

const app = express();
app.use(express.json());
app.use(accountsRouter);

app.listen(3000, () => console.log('API iniciada.'));
