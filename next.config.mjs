/** @type {import('next').NextConfig} */
const nextConfig = {
    // start from dashboard page
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
