import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

const ALLOWED_EXTENSIONS = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png"]);

export async function getPublicImagePaths(directory: string): Promise<string[]> {
    const absoluteDirectory = path.join(process.cwd(), "public", directory);

    try {
        const entries = await fs.readdir(absoluteDirectory, { withFileTypes: true });

        return entries
            .filter((entry) => entry.isFile())
            .map((entry) => entry.name)
            .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
            .map((fileName) => `/${directory}/${fileName}`);
    } catch {
        return [];
    }
}
