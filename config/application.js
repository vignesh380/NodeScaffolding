  var env 		   = process.env.NODE_ENV || 'development'
	, packageJson  = require ('../package.json')
	, path 		   = require('path')
	, express      = require('express');

console.log('Loading App in ' + env +' mode.');

global.App = {
	  app: express()
	, port: process.env.PORT || 5000
	, version: packageJson.version
	, root: path.join(__dirname,'..')
	, appPath: function(path) {
		return this.root + '/' + path;
	}
	, require: function(path) {
		return require(this.appPath(path));
	}
	, env:env
	, start : function(){
		if (!this.started) {
			this.started = true;
			this.app.listen(this.port);
			console.log("running the app version " + App.version + " on port " + App.port + " in " + App.env + " mode");	
		}
	}
	, model: function(path){
		return this.require("app/models/" + path);
	}
	, route: function(path) {
		return this.require("app/routes/" + path);
	}
	, util: function(path) {
		return this.require("app/utils/" + path);
	}
	, middleware: function(path) {
		return this.require("app/middlewares/" + path);
	}
}

/*
//Config for cookie parser and body parser
// configuration ========================================================================
App.app.use(cookieParser()); // read cookies (needed for auth)

// get info from html forms
App.app.use(bodyParser.urlencoded({
  extended: true
}));
App.app.use(bodyParser.json());
*/



/*
// required for passport  
App.app.use(session({secret: 'someSecret'}));// session secret
App.app.use(passport.initialize());
App.app.use(passport.session()); // persistent login sessions
*/

/*
//add all passport related stuff below 
// passport ============================================================================
App.require("config/passport")(passport);
*/

//add all routes related stuff below
// routes ==============================================================================
console.log('gonna call routes');
App.require("config/routes")(App.app);

//for mongoDB connection for the app
/*
// Database configuration ==============================================================
App.require('config/database')
//change the below to your mongodb connection 
('mongodb://localhost/app1111111'); 
*/