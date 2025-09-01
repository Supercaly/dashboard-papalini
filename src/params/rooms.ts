import type { ParamMatcher } from '@sveltejs/kit';
import panels from '$lib/config/panels.json';

export const match = ((param: string) => {
    return panels.rooms.find((e) => e.id == param) !== undefined;
}) satisfies ParamMatcher;
