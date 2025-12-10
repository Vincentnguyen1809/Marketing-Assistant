import React, { useState } from 'react';
import { useConfig } from '../../context/ConfigContext.js';
import { Shield, Lock } from 'lucide-react';
import { html } from '../../utils/html.js';

export const AdminLogin = () => {
  const { users, login } = useConfig();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username);
    
    if (username === 'admin' && password === 'admin123') {
       login(username);
       return;
    }

    if (user && password === 'staff123') {
        login(username);
        return;
    }

    setError('Invalid credentials');
  };

  return html`
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <${Shield} className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-slate-400">Restricted Access</p>
        </div>

        <form onSubmit=${handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Username</label>
            <input 
              type="text" 
              value=${username}
              onChange=${(e) => setUsername(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              value=${password}
              onChange=${(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none"
            />
          </div>

          ${error && html`<p className="text-red-500 text-sm text-center">${error}</p>`}

          <button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <${Lock} className="w-4 h-4" /> Login to Dashboard
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-600">
          Default: admin / admin123
        </div>
      </div>
    </div>
  `;
};
