import { io } from "socket.io-client";
import { ipAddress } from "../config";

const socket = io.connect(`http://${ipAddress}:3000`);

export default socket;
