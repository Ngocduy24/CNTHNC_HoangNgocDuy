const http = require('http');

const server = http.createServer((req, res) => {
  // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/html
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Gửi nội dung HTML về trình duyệt
  res.end('<html><body><h1>Nguyen Xuan Duy</h1></body></html>');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
