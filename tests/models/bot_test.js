var bot = require('../../models/bot');
var assert = require('chai').assert;
const challange = 'Fortuna'

describe('bot validate fail', function(){
  it('should not return challange', function(){
    assert.notEqual(bot.validate('blabla',challange),challange);
  });
});

describe('bot validate success', function(){
  it('should not challange', function(){
    assert.equal(bot.validate('blabla',challange),challange)
  });
});