function ProdutosDAO(Kitten){
  this._Kitten = Kitten;
}

ProdutosDAO.prototype.lista = function(callback){
  this._Kitten.find({ }, callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
  produto.save(function (err, fluffy) {
    if (err){
      return console.error(err);
    }
  });
}

module.exports = function(){
  return ProdutosDAO;
}
