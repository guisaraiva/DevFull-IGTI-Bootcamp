import mongoose from "mongoose";

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
//Criação do modelo
const accountsSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true,
  },
  conta: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  balance:{
    type: Number,
    require: true,
  }
});
//Definindo o modelo da coleção
mongoose.model('accounts', accountsSchema);

const accounts = mongoose.model('accounts');

new accounts({
  agencia: 5325,
  conta: 8578,
  name: "Tatianne de Souza Silva Saraiva",
  balance: 20000
})
.save()
.then( () => console.log("Documento inserido"))
.catch ((err) => console.log("Erro na inserção"+err));

