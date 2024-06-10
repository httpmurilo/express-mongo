import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./model/Livro.js"

const app = express();

const conexao = await conectaNaDataBase();


conexao.on("error", (error) => {
    console.error("erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso");
});

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200, send("Curso"));
} );

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
} );

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.get("/livros/:id", (req, res) => {
    
});

app.put("/livros/:id", (req, res) => {
    
});

app.delete("/livros/:id", (req, res) => {
    
});


export default app;