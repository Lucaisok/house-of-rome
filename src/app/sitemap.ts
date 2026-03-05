import { MetadataRoute } from 'next';
import { apartments } from '@/content/apartments';

function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://houseofrome.org';
    }
    return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();
    const locales = ['en', 'it'];

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [];

    // Add home, apartments, contacts, privacy for both locales
    locales.forEach(locale => {
        const prefix = locale === 'en' ? '' : `/${locale}`;

        staticPages.push(
            {
                url: `${baseUrl}${prefix}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1.0,
            },
            {
                url: `${baseUrl}${prefix}/apartments`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${baseUrl}${prefix}/contacts`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            },
            {
                url: `${baseUrl}${prefix}/privacy-policy`,
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 0.3,
            },
            {
                url: `${baseUrl}${prefix}/book`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            }
        );
    });

    // Dynamic apartment pages
    const apartmentPages: MetadataRoute.Sitemap = [];

    apartments.forEach(apt => {
        locales.forEach(locale => {
            const prefix = locale === 'en' ? '' : `/${locale}`;
            apartmentPages.push({
                url: `${baseUrl}${prefix}/apartments/${apt.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        });
    });

    return [...staticPages, ...apartmentPages];
}
