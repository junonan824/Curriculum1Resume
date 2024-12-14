'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './page.module.css';

// Expanded form input types
interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  feedbackType: 'general' | 'bug' | 'feature' | 'design';
  userExperience: number;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // React Hook Form setup
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  // Form submission handler
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    // Enhanced logging with feedback details
    console.log('Feedback Submitted:', {
      ...data,
      submissionTime: new Date().toISOString(),
      browserInfo: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
      }
    });

    // Simulate feedback submission
    setSubmitted(true);
    reset();
  };

  // Render submitted state
  if (submitted) {
    return (
      <div className={styles.contactContainer}>
        <div className={styles.successMessage}>
          <h2>Thank You for Your Feedback!</h2>
          <p>Your input helps us improve the website.</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className={styles.resetButton}
          >
            Submit Another Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contactContainer}>
      <h1>Website Feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        {/* Name Input */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 50, message: 'Name must not exceed 50 characters' }
            })}
            className={errors.name ? styles.inputError : ''}
          />
          {errors.name && (
            <span className={styles.errorMessage}>
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && (
            <span className={styles.errorMessage}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Feedback Type Dropdown */}
        <div className={styles.formGroup}>
          <label htmlFor="feedbackType">Feedback Type</label>
          <select
            id="feedbackType"
            {...register('feedbackType', { required: 'Please select a feedback type' })}
            className={errors.feedbackType ? styles.inputError : ''}
          >
            <option value="">Select Feedback Type</option>
            <option value="general">General Feedback</option>
            <option value="bug">Report a Bug</option>
            <option value="feature">Feature Request</option>
            <option value="design">Design Suggestion</option>
          </select>
          {errors.feedbackType && (
            <span className={styles.errorMessage}>
              {errors.feedbackType.message}
            </span>
          )}
        </div>

        {/* User Experience Rating */}
        <div className={styles.formGroup}>
          <label>Overall Website Experience</label>
          <div className={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className={styles.ratingLabel}>
                <input
                  type="radio"
                  value={rating}
                  {...register('userExperience', { 
                    required: 'Please rate your experience' 
                  })}
                  className={styles.ratingInput}
                />
                <span className={styles.ratingIcon}>
                  {rating} ⭐
                </span>
              </label>
            ))}
          </div>
          {errors.userExperience && (
            <span className={styles.errorMessage}>
              {errors.userExperience.message}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div className={styles.formGroup}>
          <label htmlFor="message">Detailed Feedback</label>
          <textarea
            id="message"
            {...register('message', { 
              required: 'Please provide your feedback',
              minLength: { value: 10, message: 'Feedback must be at least 10 characters' },
              maxLength: { value: 500, message: 'Feedback must not exceed 500 characters' }
            })}
            className={errors.message ? styles.inputError : ''}
            placeholder="Share your thoughts, suggestions, or issues..."
          ></textarea>
          {errors.message && (
            <span className={styles.errorMessage}>
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={styles.submitButton}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
} 