import { hasLoaded } from './util';

hasLoaded(function () {
  var app = document.getElementsByClassName('App')[0];
  var content = document.getElementsByClassName('NowPlaying__aboveFold')[0];
  var menu = document.getElementsByClassName('NowPlaying__menu')[0];
  var stations = document.getElementsByClassName('MyStationsMenuItem')[0];

  var tarpNode = document.createElement('div');
  tarpNode.className = 'tarp';

  menu.onmouseleave = function () {
    app.className = 'App';
    content.removeChild(tarpNode);
  };

  stations.onmouseover = function () {
    app.className = app.className + ' StationsMenuVisible';
    content.appendChild(tarpNode);
  };
});
