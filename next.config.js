/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
		domains: ['database.co.tz', 'media-cldnry.s-nbcnews.com', '127.0.0.1'],
	}
}

module.exports = nextConfig
