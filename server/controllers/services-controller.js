var Hc = require('../models/healingcenter-model.js')

module.exports.create = function (req, res) {
  var hc = new Hc(req.body);
  hc.save(function (err, result){
    res.json(result);
  });
}

module.exports.list = function (req,res) {
  Hc.find({}, function (err, results){
    res.json(results);
  });
}