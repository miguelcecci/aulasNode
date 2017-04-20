module.exports = function(app) {
  app.get('/produtos', function(req, res){
    var Kitten = app.infra.dbConnection();
     //primeiro parametro é o nome do modelo, e depois o esquema

    // kittySchema.methods.speak = function () {
    //   var greeting = this.name
    //   ? "Meow name is " + this.name
    //   : "I don't have a name";
    //   console.log(greeting);
    // }


    // var fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.save(function (err, fluffy) {
    //   if (err){
    //     return console.error(err);
    //   }else{
    //     fluffy.speak();
    //   }
    // });

    // Kitten.find({ name: /^fluff/ }, callback);
    var produtosBanco = new app.infra.ProdutosDAO(Kitten);
    produtosBanco.lista(function(err, kitty) {
      if (err) return handleError(err);
      if(kitty.length != 0){
        res.render('produtos/lista',{lista:kitty});
      }else{
        res.send('nothing was found');
      }
    });

    // var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //   host : 'localhost',
    //   user : 'root',
    //   password : 'miguel17',
    //   database : 'casadocodigo_nodejs'
    // });
    // var results = connection.query('select * from livros', function(err, result) {
    //
    // });
    // connection.end;
    // res.render("produtos/lista");
  });

  app.get('/produtos/form', function(req, res) {
    res.render('produtos/form');
  });

  app.post('/produtos/salva', function(req, res) {
    // var produtosBanco = new app.infra.ProdutosDAO(Kitten);
    var connection = app.infra.dbConnection();
    var produto = req.body;
    console.log(produto);

    // produtosBanco.salva(produto, function(err, resutados) {
    //   res.render('produtos/lista');
    // });
  });
}
