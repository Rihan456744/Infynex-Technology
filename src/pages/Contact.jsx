import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const send = (e) => {
    e.preventDefault();
    const text = `Hi Infynex — Name: ${form.name}, Msg: ${form.message}`;
    window.open(`https://api.whatsapp.com/send?phone=919967904671&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="container page-section" style={{ marginTop: '80px' }}>
      <h2>Let's Build</h2>
      <p>Start a conversation. We reply fastest on WhatsApp.</p>

      <form onSubmit={send} className="input-group">
        <input 
          className="input-field" 
          placeholder="Your Name" 
          required 
          value={form.name} 
          onChange={e => setForm({...form, name: e.target.value})} 
        />
        <input 
          className="input-field" 
          placeholder="Phone Number" 
          required 
          value={form.phone} 
          onChange={e => setForm({...form, phone: e.target.value})} 
        />
        <textarea 
          className="input-field" 
          placeholder="Tell us about your project..." 
          rows={5} 
          required 
          value={form.message} 
          onChange={e => setForm({...form, message: e.target.value})} 
        />
        <button className="btn-primary" type="submit">Send Message</button>
      </form>
    </div>
  );
}