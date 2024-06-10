import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200, send("Curso"));
} );

app.get("/livros", (req, res) => {
    res.status(200).json();
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