var webhook = require('../../controllers/webhook');

describe('token_authentication', function(){
  it('should return: \"err....\"', function(done){
    webhook.get('/', function(err, result){
    	done();
    });
  });
});