import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after a few seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className={`w-20 h-1.5 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:hamikaredrowthu@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                      hamikaredrowthu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+917569699442" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                      +91-7569699442
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Location</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="http://www.linkedin.com/in/hamikaredrowthu" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white' 
                        : 'bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white'
                    } transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Hami-611" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white' 
                        : 'bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white'
                    } transition-colors`}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              {submitted ? (
                <div className={`p-4 rounded-md ${darkMode ? 'bg-green-800/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="mt-1 text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md ${
                          darkMode 
                            ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                            : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                        } border focus:outline-none focus:ring-1 ${
                          darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'
                        }`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md ${
                          darkMode 
                            ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                            : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                        } border focus:outline-none focus:ring-1 ${
                          darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'
                        }`}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md ${
                        darkMode 
                          ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:outline-none focus:ring-1 ${
                        darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'
                      }`}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md ${
                        darkMode 
                          ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:outline-none focus:ring-1 ${
                        darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'
                      }`}
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`px-6 py-3 rounded-md flex items-center justify-center ${
                      darkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    } transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;