'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('getImagePath', function(){
    return function(input){
      switch(input){
      case 'running':
        return "img/player_play.ico";
      case 'stopped':
        return "img/close.ico";
      case 'done':
        return "img/good_or_tick.ico";
      default:
        return "img/player_play.ico";
      }
    }
  });
