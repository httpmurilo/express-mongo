import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

conexao.on("error", (error) => {
    console.error("erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso");
});

export default app;