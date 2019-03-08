const server = require("http").Server();
const io = require("socket.io")(server);
const port = require("./config").SERVER_PORT;

const banner = `

***************
Basic Nodejs course
Course project
Tic tac toe server
***************
Status: Online
Lsitening on port: ${port}
`;

io.on("connection", socket => {
  socket.on("register",
    (user) => {
      console.info(`User registred: ${user.name}`);
    }
    )});

server.listen(port, () => {
  console.info(banner);
});
