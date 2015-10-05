// app/routes.js

var express = require('express');
var fs = require('fs');

// expose the routes to our app with module.exports
module.exports = function(app) {
  app.set('port', (process.env.PORT || 5000));
  
  //middleware ===================================================================== 
  var sampleMiddleware = App.middleware('sampleMiddleware');
  //app.use('*',sampleMiddleware.sampleMiddleware);

  // homePageRoutes ================================================================
  var homePageRoutes = App.route('homePageRoutes');
  app.get('/', homePageRoutes.homePage);
  app.get('/home',homePageRoutes.tempHomePage);
  app.get('/exp/jquery',function (req,res) { 
      res.json({
  "one": "Singular sensation",
  "two": "Beady little eyes",
  "three": "Little birds pitch by my doorstep"
    });
  });

  app.get('/exp/jqueryPage',function (req,res) { 
    res.sendFile('shiv.html',{root : "public"})
  });

  // Public Folder =================================================================
  app.use(express.static(App.appPath('/public')));

};