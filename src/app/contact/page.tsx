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

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8">Leave a Birthday Message</h1>
        
        <div className="prose mx-auto mb-8">
          <p>
            Help us celebrate Pastor Edward A. Robson&apos;s 90th birthday by sharing your thoughts,
            memories, or birthday wishes. Your message will be displayed on this site after
            moderation.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Email (optional)</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Birthday Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="alert alert-success mt-4">
                  Thank you for your message! It will be displayed after moderation.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error mt-4">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Display approved messages */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif mb-8">Birthday Messages</h2>
          <div className="space-y-4">
            {/* This would be populated from the database in production */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <p className="text-lg mb-2">
                  Thank you for your decades of faithful service and for sharing the beauty of God&apos;s Word with us.
                </p>
                <p className="text-sm text-base-content/70">- John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 