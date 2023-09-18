const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  // Lấy thông tin về URL từ yêu cầu
  const parsedUrl = url.parse(req.url, true);

  // Lấy tham số tên trang web từ URL
  const websiteName = parsedUrl.query.website;

  // Xác định tên tệp HTML tương ứng với tên trang web
  const filePath = `websites/${websiteName}.html`;

  // Đọc nội dung của tệp HTML
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Xử lý lỗi nếu không tìm thấy tệp HTML
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('khong tim thay trang web');
    } else {
      // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/html
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // Gửi nội dung của trang web về trình duyệt
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
