/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.extensions.push(".tsx", ".ts", ".js", ".jsx");
        return config;
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
