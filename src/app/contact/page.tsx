'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // This would connect to an API endpoint in production
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sample messages for demonstration
  const sampleMessages = [
    {
      id: 1,
      message: "Thank you for your decades of faithful service and for sharing the beauty of God's Word with us. Your discovery of the Two-Kai patterns has opened new doors of understanding.",
      author: "John Smith",
      date: "May 20, 2025"
    },
    {
      id: 2,
      message: "Happy 90th Birthday, Pastor Robson! Your scholarly work and dedication to Scripture study has been an inspiration to so many of us in ministry.",
      author: "Rev. Sarah Johnson",
      date: "May 18, 2025"
    },
    {
      id: 3,
      message: "Wishing you God's richest blessings on your special day. Your research into Revelation's structure has deepened my appreciation for the Word.",
      author: "Michael Chen",
      date: "May 15, 2025"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary-focus to-secondary text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Leave a Birthday Message
          </h1>
          <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Help us celebrate Pastor Edward A. Robson&apos;s 90th birthday by sharing your thoughts, 
            memories, or birthday wishes. Your message will be displayed on this site after moderation.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Message Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">
                Share Your Message
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Your Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-lg focus:input-primary transition-colors"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Your Email</span>
                    <span className="label-text-alt text-gray-500">Optional</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered input-lg focus:input-primary transition-colors"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">Your Birthday Message *</span>
                </label>
                <textarea
                  className="textarea textarea-bordered textarea-lg h-32 focus:textarea-primary transition-colors resize-none w-full"
                  placeholder="Share your birthday wishes, memories, or thoughts about Pastor Robson's ministry and scholarship..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500">
                    Your message will be reviewed before appearing on the site
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`btn btn-primary btn-lg w-full text-lg ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Birthday Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="alert alert-success shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">Message Sent Successfully!</h3>
                    <div className="text-xs">Thank you for your birthday wishes. Your message will appear after moderation.</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">Error Sending Message</h3>
                    <div className="text-xs">Sorry, there was a problem. Please try again.</div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Birthday Messages Section */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
              Birthday Messages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Heartfelt messages from friends, family, and fellow scholars celebrating 
              Pastor Robson&apos;s incredible 90-year journey of faith and discovery.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid gap-6">
            {sampleMessages.map(msg => (
              <div key={msg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                      &ldquo;{msg.message}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <cite className="font-semibold text-primary">&mdash; {msg.author}</cite>
                      <span className="text-sm text-gray-500">{msg.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Messages */}
          <div className="text-center mt-12">
            <button className="btn btn-outline btn-primary btn-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Load More Messages
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">
              Spread the Word
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Help us make Pastor Robson&apos;s 90th birthday celebration even more special by 
              sharing this page with others who know him.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary btn-outline">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Share on Twitter
              </button>
              <button className="btn btn-primary btn-outline">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share on Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}