"use client";
import { Send } from 'lucide-react';
import styles from './Form.module.css';
import { siteContent } from '@/content/global';
import { LocaleProp } from '@/app/(site)/[lang]/page';
import { useState } from 'react';
import { FORMSPREE_ENDPOINT } from './formspree';

export const Form = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.form;
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Clear status and error on focus
    const handleFocus = () => {
        if (status !== 'idle') {
            setStatus('idle');
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setError(null);
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setError(data?.error || 'Something went wrong.');
            }
        } catch (err: any) {
            setStatus('error');
            setError(err?.message || 'Something went wrong.');
        }
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>{t.title}</h2>
                {status === 'success' && (
                    <div className={styles.success}>{t.success}</div>
                )}
                {status === 'error' && (
                    <div className={styles.error}>{error || t.error}</div>
                )}
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <div>
                        <label htmlFor="name" className={styles.label}>
                            {t.nameLabel} *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder={t.nameLabel}
                            disabled={status === 'submitting'}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={styles.label}>
                            {t.emailLabel} *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="your@email.com"
                            disabled={status === 'submitting'}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className={styles.label}>
                            {t.phoneLabel}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="+39 06 1234 5678"
                            disabled={status === 'submitting'}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={styles.label}>
                            {t.messageLabel} *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={styles.textarea}
                            placeholder={t.messagePlaceholder}
                            disabled={status === 'submitting'}
                            onFocus={handleFocus}
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={status === 'submitting'}
                    >
                        <span>{status === 'submitting' ? 'Sending...' : t.submitButton}</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};