const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Đọc nội dung của trang web khác (ví dụ: index.html)
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      // Xử lý lỗi nếu không thể đọc file
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Loi may chu');
    } else {
      // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/html
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // Gửi nội dung của trang web khác về trình duyệt
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
