import {io} from 'socket.io-client';
import { SERVERLINK } from './const';

export default class SocketService {
  private _socket: any = {};

  constructor(private emisor_id?: string) {
    this._socket = io(SERVERLINK, {autoConnect: false});
  }

  public disconnect (): void {
    this._socket.disconnect();
  }

  public connect (): void {
    this._socket.connect();
  }

  public getID (): string {
    return this._socket.id;
  }

  public connectionState(){
    this._socket.on('connect',()=>{
      console.log('test con');
    });
    this._socket.on('disconnect',()=>{
      console.log('test disc');
    });
  }
}