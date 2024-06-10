import autor from "../model/Autor.js";


class AutorController {

    static async listarAutores(req, res) {
     try {
       const listaAutores = await autor.find({});
       res.status(200).json(listaAutores);
     } catch (erro) {
       res
         .status(500)
         .json({ message: `${erro.message} - falha na requisição` });
     }
   }

   static async cadastrarAutor(req, res) {
    try{
        const novoAutor = await autor.create(req.body);
        res.status(201).json({message: "criado com sucesso", autor: novoLivro});

    } catch (error) {
        res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
   }

   static async listarLivroPorId(req, res) {
    try {
        const id = req.params.id;
      const autor = await autor.findById(id);
      res.status(200).json(autor);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
        const id = req.params.id;
        await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "autor atualizado"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async excluirLivro(req, res) {
    try {
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
      res.status(200).json({message: "autor excluido"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }





  };
export default AutorController;