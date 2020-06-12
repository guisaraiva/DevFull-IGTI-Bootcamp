const express = require('express');
const router = express.Router();
const fs = require('fs').promises;


router.post('/', async (req, res) => {
  let grade = req.body;
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    grade = { id: json.nextId++, ...grade };
    json.grades.push(grade);
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
  } catch {
    res.status(400).send({ error: err.message });
  }
});

router.get('/', async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
    logger.infor("Get /grade")
  } catch (err) {
    res.status(400).send({ error: err.message });
    global.logger.timeSta
  }
});

router.get('/:id', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    const grade = json.grades.find(
      (grade) => grade.id === parseInt(req.params.id, 10)
    );
    if (grade) {
      res.send(grade);
    } else {
      res.end();
    
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
    
  }
});

router.get('/:student', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    const grade = json.grades.find(
      (grade) => grade.id === parseInt(req.params.id, 10)
    );
    if (grade) {
      res.send(grade);
    } else {
      res.end();
    
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
    
  }
});



router.delete('/:id', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let grades = json.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id, 10)
    );
    json.grades = grades;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    
  } catch (err) {
    res.status(400).send({ error: err.message });
    
  }
});

router.put('/', async (req, res) => {
  try {
    let newgrade = req.body;
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let oldIndex = json.grades.findIndex(
      (grade) => grade.id === newgrade.id
    );
    //json.grades[oldIndex] = newgrade; //Recebe todo o corpo da requisição.
    json.grades[oldIndex].name = newgrade.name;
    json.grades[oldIndex].balance = newgrade.balance;

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
    let index = json.grades.findIndex(
      (grade) => grade.id === newTransaction.id
    );
    if (
      newTransaction.value < 0 &&
      json.grades[index].balance + newTransaction.value < 0
    ) {
      throw new Error('Não há saldo suficiente!');
    }
    json.grades[index].balance += newTransaction.value;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send(json.grades[index]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
