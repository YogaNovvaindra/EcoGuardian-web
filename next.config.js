/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  env: {
    TZ: 'Asia/Jakarta', // Use the IANA time zone identifier for UTC+7
    // NEXT_PUBLIC_CHART_URL: process.env.NEXT_PUBLIC_CHART_URL,
  },
};

module.exports = nextConfig;
