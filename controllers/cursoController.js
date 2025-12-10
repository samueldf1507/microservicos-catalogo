const Curso = require('../models/Curso'); 

module.exports = {
  
  async criarCurso(req, res) {
    try {
      const { titulo, descricao, preco } = req.body;

      const novoCurso = await Curso.create({ titulo, descricao, preco });

      return res.status(201).json(novoCurso);

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar curso', detalhes: error.message });
    }
  },


  async listarCursos(req, res) {
    try {
      const cursos = await Curso.find(); 
      return res.json(cursos); 
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar cursos' });
    }
  },

  async buscarCurso(req, res) {   
    try {
      const curso = await Curso.findById(req.params.id);
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      return res.json(curso);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar curso' });
    }
  }
};