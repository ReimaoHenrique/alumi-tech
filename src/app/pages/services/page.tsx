import Card from "@/app/components/card";
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <div className="flex justify-center items-center h-16">
        <h1>Our Services</h1>
      </div>
      
      <div className="flex flex-wrap justify-center items-center min-h-screen mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="p-4 flex flex-col justify-center items-center">
            <Link href="/services/blindex">
              <h2 className="text-xl font-bold mb-2 cursor-pointer">Tela Anti Inseto</h2>
            </Link>
            <p className="text-center mb-4 sm:hidden">Descrição sobre a tela anti inseto</p>
            <Card text="Tela anti inseto." img="/images/casa-glass-3.jpeg" link="/services/blindex" />
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <Link href="/">
              <h2 className="text-xl font-bold mb-2 cursor-pointer">Blindex</h2>
            </Link>
            <p className="text-center mb-4 sm:hidden">Descrição sobre o Blindex</p>
            <Card text="Blindex" img="/images/varal-plantas-predio.jpeg" link="/" />
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <Link href="/services/Anti-Insetos">
              <h2 className="text-xl font-bold mb-2 cursor-pointer">Varal Inteligente</h2>
            </Link>
            <p className="text-center mb-4 sm:hidden">Descrição sobre o varal inteligente</p>
            <Card text="Varal inteligente" img="/images/tela.jpeg" link="/services/Anti-Insetos" />
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <Link href="/services/blindex">
              <h2 className="text-xl font-bold mb-2 cursor-pointer">Portas e Janelas de Alumínio</h2>
            </Link>
            <p className="text-center mb-4 sm:hidden">Descrição sobre portas e janelas com estrutura de alumínio e vidro temperado</p>
            <Card text="Portas e janelas com estrutura de alumínio e vidro temperado" img="/images/banheiro-blindex.jpeg" link="/services/blindex" />
          </div>
        </div>
      </div>
    </>
  );
}
