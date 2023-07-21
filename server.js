const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('客户端已连接');

  // 监听网页源码变化事件
  fs.watch('index.html', function(eventType, filename) {
    if (eventType === 'change' && filename === 'index.html') {
      fs.readFile('index.html', 'utf8', function(err, data) {
        if (err) {
          console.error('读取文件出错:', err);
        } else {
          console.log('源码已更新');
          // 发送更新的源码给客户端
          ws.send(data);
        }
      });
    }
  });

  ws.on('close', function() {
    console.log('客户端已断开连接');
  });

});
wss.on('error', function(error) {
    console.log(error)
})

console.log('WebSocket 服务器已启动，监听端口 8080');
