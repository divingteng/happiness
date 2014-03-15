var uid = (function(){
  var id = 0;
  return function() {
    return id++;
  }
}());

// color
var bg = '#D7E6F3';
var fg = '#1573BA';
// size
var max = 213;
var width = 3;
var gap = 5;


var config = [
  {
    name: 'China',
    per: 71,
    per2: 68,
    text: '中国'
  }, {
    name: 'India',
    per: 58,
    per2: 60,
    text: '印度'
  }, {
    name: 'Turkey',
    per: 57,
    per2: 53,
    text: '土耳其'
  }, {
    name: 'Brazil',
    per: 48,
    per2: 44,
    text: '巴西'
  }, {
    name: 'Korea',
    per: 45,
    per2: 52,
    text: '韩国'
  }, {
    name: 'Poland',
    per: 39,
    per2: 42,
    text: '波兰'
  }, {
    name: 'Average',
    per: 34,
    per2: 46,
    text: '全球平均'
  }, {
    name: 'France',
    per: 34,
    per2: 33,
    text: '法国'
  }, {
    name: 'SouthAfrica',
    per: 33,
    per2: 66,
    text: '南非'
  }, {
    name: 'Russia',
    per: 32,
    per2: 66,
    text: '俄罗斯'
  }, {
    name: 'Argentina',
    per: 29,
    per2: 49,
    text: '阿根廷'
  }, {
    name: 'Belgium',
    per: 28,
    per2: 36,
    text: '比利时'
  }, {
    name: 'Germany',
    per: 27,
    per2: 40,
    text: '德国'
  }, {
    name: 'Australia',
    per: 24,
    per2: 40,
    text: '澳大利亚'
  }, {
    name: 'Japan',
    per: 22,
    per2: 29,
    text: '日本'
  }, {
    name: 'Italy',
    per: 22,
    per2: 25,
    text: '意大利'
  }, {
    name: 'US',
    per: 21,
    per2: 46,
    text: '美国'
  }, {
    name: 'Canada',
    per: 20,
    per2: 49,
    text: '加拿大'
  }, {
    name: 'Britain',
    per: 16,
    per2: 39,
    text: '英国'
  }, {
    name: 'Spain',
    per: 15,
    per2: 42,
    text: '西班牙'
  }, {
    name: 'Sweden',
    per: 10,
    per2: 26,
    text: '瑞典'
  }
];

var left, right;
left = config.sort(function(a, b) {
  return b.per - a.per;
}).slice();

right = config.sort(function(a, b) {
  return b.per2 - a.per2;
}).slice();

var mode, container, radius, colors;

mode = true; // left mode
container = document.getElementById('own');
colors = ['#D7E6F3', '#1573BA'];
radius = max;
left.forEach(createCircle);

mode = false; // right mode
colors = ['#D7E6F3', '#FD940F'];
container = document.getElementById('press');
radius = max;
right.forEach(createCircle);

function createDiv(id) {
  var div;
  div = document.createElement('div');
  div.id = id;
  div.className = 'circle';
  container.appendChild(div);
  return div;
}

function createCircle(option, index, arr) {
  var id = uid();

  option.id = id;
  option.percentage = mode ? option.per : option.per2;
  option.number = option.percentage;
  option.radius = radius;
  option.width = width;
  option.colors = colors;
  option.duration = 1000;

  div = createDiv(option.id);
  $(div).css('margin', max - radius);
  option.div = div;

  option.circle = Circles.create(option)

  // aligin text
  $('.circles-text-wrp', div).css('margin-left', 200 - (max - radius));
  $('.circles-number', div).css('color', colors[1]);

  // handle click event
  $('.circles-text, .circles-number', div).click(function(event) {
    var circle = $(this).parent().parent().parent();
    var container = circle.parent();
    var exclude = $('path:nth-child(2)', circle);
    $('svg path:nth-child(2)', container).css('stroke-opacity', '0.5');
    exclude.css('stroke-opacity', '1');
    event.stopPropagation();
  });

  // average color
  if (option.name === 'Average') {
    $('.circles-number, .circles-text', div).css('color', '#FF7BAC');
    $('path:nth-child(2)', div).css('stroke', '#FF7BAC');
  }

  // calculate radius
  radius = radius - width - gap;
}

$(document).click(function() {
  $('svg path:nth-child(2)').css('stroke-opacity', '1');
});
