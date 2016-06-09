module.exports = function (token) {
    const VERIFY_TOKEN = token;
    var module = {};

    module.validate = function(token, challange) {
		if (token === VERIFY_TOKEN) {
			console.log("Token verified");;
			return (challange);
		}else{
			console.log("Token error");;
			return ('Error, wrong validation token')
		}
	}
    return module;
};
