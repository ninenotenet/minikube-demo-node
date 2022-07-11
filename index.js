const http = require('http');
const host = '0.0.0.0'
const port = 8080;
const htmlContent = `
<html>
<head>
<title>Sample node server using native http module</title>
<style>
h1 {
  padding: 2rem;
  background-color: #4B7F52;
  color: #96E8BC;
  border:1px solid #bbb;
  text-align: center;
}
</style>
</head>
<body>
  <h1>Sample node http server V3</h1>
</body>
</html>
`;

const requestListener = (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.writeHead(200);
  res.end(htmlContent);
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on on http://${host}:${port}`);
});
