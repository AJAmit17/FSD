const http = require("http");

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
];

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/products") {
    res.writeHead(200);
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Resource not found" }));
  }
};

const server = http.createServer(requestListener);

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
