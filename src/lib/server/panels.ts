import fs from 'fs';
import { env } from '$env/dynamic/private';
import type { Config } from '$lib/config';

let panels: Config | null = null

export function getPanels(): Config {
    if (panels) return panels;

    try {
        console.log('panels.ts: load from file');
        const data = JSON.parse(fs.readFileSync(env.PANELS_FILE, 'utf-8'));
        panels = data;
        return data;
    } catch(e) {
        console.log(`panels.ts: got error: ${e}`)
        return { "baseUrl": '', "rooms": [] };
    }
}