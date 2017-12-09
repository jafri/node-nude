// var nude = require('../nude'),
//   images = [
//     { id: 1, expected: false },
//     { id: 2, expected: false },
//     { id: 3, expected: false },
//     { id: 4, expected: true }
//   ];

// images.forEach(function(image) {
//   nude.scan(__dirname + '/images/' + image.id + '.jpg', function(res) {
//     console.log('Image ' + image.id + ': ' + res);
//     console.log('Expected: ' + image.expected);
//   });
// });
var nude = require('../nude')
nude.scan('https://i.ytimg.com/vi/FLdK7Hatm0w/hqdefault.jpg', function(res) {
  console.log(res)
})
