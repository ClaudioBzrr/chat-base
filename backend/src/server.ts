import Express from 'express';
import { Server, Socket } from 'socket.io';
import 'dotenv/config';
import { createServer } from 'http';

const port = String(process.env.SERVER_PORT) || String(process.env.PORT);
const app = Express();
const server = createServer(app);
const io = new Server(server);

server.listen(port, () => console.log(`Server running on port ${port}`));
io.on('connection', (socket: Socket) =>
  console.log(`New connection : ${socket.id}`),
);
