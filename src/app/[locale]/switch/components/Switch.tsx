'use client';
import { Button } from '#/components/ui/button';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Adjust URL for your backend

const SwitchComponent: React.FC = () => {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    // Listen for switch state updates
    socket.on('switchStateUpdated', (data: { state: boolean }) => {
      setSwitchState(data.state);
    });

    // Request the current state on component mount
    socket.emit('getSwitchState', null, (state: boolean) => {
      setSwitchState(state);
    });

    return () => {
      socket.off('switchStateUpdated');
    };
  }, []);

  const toggleSwitch = () => {
    socket.emit('toggleSwitch');
  };

  return (
    <div>
      <h1>Switch State: {switchState ? 'ON' : 'OFF'}</h1>
      <Button onClick={toggleSwitch}>
        {switchState ? 'Turn OFF' : 'Turn ON'}
      </Button>
    </div>
  );
};

export default SwitchComponent;
