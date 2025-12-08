const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true // Obrigatório
  },

  descricao: String,

  preco: {
    type: Number,
    required: true
  },
  
  urlImagem: String,
  criadoEm: {
    type: Date,
    default: Date.now // Preenche a data sozinho
  }
});

// O mongoose vai criar a collection 'cursos' automaticamente baseada nesse nome
module.exports = mongoose.model('Curso', CursoSchema);