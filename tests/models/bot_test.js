const TEST_TOKEN = 'faketoken'
const challange = 'Fortuna'
var bot = require('../../models/bot')(TEST_TOKEN);
var assert = require('chai').assert;

describe('bot validate fail', function(){
  it('should not return challange', function(){
    assert.notEqual(bot.validate(TEST_TOKEN + 'bad', challange),challange);
  });
});

describe('bot validate success', function(){
  it('should not challange', function(){
    assert.equal(bot.validate(TEST_TOKEN,challange),challange)
  });
});