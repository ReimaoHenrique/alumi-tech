import { NextPage } from 'next';
import Carousel from '@/app/components/carousel-motion';
const Home: NextPage = () => {
  const carouselItems = [
    {
      text: 'Texto 1',
      image: '/images/background-silver.png',
    },
    {
      text: 'isso é um alumínio',
      image: '/images/background-silver-alternative.png',
    },
    {
      text: 'Texto 3',
      image: '/images/cnc.png',
    },
  ];

  return (
    <>
      <Carousel items={carouselItems} />
      <div className=' flex justify-center items-center h-screen bg-gray-200'>

      <h2 className='mt-11' >Soluções Inovadorasem alumínio</h2>
      </div> 
     </>
  );
};

export default Home;