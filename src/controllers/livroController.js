import livro from "../model/Livro.js"

class LivroController {

    static async listarLivros(req, res) {
     try {
       const listaLivros = await livro.find({});
       res.status(200).json(listaLivros);
     } catch (erro) {
       res
         .status(500)
         .json({ message: `${erro.message} - falha na requisição` });
     }
   }

   static async cadastrarLivro(req, res) {
    try{
        const novoLivro = await livro.create(req.body);
        res.status(201).json({message: "criado com sucesso", livro: novoLivro});

    } catch (error) {
        res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
   }


   


  };
export default LivroController;