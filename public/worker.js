// worker测试
self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);

// this.addEventListener('message', function (e) {
//   this.postMessage('You said: ' + e.data);
// }, false);

// self.onmessage = function (e) {
//   self.postMessage('You said: ' + e.data);
// }


