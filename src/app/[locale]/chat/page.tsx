'use client';
import { Button } from '#/components/ui/button';
import { CardContent } from '#/components/ui/card';
import { Input } from '#/components/ui/input';
import { animations } from '#/constants/framer-motion/variants';
import { AnimatePresence, motion } from 'framer-motion';
import { User2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', { autoConnect: false });

const Page = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const [typing, setTyping] = useState('');
  const [typingUsers, setTypingUsers] = useState<any>({});
  const [userBubbles, setUserBubbles] = useState<{
    [key: string]: string | null;
  }>({});
  useEffect(() => {
    socket.connect();

    socket.on('message', (message) => {
      //   setMessages((prevMessages) => [...prevMessages, message]);

      // Show the bubble for the specific user
      setUserBubbles((prevBubbles) => ({
        ...prevBubbles,
        [message.name]: message.text,
      }));

      // Hide the bubble after 2 seconds
      setTimeout(() => {
        setUserBubbles((prevBubbles) => ({
          ...prevBubbles,
          [message.name]: null,
        }));
      }, 2000);
    });

    socket.on('join', (data) => {
      console.log('🚀 ~ useEffect ~ data:', data);
      return setAllUsers(data);
    });
    socket.on('emote', (data) => {
        
    });
    socket.on('leave', (data) => setAllUsers(data));

    socket.on('typing', ({ userName, isTyping }) => {
      setTypingUsers((prev) => ({
        ...prev,
        [userName]: isTyping,
      }));
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const join = () => {
    socket.emit('join', { name }, (data) => {
      setAllUsers(data);
    });
    setJoined(true);
  };

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('createMessage', { text: input, name });
      setInput('');
    }
  };

  const handleUserClick = () => {};
  return (
    <div>
      {!joined ? (
        <div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[-50%] gap-3">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Button variant={'default'} onClick={join}>
            Join
          </Button>
        </div>
      ) : (
        <motion.div
          layout
          className="flex-center flex h-screen w-full flex-col gap-4 p-4"
        >
          <motion.div
            layout
            className="flex gap-2 rounded-md bg-slate-400 px-4 py-2"
          >
            <AnimatePresence mode="popLayout">
              {allUsers.map((user) => (
                <motion.div
                  layout="position"
                  key={user}
                  {...animations.popInOut}
                >
                  <Button
                    variant={'default'}
                    className="relative"
                    onClick={handleUserClick}
                  >
                    <User2Icon />
                    {user}
                    {typingUsers[user] && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-2 border-dashed border-slate-500 px-2 py-1 text-[4px] text-slate-800">
                        Typing...
                      </div>
                    )}
                    <AnimatePresence>
                      {userBubbles[user] && (
                        <motion.div
                          {...animations.popInOut}
                          transition={{}}
                          style={{
                            transformOrigin: 'bottom center', // Set the transform origin here
                          }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-blue-500 px-3 py-1 text-white shadow-lg"
                        >
                          {userBubbles[user]}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {/* <div>
            {messages.map((msg, idx) => (
              <p key={idx}>
                {msg.name}: {msg.text}
              </p>
            ))}
          </div> */}
          <div className="right- flex-center fixed bottom-10 w-full gap-3 rounded-md">
            <CardContent className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  socket.emit('typing', { isTyping: true });
                }}
                onBlur={() => socket.emit('typing', { typing: false })}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button variant={'default'} onClick={sendMessage}>
                Send
              </Button>
            </CardContent>
          </div>{' '}
        </motion.div>
      )}
    </div>
  );
};

export default Page;
