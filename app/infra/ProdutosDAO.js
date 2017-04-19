function ProdutosDAO(Kitten){
  this._Kitten = Kitten;
}

ProdutosDAO.prototype.lista = function(callback){
  this._Kitten.find({ }, callback);
}

module.exports = function(){
  return ProdutosDAO;
}
