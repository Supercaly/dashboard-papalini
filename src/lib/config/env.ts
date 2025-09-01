import { env } from "$env/dynamic/public";

export const picker_start_date: Date = (env.PUBLIC_PICKER_START_DATE !== undefined) ? new Date(env.PUBLIC_PICKER_START_DATE) : new Date()

