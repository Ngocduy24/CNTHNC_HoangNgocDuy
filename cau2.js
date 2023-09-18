const http = require('http');
const { format } = require('date-fns');
const { vi } = require('date-fns/locale');

const server = http.createServer((req, res) => {
  const now = new Date();
  const formattedDate = format(now, 'dd-MM-yyyy', { locale: vi });
  const formattedTime = format(now, 'HH:mm:ss');

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Ngày tháng năm: ${formattedDate}\nThời gian: ${formattedTime}\n`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
