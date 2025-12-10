import React, { useState } from 'react';
import { useConfig } from '../../context/ConfigContext.js';
import { Save, LogOut, Users, Layout, Image, Type, RotateCcw, Plus, Trash2 } from 'lucide-react';

export const AdminDashboard = () => {
  const { config, updateConfig, resetConfig, currentUser, logout, users, addUser, removeUser } = useConfig();
  const [activeTab, setActiveTab] = useState('general');
  const [tempConfig, setTempConfig] = useState(config);

  const handleSave = () => {
    updateConfig(tempConfig);
    alert('Configuration Saved Successfully!');
  };

  const handleChange = (section, field, value) => {
    setTempConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Helper for array manipulation
  const handleArrayChange = (arrayName, index, field, value) => {
    setTempConfig(prev => {
      const newArray = [...prev[arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [arrayName]: newArray };
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6 flex flex-col h-screen sticky top-0">
        <div className="text-xl font-bold mb-10 text-amber-500">Admin CMS</div>
        
        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setActiveTab('general')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'general' ? 'bg-amber-500 text-slate-900 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Layout className="w-5 h-5" /> General & Colors
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'content' ? 'bg-amber-500 text-slate-900 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Type className="w-5 h-5" /> Content & Data
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'media' ? 'bg-amber-500 text-slate-900 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Image className="w-5 h-5" /> Media & Video
          </button>
          {currentUser?.role === 'super_admin' && (
            <button 
              onClick={() => setActiveTab('staff')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'staff' ? 'bg-amber-500 text-slate-900 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <Users className="w-5 h-5" /> Staff Management
            </button>
          )}
        </nav>

        <div className="border-t border-slate-800 pt-6 space-y-3">
          <div className="text-xs text-slate-500">Logged in as: {currentUser?.username}</div>
          <button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded flex items-center justify-center gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </button>
          <button onClick={logout} className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" /> Logout
          </button>
          <button onClick={() => {if(confirm('Reset all content to default?')) resetConfig()}} className="w-full text-red-500 text-xs py-2 hover:underline flex items-center justify-center gap-1">
            <RotateCcw className="w-3 h-3" /> Reset Defaults
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-y-auto h-screen">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 capitalize">{activeTab} Settings</h2>

        {/* GENERAL TAB */}
        {activeTab === 'general' && (
          <div className="space-y-8 max-w-4xl">
            <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
              <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Theme Colors</h3>
              <div className="flex items-center gap-4">
                <label className="font-medium text-slate-600">Primary Color (Hex):</label>
                <input 
                  type="color" 
                  value={tempConfig.theme.primaryColor}
                  onChange={(e) => handleChange('theme', 'primaryColor', e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer"
                />
                <input 
                  type="text"
                  value={tempConfig.theme.primaryColor}
                  onChange={(e) => handleChange('theme', 'primaryColor', e.target.value)}
                  className="border p-2 rounded"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
              <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Company Info</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Company Name</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.companyInfo.name} onChange={(e) => handleChange('companyInfo', 'name', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Public Email</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.companyInfo.email} onChange={(e) => handleChange('companyInfo', 'email', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Phone</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.companyInfo.phone} onChange={(e) => handleChange('companyInfo', 'phone', e.target.value)} />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Address</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.companyInfo.address} onChange={(e) => handleChange('companyInfo', 'address', e.target.value)} />
                </div>
                 <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-600 mb-1">Notification Email (Receive Leads)</label>
                  <input type="text" className="w-full border p-2 rounded bg-amber-50" value={tempConfig.companyInfo.notificationEmail} onChange={(e) => handleChange('companyInfo', 'notificationEmail', e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT TAB */}
        {activeTab === 'content' && (
          <div className="space-y-8 max-w-4xl">
             <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
              <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Hero Section</h3>
              <div className="space-y-4">
                 <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Top Badge Text</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.hero.badge} onChange={(e) => handleChange('hero', 'badge', e.target.value)} />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Title Line 1</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.hero.titleLine1} onChange={(e) => handleChange('hero', 'titleLine1', e.target.value)} />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Title Line 2 (Highlighted)</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.hero.titleLine2} onChange={(e) => handleChange('hero', 'titleLine2', e.target.value)} />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Description</label>
                  <textarea className="w-full border p-2 rounded h-24" value={tempConfig.hero.description} onChange={(e) => handleChange('hero', 'description', e.target.value)} />
                </div>
              </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
                <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tempConfig.metrics.map((metric, idx) => (
                    <div key={idx} className="border p-4 rounded bg-slate-50">
                      <label className="text-xs font-bold uppercase block mb-1">Metric {idx + 1}</label>
                      <input type="text" className="w-full border p-1 rounded mb-2 text-sm" value={metric.label} onChange={(e) => handleArrayChange('metrics', idx, 'label', e.target.value)} placeholder="Label" />
                      <div className="flex gap-2">
                        <input type="text" className="w-2/3 border p-1 rounded text-sm" value={metric.value} onChange={(e) => handleArrayChange('metrics', idx, 'value', e.target.value)} placeholder="Value" />
                        <input type="text" className="w-1/3 border p-1 rounded text-sm" value={metric.suffix} onChange={(e) => handleArrayChange('metrics', idx, 'suffix', e.target.value)} placeholder="Suffix" />
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        )}

        {/* MEDIA TAB */}
        {activeTab === 'media' && (
          <div className="space-y-8 max-w-4xl">
            <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
              <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Hero Video Thumbnail</h3>
              <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Image URL</label>
                  <input type="text" className="w-full border p-2 rounded" value={tempConfig.hero.backgroundVideoThumbnail} onChange={(e) => handleChange('hero', 'backgroundVideoThumbnail', e.target.value)} />
                  <img src={tempConfig.hero.backgroundVideoThumbnail} className="w-32 h-20 object-cover mt-2 rounded" alt="preview" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-lg text-slate-700">Video Portfolio</h3>
                <button 
                  onClick={() => setTempConfig(prev => ({...prev, videoPortfolio: [...prev.videoPortfolio, { title: "New Video", category: "Demo", thumbnail: "", duration: "0:00" }] }))}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-bold flex items-center gap-1 hover:bg-blue-200"
                >
                  <Plus className="w-3 h-3" /> Add Video
                </button>
              </div>
              
              <div className="grid gap-6">
                 {tempConfig.videoPortfolio.map((video, idx) => (
                    <div key={idx} className="flex gap-4 border p-4 rounded bg-slate-50 items-start">
                      <div className="w-24 h-24 bg-slate-200 flex-shrink-0 rounded overflow-hidden">
                        <img src={video.thumbnail || 'https://via.placeholder.com/150'} alt="thumb" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-3">
                         <input type="text" className="border p-1 rounded text-sm col-span-2" value={video.title} onChange={(e) => handleArrayChange('videoPortfolio', idx, 'title', e.target.value)} placeholder="Video Title" />
                         <input type="text" className="border p-1 rounded text-sm" value={video.category} onChange={(e) => handleArrayChange('videoPortfolio', idx, 'category', e.target.value)} placeholder="Category" />
                         <input type="text" className="border p-1 rounded text-sm" value={video.duration} onChange={(e) => handleArrayChange('videoPortfolio', idx, 'duration', e.target.value)} placeholder="Duration" />
                         <input type="text" className="border p-1 rounded text-sm col-span-2" value={video.thumbnail} onChange={(e) => handleArrayChange('videoPortfolio', idx, 'thumbnail', e.target.value)} placeholder="Thumbnail URL" />
                      </div>
                      <button 
                        onClick={() => setTempConfig(prev => ({...prev, videoPortfolio: prev.videoPortfolio.filter((_, i) => i !== idx)}))}
                        className="text-red-500 hover:bg-red-50 p-2 rounded"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        )}

        {/* STAFF TAB */}
        {activeTab === 'staff' && (
           <div className="bg-white p-6 rounded-xl shadow border border-slate-200 max-w-4xl">
              <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">Staff Management</h3>
              
              <div className="mb-6 flex gap-2">
                <input type="text" id="newStaffName" placeholder="New Username" className="border p-2 rounded flex-1" />
                <button 
                  onClick={() => {
                    const el = document.getElementById('newStaffName');
                    if(el.value) {
                      addUser({ username: el.value, role: 'staff' });
                      el.value = '';
                    }
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded font-bold"
                >
                  Add Staff
                </button>
              </div>

              <div className="space-y-2">
                {users.map((u, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded border">
                    <div>
                      <span className="font-bold text-slate-800">{u.username}</span>
                      <span className="ml-2 text-xs bg-slate-200 px-2 py-0.5 rounded uppercase text-slate-500">{u.role}</span>
                    </div>
                    {u.role !== 'super_admin' && (
                       <button onClick={() => removeUser(u.username)} className="text-red-500 text-sm hover:underline">Remove</button>
                    )}
                  </div>
                ))}
              </div>
           </div>
        )}

      </div>
    </div>
  );
};