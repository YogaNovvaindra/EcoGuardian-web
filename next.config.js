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
};

module.exports = nextConfig;
