const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  rewrites: () => {
    return [
      {
        source: "/api/:path*/",
        destination: "https://sadriddin.pythonanywhere.com/api/:path*/",
      },
    ];
  },
};

module.exports = nextConfig;
