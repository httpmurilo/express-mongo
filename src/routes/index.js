import express from "express";
import livros from "./livroRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node"));

    app.use(express.json(), livros);
};

export default routes;
