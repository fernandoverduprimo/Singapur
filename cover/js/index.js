TweenMax.set('.container', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50 });


var daySky = document.querySelector('#day-sky');
var beforeSunsetSky = document.querySelector('#before-sunset-sky');
var sunsetSky = document.querySelector('#sunset-sky');
var nightSky = document.querySelector('#night-sky');

var changeSky = function changeSky() {
  var tl = new TimelineMax();
  tl.add('dayToNight');
  tl.to(daySky, 6, {
    opacity: 0 },
  "dayToNight");
  tl.to(beforeSunsetSky, 6, {
    opacity: 0 },
  "dayToNight+=6");
  tl.to(sunsetSky, 6, {
    opacity: 0 },
  "dayToNight+=12");
  return tl;
};

var cloudOne = document.querySelector('#clouds1');
var cloudTwo = document.querySelector('#clouds2');
var cloudThree = document.querySelector('#clouds3');
var cloudFour = document.querySelector('#clouds4');
var cloudFive = document.querySelector('#clouds5');
var cloudSix = document.querySelector('#clouds6');
var cloudArray = [cloudOne, cloudTwo, cloudThree, cloudFour, cloudFive, cloudSix];

cloudArray.forEach(function (cloud) {
  TweenMax.set(cloud, {
    x: -1200 });

});

var clouds = function clouds() {
  var counter = 2;
  var tl = new TimelineMax();
  tl.add('clouds');
  cloudArray.forEach(function (cloud) {
    tl.to(cloud, 20 + counter, {
      x: 1400,
      opacity: 0 },
    'clouds');
    counter += 2;
  });
  return tl;
};

var scOne = document.querySelector('#sc1');
var scOneFront = scOne.querySelector('#sc1-front');
var scTwo = document.querySelector('#sc2');
var scTwoFront = document.querySelector('#sc2-front');
var scFourFront = document.querySelector('#sc4-front');
var scFiveFront = document.querySelector('#sc5-bg');
var scSixFront = document.querySelector('#sc6-bg');
var scSevenFront = document.querySelector('#sc7-front');
var sc8Front = document.querySelector('#sc8-front');
var sc8Sides = document.querySelector('#sc8-sides');
var sc9Front = document.querySelector('#sc9-bg');
var sc9Panes = document.querySelector('#sc9-panes');
var sc10Front = document.querySelector('#sc10-front');
var sc11Front = document.querySelector('#sc11-front');
var sc11Bg = document.querySelector('#sc11-bg');
var sc12Front = document.querySelector('#sc12-bg');
var sc12TopFront = document.querySelector('#sc12-top-front');
var sc13Front = document.querySelector('#sc13-2');
var sc13Sides = document.querySelector('#sc13-sides');
var sc14Front = document.querySelector('#sc14-bg');
var sc14Side = document.querySelector('#sc14-side');


var sc7Sides = document.querySelector('#sc7-sides');

var fronts = [
scOneFront,
scTwoFront,
scFourFront,
scFiveFront,
scSixFront,
scSevenFront,
sc8Front,
sc9Front,
sc10Front,
sc11Front,
sc12Front,
sc13Front,
sc14Front];


var scOneWindows = scOne.querySelector('#sc1-windows');
var scTwoWindows = document.querySelector('#sc2-windows');
var scFourWindows = document.querySelector('#sc4-windows');
var scFiveWindows = document.querySelector('#sc5-windows');
var scSixWindows = document.querySelector('#sc6-windows');
var scSevenWindows = document.querySelector('#sc7-windows');
var scEightWindows = document.querySelector('#sc8-windows');
var scNineWindows = document.querySelector('#sc9-windows');
var scTenWindows = document.querySelector('#sc10-windows');
var sc11FrontWindows = document.querySelector('#sc11-front-windows');
var sc11LeftWindows = document.querySelector('#sc11-left-windows');
var sc11RightWindows = document.querySelector('#sc11-right-windows');
var sc12Windows = document.querySelector('#sc12-windows');
var sc12BottomWindows = document.querySelector('#sc12-windows-bottom');
var sc13Windows = document.querySelector('#sc13-windows');
var sc14Windows = document.querySelector('#sc14-windows');
var sc14SideWindows = document.querySelector('#sc14-side-windows');

var windows = [
scOneWindows,
scTwoWindows,
scFourWindows,
scFiveWindows,
scSixWindows,
scSevenWindows,
scEightWindows,
scNineWindows,
scTenWindows,
sc11FrontWindows,
sc11LeftWindows,
sc11RightWindows,
sc12Windows,
sc12BottomWindows,
sc13Windows,
sc14Windows,
sc14SideWindows];


var sc = function sc() {
  var tl = new TimelineMax();
  tl.add('sc');
  tl.to(scOneFront, 3, {
    fill: '#6D5F46' },
  'sc');
  tl.to(scTwoFront, 3, {
    fill: '#23516D' },
  'sc');
  tl.to(scFourFront, 3, {
    fill: '#5E4D42' },
  'sc');
  tl.to(scFiveFront, 3, {
    fill: '#635342' },
  'sc');
  tl.to(scSixFront, 3, {
    fill: '#564D45' },
  'sc');
  tl.to(scSevenFront, 3, {
    fill: '#3F545B' },
  'sc');
  tl.to(sc7Sides, 3, {
    fill: '#365660' });

  tl.to(sc8Front, 3, {
    fill: '#3F545B' },
  'sc');
  tl.to(sc8Sides, 3, {
    fill: '#514B49' },
  'sc');
  tl.to(sc9Front, 3, {
    fill: '#23516D' },
  'sc');
  tl.to(sc9Panes, 3, {
    fill: '#6B695F' },
  'sc');
  tl.to(sc10Front, 3, {
    fill: '#3E5054' },
  'sc');
  tl.to(sc11Front, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc11Bg, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc12Front, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc12TopFront, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc13Front, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc13Sides, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc14Front, 3, {
    fill: '#423530' },
  'sc');
  tl.to(sc14Side, 3, {
    fill: '#423530' },
  'sc');
  windows.forEach(function (window) {
    tl.to(window, 6, {
      fill: '#C99541' },
    'sc');
  });
  return tl;
};

var master = new TimelineMax({ repeat: -1, yoyo: true });
master.add(clouds(), "clouds");
master.add(changeSky(), "clouds+=4");
master.add(sc(), "clouds+=8");

var slider = document.querySelector('.slider');
var progress = document.querySelector('.progress');

slider.addEventListener('input', function () {
  master.progress(slider.value / 100);
});