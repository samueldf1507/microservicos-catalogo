const Curso = require('../models/Curso'); // Importa o Molde (a Cozinha)

module.exports = {
  // Função para criar um curso
  async criarCurso(req, res) {
    try {
      // 1. REQUISIÇÃO: O controller pega os dados que o usuário mandou
      const { titulo, descricao, preco } = req.body;

      // 2. PROCESSAMENTO: Ele pede para o Model criar no banco
      const novoCurso = await Curso.create({ titulo, descricao, preco });

      // 3. RESPOSTA: Ele devolve o resultado para o usuário (JSON)
      return res.status(201).json(novoCurso);

    } catch (error) {
      // Se der erro, ele também decide a resposta de erro
      return res.status(400).json({ error: 'Erro ao criar curso', detalhes: error.message });
    }
  },

  // Função para listar os cursos
  async listarCursos(req, res) {
    try {
      const cursos = await Curso.find(); // Pede tudo ao Model
      return res.json(cursos); // Devolve a lista como resposta
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar cursos' });
    }
  },

  async buscarCurso(req, res) {    // <--- Essa função existe?
    try {
      const curso = await Curso.findById(req.params.id);
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      return res.json(curso);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar curso' });
    }
  }
};