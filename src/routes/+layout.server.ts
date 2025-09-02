import type { LayoutServerLoad } from './$types';
import { getPanels } from "$lib/server/panels";

export const load: LayoutServerLoad = async () => {
    const config = getPanels();
    return config;
};