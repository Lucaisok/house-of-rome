export function getBaseUrl(): string {
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
