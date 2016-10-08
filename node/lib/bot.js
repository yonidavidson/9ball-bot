var Bot = function () {};

Bot.prototype.validate = function (verify, token, challange) {
	if (token === verify) {
		console.log("Token verified");;
		return (challange);
	}else{
		console.log("Token error");;
		return ('Error, wrong validation token')
	}
};

module.exports = new Bot();