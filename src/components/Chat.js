import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser, FaPaperPlane } from 'react-icons/fa';
import './Chat.css';
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Karan's virtual assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input field on component load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    // Store user input and clear input field
    const userInput = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
    
    // Set loading state
    setLoading(true);
    
    try {
      // Build context from previous messages to help with conversation flow
      const conversationContext = messages
        .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
        .join('\n');
      
      // Generate personalized system prompt with information about Karan
      const systemPrompt = `You are Karan's AI assistant. Karan is a developer with expertise in 
      Web Development (React, JavaScript, HTML5, CSS3, Node.js, Git) and AI/ML (Python, TensorFlow, 
      PyTorch, Data Analysis, Jupyter, Keras). If asked about Karan's skills or experience, mention 
      these areas of expertise. Be helpful, concise, and conversational. 
      projects:[low light image enhancement using Zero DCE model,
      Predicting Track Popularity Using Regression, SVM, and ANN,
      In-Process Surface Roughness Monitoring via Control Loop Feedback,
      Sequential assembly and disassembly Simulator,
      GMetriXR based survival game,
      ]
      Hobbies:[play volleyball, reading books, travelling]
      friends:[mayank , manas, manish, ketan, mehul, shivanshu, kartik, harsh, khushal,chetan,lakshay and many more]
      Certifications or achievements:[Scored AIR 6629 rank in jee advance out of 1.5 lakh students,
Scored AIR 12545 rank in jee mains out of 10 lakhs students,
participated in Physical Round(Phase 3) of eBAJA 24 organized by SAEINDIA]
Positions of Responsibility & Extra Curriculars:[Govind Bhawan Technical Council Member,Coordinator | NanoNavigator Cognizance,Member | Tinkering labs IIT Roorkee]
      lovr interest:[Renu his childhood female friend]
      Previous conversation:
      ${conversationContext}
      
      User: ${userInput}
      Assistant:`;
      
      // Make API request
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCe9E78qZUtIh815TCj3OvPLtB9iBKHyRk',
        method: 'POST',
        data: {
          "contents": [{
            "parts": [{ "text": systemPrompt }]
          }]
        }
      });
      
      // Extract response text
      const responseText = response.data.candidates[0].content.parts[0].text;
      
      // Add bot response to chat
      setMessages(prev => [...prev, { text: responseText, sender: 'bot' }]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Add error message to chat
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't generate a response. Please try again later.", 
        sender: 'bot' 
      }]);
    } finally {
      // Reset loading state
      setLoading(false);
      
      // Focus back on input field
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat with Karan's AI Assistant</h1>
        <p>Ask me anything about Karan's skills, projects, or experience</p>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-icon">
              {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-text">
              {message.text}
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {loading && (
          <div className="message bot">
            <div className="message-icon"><FaRobot /></div>
            <div className="message-text typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          disabled={loading}
          ref={inputRef}
        />
        <button 
          type="submit" 
          disabled={loading || !input.trim()}
          className={input.trim() ? 'active' : ''}
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chat;
