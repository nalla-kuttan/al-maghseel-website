// next.config.js
const repo = 'al-maghseel-website'; // 👈 if you change the repo name, update this
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  // If you add next/image later:
  // images: { unoptimized: true },
};