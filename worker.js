// onmessage = function(evt){	//메시지 수신
// 	// for(var i=evt.data; i<1000000; i++){
		
//   // }
//   postMessage('khs');	//1씩 증가한 값을 호출한 곳으로 전달
// }; 

console.log('worker'); 

var _promise = function (param) {
    return new Promise(function (resolve, reject) {
        console.log('new promise start');
        resolve();
        console.log('new promise end');
    });
}

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        _promise().then(function() {
            console.log('2');
        }).then(function() {
            console.log('3');
        }).then(function() {
            console.log('4');
        }).then(function() {
            console.log('5');
        }).then(function() {
            console.log('6');
        })
    );
});

// importScripts('workerscript/1.js', 'workerscript/2.js')
// importScripts('workerscript/timeout.js', 'workerscript/2.js');
// importScripts('workerscript/3.js');
console.log('end');