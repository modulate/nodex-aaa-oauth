exports = module.exports = function(directory) {
  
  return function(id, cb) {
    console.log('TODO: oauth 1 port to realms');
    return;
    
    
    directory.query(id, function(err, client) {
      if (err) { return cb(err); }
      return cb(null, client);
    });
  };
};

exports['@provides'] = 'io.modulate.security.oauth2.deserializeClientCallback';
exports['@require'] = [ 
  //'http://schemas.modulate.io/js/aaa/clients/Directory'
];
