export function getBaseUrl(): string {
    // Use environment variable if set (must be NEXT_PUBLIC_ prefix)
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.NODE_ENV === 'production') {
        return 'https://houseofrome.org';
    }
    return 'http://localhost:3000';
}

export function getFullUrl(path: string): string {
    const baseUrl = getBaseUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}
