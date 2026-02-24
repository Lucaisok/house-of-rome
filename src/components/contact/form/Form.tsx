"use client";
import { Send } from 'lucide-react';
import styles from './Form.module.css';
import { siteContent } from '@/content/global';
import { LocaleProp } from '@/app/(site)/[lang]/page';
import { useState } from 'react';

export const Form = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.form;
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission (currently just a placeholder)
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>{t.title}</h2>
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
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.button}
                    >
                        <span>{t.submitButton}</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};