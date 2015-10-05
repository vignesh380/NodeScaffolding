function sampleMiddleware(req,res,next) {
	console.log('bazinga! middleware is called');
   
}

exports.sampleMiddleware = sampleMiddleware;