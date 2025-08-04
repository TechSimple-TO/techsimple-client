// src/pages/Contact.tsx
import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', title: '', message: ''});
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
    time: new Date().toLocaleString() // always update time
  }));
};

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    if (!form.name.trim() || !form.title.trim() || !form.message.trim()) {
      setStatus('All fields are required.');
      return;
    }

send('service_noo8zgc', 'template_jh06kpg', form, 'dguU73ebHDy5UHgzS')  
  .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', title: '', message: ''});
      })
      .catch(() => setStatus('Something went wrong. Please try again later.'));
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', height: '150px' }}
          />
        </div>
        <button type="submit" className='btn'>
          Send Message
        </button>
        {status && <p style={{ marginTop: '1rem', color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
