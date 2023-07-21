var socket = new WebSocket("ws://10.0.0.231:8080");
// socket.onmessage = function(event) {
//     var contentElement = document.getElementById("content");
//     contentElement.innerHTML = event.data;
//     console.log(event.data)
//     location.reload();
// };

// socket.addEventListener('open', function(event) {
//     console.log('established');
// });
socket.addEventListener('message', function(event) {
    // console.log('message: ', event.data);
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = event.data;
    // console.log(event.data)
});
// socket.addEventListener('close', function(event) {
//     console.log('closed');
// })