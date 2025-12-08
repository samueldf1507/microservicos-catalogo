const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const cursoController = require('./controllers/cursoController');

const app = express();
app.use(express.json()); 
app.use(cors()); 


mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('✅ Banco CATALOGO conectado!'))
  .catch(err => console.error('Erro ao conectar', err));


app.get('/cursos', cursoController.listarCursos);

app.post('/cursos', cursoController.criarCurso);

app.get('/cursos/:id', cursoController.buscarCurso);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Serviço de Catálogo rodando na porta ${PORT}`));