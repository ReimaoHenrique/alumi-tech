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
        source: '/projects',
        destination: '/pages/projects',
      },
    ];
  },
};

export default nextConfig;
