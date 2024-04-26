import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "de"];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./${locale}.json`)).default,
}));
