/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@dub/lib",
  "@dub/components",
  "@dub/tailwind",
]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@dub/lib"],
  },
  images: {
    domains: [
      "www.google.com",
      "avatar.tobi.sh",
      "faisalman.github.io",
      "avatars.dicebear.com",
      "res.cloudinary.com",
      "pbs.twimg.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
});
