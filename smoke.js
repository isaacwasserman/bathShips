var plume = $('#plume')
//var puff = '<a-sphere class="puff" color="white" material="opacity:1;"><a-animation attribute="position"from="0 0 0"to="0 10 0"dur="5000"easing="linear"></a-animation><a-animation attribute="material.opacity"from="0.5"to="0"dur="5000"easing="ease-in"></a-animation></a-sphere>'

var puffPartOne = '<a-sphere ';

var puffPartTwo = 'class="puff" color="#222" opacity="0"><a-animation attribute="position"';

var puffPartThree = 'dur="5000"easing="linear"></a-animation><a-animation attribute="material.opacity"from="0.5"to="0"dur="4500" delay="500" easing="linear"></a-animation><a-animation attribute="material.opacity"from="0"to="0.5"dur="500"easing="linear"></a-animation><a-animation attribute="scale"';

var puffPartFour = 'dur="500"easing="linear"></a-animation></a-sphere>';

function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(3);
}

//needs to generate from="x 0 z" to="x 10 z"

var idNum = 1;

var frequency = 350;
var speed = 5000;

setInterval(function(){
  var scaleNum = getRandom(1,1.2);
  var scaleString = ' scale="' + scaleNum + ' ' + scaleNum + ' ' + scaleNum + '" '
  
  var newscaleNum = parseFloat(scaleNum) + 0.5;
  var newscaleString = ' from="0.1 0.1 0.1" to="' + scaleNum + ' ' + scaleNum + ' ' + scaleNum + '" '
  
//  console.log(newscaleString);
  
  var x = getRandom(-0.75,0.75);
  var z = getRandom(-0.75,0.75);
  
  var newX = parseFloat(x) - 10;
  
  var positionValues = 'from="' + x + ' 0 ' + z + '"to="' + newX + ' 10 ' + z + '"';
//  console.log(positionValues);
  
  var PuffID = 'id="puff' + idNum + '"';
  
  var newPuff = puffPartOne + PuffID + scaleString + puffPartTwo + positionValues + puffPartThree + newscaleString + puffPartFour;
  
  plume.append(newPuff);
  
  idNum++;
  
},frequency);

setTimeout(function(){
  setInterval(function(){
    document.getElementsByClassName("puff")[0].parentNode.removeChild(document.getElementsByClassName("puff")[0]);
  },frequency);
},5000);