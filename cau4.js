const http = require('http');

const server = http.createServer((req, res) => {
  // Lấy phần URL sau tên miền của yêu cầu
  const url = req.url;

  // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Gửi phần URL về trình duyệt
  res.end(`Phan URL sau ten mien: ${url}`);
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
