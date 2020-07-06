import mongoose from "mongoose";

//Criação do modelo
const accountsSchema = mongoose.Schema({
  agencia: {
    type: Number,
    required: true,
  },
  conta: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance:{
    type: Number,
    required: true,
  }
});
//Definindo o modelo da coleção
const accountsModel = mongoose.model('accounts', accountsSchema);

export {accountsModel};


