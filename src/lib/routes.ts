export const routes = {
    home: "/",
    apartments: "/apartments",
    apartment: (slug: string) => `/apartments/${slug}`,
    about: "/about",
} as const;
