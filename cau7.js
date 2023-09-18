const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Lấy thông tin về URL từ yêu cầu
  const parsedUrl = url.parse(req.url, true);

  // Lấy host, pathname và search từ URL
  const host = req.headers.host;
  const pathname = parsedUrl.pathname;
  const search = parsedUrl.search;

  // Hiển thị thông tin trong Terminal
  console.log(`Host: ${host}`);
  console.log(`Pathname: ${pathname}`);
  console.log(`Search: ${search}`);

  // Thiết lập mã trạng thái 200 (OK) và kiểu nội dung text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Gửi nội dung trả về với thông tin host, pathname và search
  res.end(`Host: ${host}\nPathname: ${pathname}\nSearch: ${search}`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
