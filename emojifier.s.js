function emojify (data, hideWords) {
  var charMap = require('./charMap.s.js')();
  var list = [];
  for (prop in charMap) {
    if (charMap.hasOwnProperty(prop)) {
      charMap[prop].forEach(function (string) {
        if (string) {
		  list.push(prop + '||' + string);
		  }
		});
	  }
	}
  list.sort(function (a, b) {
	return b.slice('||').length - a.slice('||').length; // ASC -> a - b; DESC -> b - a
  });
  list.forEach(function (item) {
    item = item.split('||');
    var string = item[1];
    var prop = item[0];
    var replacer = new RegExp(string, 'gi');
    data = data.replace(replacer, prop);
  });

  while (true) {
	if (data.indexOf('  ') !== -1){
      data = data.replace(/  /g, ' ');
    } else {
      break;
    }
  }
  return data;
}