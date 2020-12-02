const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {valor: "", juros: "", meses: "", valorFinanciamento: ""});
});

app.post("/calcular", function(req, res){
    let valor = parseFloat(req.body.valor);
    let juros = parseFloat(req.body.juros);
    let meses = parseInt(req.body.meses);
    let valorFinanciamento = parseFloat(req.body.valor);
    for(let x = 0; x < meses; x++)
        valorFinanciamento += valorFinanciamento * juros / 100;
    res.render("index", {valor: valor.toFixed(2), juros: juros.toFixed(2), 
                         meses: meses, valorFinanciamento: valorFinanciamento.toFixed(2)});
});

app.listen(3000);
