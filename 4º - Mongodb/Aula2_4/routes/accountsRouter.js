import express from 'express';
import { accountsModel } from '../models/accounts.js';

const accountsRouter = express();

accountsRouter.get('/accounts', async (req, res) =>{
 try {
  const account = await accountsModel.find({}); 
  res.send(account);
 } catch (error) {
   res.status(500).send(error);
   
 }
});


accountsRouter.post('/accounts', async (req, res) =>{
  try {
   const account = new accountsModel(req.body);
   await account.save();
   res.send(account);
  } catch (error) {
    res.status(500).send(error);
    
  }
});

accountsRouter.delete('/accounts/:id', async (req, res) =>{
  try {
   const account = await accountsModel.findByIdAndDelete({ _id: req.params.id });
   if(!account) {
     res.status(404).send('Documento não encontrado no banco');
   }
   res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

accountsRouter.patch('/accounts/:id', async (req, res) =>{
  try {
   const account = await accountsModel.findByIdAndUpdate(
     { _id: req.params.id },
     req.body,
     {new: true}
     );
   res.send(account)
  } catch (error) {
    res.status(500).send(error);
  }
});

export  {accountsRouter};

