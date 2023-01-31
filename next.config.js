/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja", "ko", "zh", "zh-Hant-TW"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cms.symbol-community.com"],
  },
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
