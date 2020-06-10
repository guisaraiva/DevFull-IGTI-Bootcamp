const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.post('/', async (req, res) => {
  let account = req.body;
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    account = { id: json.nextId++, ...account };
    json.accounts.push(account);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    logger.info(`Post /account - ${JSON.stringify(account)}`)
  } catch {
    res.status(400).send({ error: err.message });
    logger.info(`Post /account - ${err.message}`)
  }
});

router.get('/', async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
    logger.infor("Get /account")
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.info(`GEt /account - ${err.message}`)
  }
});

router.get('/:id', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    const account = json.accounts.find(
      (account) => account.id === parseInt(req.params.id, 10)
    );
    if (account) {
      res.send(account);
    } else {
      res.end();
      logger.info(`GET /account/:id - ${JSON.stringify(account)}`)
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.info(`GEt /account - ${err.message}`)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let accounts = json.accounts.filter(
      (account) => account.id !== parseInt(req.params.id, 10)
    );
    json.accounts = accounts;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.info(`Delete /account - ${err.message}`)
  }
});

router.put('/', async (req, res) => {
  try {
    let newAccount = req.body;
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let oldIndex = json.accounts.findIndex(
      (account) => account.id === newAccount.id
    );
    //json.accounts[oldIndex] = newAccount; //Recebe todo o corpo da requisição.
    json.accounts[oldIndex].name = newAccount.name;
    json.accounts[oldIndex].balance = newAccount.balance;

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post('/transaction', async (req, res) => {
  try {
    let newTransaction = req.body;
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let index = json.accounts.findIndex(
      (account) => account.id === newTransaction.id
    );
    if (
      newTransaction.value < 0 &&
      json.accounts[index].balance + newTransaction.value < 0
    ) {
      throw new Error('Não há saldo suficiente!');
    }
    json.accounts[index].balance += newTransaction.value;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send(json.accounts[index]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
