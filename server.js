import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const ROTAS = {
    "/" : "Curso de nodeJS",
    "/livros" : "",
    "/autores" : ""
};


app.listen(PORT, () => {
    console.log("Servidor escutando");
});