import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { X, Send, Minimize2, Maximize2, Bot, User, Loader2, MapPin, Clock, AlertCircle, Palette, Code, Search } from 'lucide-react';
import '../App.css';
import blackLogo from '../assets/black.jpeg';
import whiteLogo from '../assets/white.jpeg';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi! I'm Specturn's AI assistant. I can help you with information about our web design, development, and SEO services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text, sender) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message
    addMessage(userMessage, 'user');
    setIsLoading(true);

    try {
      // Call the chatbot API
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      addMessage(data.response || "I'm sorry, I couldn't process your request. Please try again or contact us directly at specturnmedia@gmail.com", 'bot');
    } catch (error) {
      console.error('Chatbot error:', error);
      addMessage("I'm experiencing some technical difficulties. Please contact us directly at specturnmedia@gmail.com for immediate assistance.", 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => sendMessage(), 100);
  };

  const suggestedQuestions = [
    {
      text: "What web design services do you offer?",
      icon: Palette
    },
    {
      text: "How much does website development cost?",
      icon: Code
    },
    {
      text: "What are your business hours?",
      icon: Clock
    },
    {
      text: "How can I contact Specturn?",
      icon: AlertCircle
    }
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-0 overflow-hidden"
          style={{ background: 'transparent' }}
        >
          <img 
            src={blackLogo} 
            alt="Chatbot" 
            className="w-full h-full object-cover rounded-full"
          />
        </Button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? 60 : 'auto',
              maxHeight: isMinimized ? 60 : 'calc(100vh - 5rem)'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-80 lg:w-96 z-50 max-h-[calc(100vh-5rem)]"
          >
            <Card className="glass-enhanced shadow-2xl overflow-hidden">
              {/* Header */}
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={whiteLogo} 
                      alt="Specturn" 
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-sm font-clash">Specturn Assistant</CardTitle>
                      <p className="text-xs opacity-90">Online now</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="text-primary-foreground hover:bg-primary-foreground/20 p-1"
                    >
                      {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-primary-foreground hover:bg-primary-foreground/20 p-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              {!isMinimized && (
                <CardContent className="p-0">
                  <div className="h-64 md:h-80 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-start space-x-3 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                        
                        <div
                          className={`rounded-lg p-3 max-w-xs lg:max-w-md ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap font-matter">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>

                        {message.sender === 'user' && (
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start space-x-3 justify-start"
                      >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="bg-muted text-muted-foreground rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Loader2 className="h-4 w-4 animate-spin text-primary" />
                            <span className="text-sm">AI is thinking...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested Questions */}
                  {messages.length === 1 && !isLoading && (
                    <div className="p-4 border-t border-border">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">Suggested Questions</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-left p-2 h-auto justify-start hover:bg-muted/50 text-xs"
                            onClick={() => handleSuggestedQuestion(question.text)}
                          >
                            <question.icon className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{question.text}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex space-x-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={sendMessage}
                        disabled={isLoading || !inputMessage.trim()}
                        size="sm"
                        className="px-3"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Press Enter to send, or click the send button
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

