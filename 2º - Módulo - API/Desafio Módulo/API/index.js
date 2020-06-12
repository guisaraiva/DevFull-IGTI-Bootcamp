const express = require('express');
const fs = require('fs').promises;
const app = express(); // Criando uma instância do express;
const gradesRouter = require('./routes/accounts.js');
const winston = require ('winston');

global.fileName = 'grades.json';

const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp})=>{
  return `${timestamp} [${label}] ${level}: ${message}`;
})
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "my-bank-api"})
  ],
  format: combine(
    label({ label: "my-bank-api"}),
    timestamp(),
    myFormat
  )
});

app.use(express.json());
app.use('/grade', gradesRouter);

app.listen(3000, async () => {
  // Abrindo a porta da aplicação.
  try {
    await fs.readFile(global.fileName, 'utf8');
    logger.info('API started');
  } catch (err) {
      const initialJson = {
        nextId: 1,
        grades: [],
      };
      fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch( err =>{
        logger.error(err);
      })
  };
});
