import React, { Fragment, useEffect, useState } from 'react';
import { playablechars } from './pc';
// import SocketService from './socket';
import { io } from 'socket.io-client';
import { SERVERLINK } from './serverConst';

import { Field } from './view/field/field';
import { Player } from './view/player/player';

export const App = () => {
  const [socket] = useState(io(SERVERLINK, { autoConnect: false }));
  const [socketState, setSocketState] = useState(false);

  const Connect = () => {
    socket.connect();
  };

  const Disconect = () => {
    socket.disconnect();
  };

  const SendMSG = () => {
    socket.emit('send-message');
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect');
      setSocketState(true);
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
      setSocketState(false);
      socket.disconnect();
    });
    socket.on('recive-msg', () => {
      console.log('message recived');
    });
  }, []);

  return (
    <Fragment>
      <Field />
      <Player 
        name = {playablechars[1].name} 
        description = {playablechars[1].description} 
        gameAbility = {playablechars[1].gameAbility.find(abilityList => abilityList.id === 3)!.description}
      />
      <div className={socketState !== undefined ? 'green' : 'red'}>
        Connection {String(socketState)}
      </div>
      <div>
        <button onClick={() => Connect()}>Connect</button>
        <button onClick={() => Disconect()}>Disconect</button>
        <button
          onClick={() => {
            console.log(socket.id);
          }}
        >
          Get session id
        </button>
      </div>
      <div>
        <button onClick={() => SendMSG()}>Send msg</button>
      </div>
    </Fragment>
  );
};
