const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/home',
      destination: '/pages/home',
      },
      {
        source: '/',
      destination: '/pages/home',
      },    
      {
        source: '/about',
        destination: '/pages/about',
      },
      {
        source: '/contact',
        destination: '/pages/contact',
      },
      {
        source: '/services',
        destination: '/pages/services',
      },
      {
        source: '/services/blindex',
        destination: '/pages/services/blindex',
      },
    ];
  },
};

export default nextConfig;
