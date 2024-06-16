import fs from 'fs/promises';
import path from 'path';

const readMessageJSONFile = async (): Promise<Record<string, string[]> | null> => {
    try {
        const filePath = path.resolve(__dirname, "../data/messageResponses.json");

        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const messageGenerators = async (type: string): Promise<string[] | undefined> => {
    const messages = await readMessageJSONFile();
    return messages ? messages[type] : undefined;
}
