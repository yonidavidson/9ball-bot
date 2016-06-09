const VERIFY_TOKEN = process.env.VERIFY_TOKEN

exports.validate = function(token, challange) {
	if (token === VERIFY_TOKEN) {
		console.log("Token verified");;
		return (challange);
	}else{
		console.log("Token error");;
		return ('Error, wrong validation token')
	}
  
}
