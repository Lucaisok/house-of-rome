export const normalizeImagePath = (path?: string) => {
    if (!path) return "/temporary_preview.jpg";
    if (path.startsWith("/")) return path;
    if (path.startsWith("./")) return path.replace(/^\./, "");
    return `/${path}`;
};