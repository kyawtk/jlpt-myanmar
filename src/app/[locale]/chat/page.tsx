'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const Page = () => {
  const [allusers, setAllUsers] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);

  const join = () => {
    socket.emit('join', { name }, (data) => {
      setAllUsers(data);
      setJoined(true);
    });
  };
  useEffect(() => {
    socket.emit('findAllMessage', {}, (data: any) => {
      setMessages(data);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });
    socket.on('join', (allusers) => {
      setAllUsers(allusers);
    });

    socket.on('leave', (allusers) => {
      setAllUsers(allusers);
    });
    const handleBeforeUnload = () => {
      socket.emit('leave', { name });
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      socket.off('message');
      socket.off('join');
      socket.off('leave');
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const sendMessage = () => {
    socket.emit('createMessage', { text: input, name }, (data: any) => {
      setInput('');
    });
  };
  if (!joined) {
    return (
      <div>
        Please enter your name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={join}>Send</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        {allusers.map((user) => (
          <p key={user}>{user}</p>
        ))}
      </div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            {msg.name} :{msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          //   socket.emit('typing', { name }, (data: any) => {});
          setInput(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Page;
