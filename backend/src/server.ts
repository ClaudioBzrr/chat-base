import Express from 'express';
import 'dotenv/config';

const port = String(process.env.SERVER_PORT) || String(process.env.PORT);
const server = Express();

server.listen(port, () => console.log(`Server running on port ${port}`));
