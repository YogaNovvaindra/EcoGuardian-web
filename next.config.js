/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    // webpack: (config) => {
    //   config.externals.push("everything-json");

    return config;
  },
  env: {
    TZ: 'Asia/Jakarta', // Use the IANA time zone identifier for UTC+7
  },
};

module.exports = nextConfig;
