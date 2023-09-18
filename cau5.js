const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Lấy thông tin về URL từ yêu cầu
  const parsedUrl = url.parse(req.url, true);

  // Lấy tham số và giá trị từ URL
  const queryParams = parsedUrl.query;

  // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Gửi các tham số và giá trị về trình duyệt
  res.end(`tham so : ${JSON.stringify(queryParams)}`);
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
