angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.inicioIonicFramework', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicioIonicFramework.html',
        controller: 'inicioIonicFrameworkCtrl'
      }
    }
  })

  .state('tabsController.inicioJavaScript', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/inicioJavaScript.html',
        controller: 'inicioJavaScriptCtrl'
      }
    }
  })

  .state('tabsController.inicioAngular', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/inicioAngular.html',
        controller: 'inicioAngularCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('iONICCREATOR', {
    url: '/page5',
    templateUrl: 'templates/iONICCREATOR.html',
    controller: 'iONICCREATORCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});