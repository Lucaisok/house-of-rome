export const routes = {
    home: "/",
    apartments: "/apartments",
    apartment: (slug: string) => `/apartments/${slug}`,
    contacts: "/contacts",
    privacyPolicy: "/privacy-policy",
} as const;
