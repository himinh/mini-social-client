import { io } from 'socket.io-client';

const socketClient = io('https://awesome-minisocialnetwork.herokuapp.com');

export { socketClient };
