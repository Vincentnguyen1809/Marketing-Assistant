import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants.js';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

export const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'model',
      text: 'Hello! I am the Virtual Strategist for your Life Insurance marketing. Ask me how we generate high-intent leads for IUL, Term Life, or Annuities.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage.text });
      const responseText = result.text;

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I apologize, I'm having trouble connecting to the strategy database. Please try again."
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "The system is currently experiencing high traffic. Please use the Contact form to reach our senior consultants directly.",
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> AI Strategy Consultant
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Talk to Our Virtual Strategist</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Curious about our "Zero to Million" framework? Ask the AI how we handle compliance, targeting, or specific products like Kid IUL.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 flex items-center gap-4 border-b border-slate-800">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Marketing Strategist AI</h3>
              <p className="text-amber-400 text-xs flex items-center gap-1 font-medium uppercase tracking-wide">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                System Online
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 no-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === 'user' ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5 text-slate-600" /> : <Bot className="w-5 h-5 text-amber-500" />}
                </div>
                
                <div className={`max-w-[80%] rounded-2xl p-5 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-amber-500 text-white rounded-tr-none' 
                    : msg.isError 
                      ? 'bg-red-50 text-red-600 border border-red-200 rounded-tl-none' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-amber-500" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                  <span className="text-slate-500 text-sm font-medium">Analyzing market data...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-3 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: What is your strategy for High Net Worth IUL clients?"
                className="w-full pl-5 pr-12 py-4 bg-slate-100 border-transparent focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 rounded-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-3 uppercase tracking-wider">
              AI Powered by Gemini • Specialized for Life Insurance Inquiries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};