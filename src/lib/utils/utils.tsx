export const normalizeImagePath = (path?: string) => {
    if (!path) return "/temporary_preview.jpg";
    if (path.startsWith("/")) return path;
    if (path.startsWith("./")) return path.replace(/^\./, "");
    return `/${path}`;
};

export const mapWidgetURL: Record<string, string> = {
    "appartamento-trastevere": "https://bnbforms.com/103496/accommodation/appartamento-trastevere/",
    "spanish-steps-apartment-terrace": "https://bnbforms.com/103496/accommodation/spanish-steps-apartment-terrace/",
    "trastevere-experience": "https://bnbforms.com/103496/accommodation/trastevere-experience/",
    "pretty-vatican-house": "https://bnbforms.com/103496/accommodation/pretty-vatican-house/",
    "generic": "https://bnbforms.com/103496/"
};