import Card from "@/app/components/card";


export default function Projetos() {
    return ( 
    <>
    <h2 className=" mt-22 flex justify-center z-10"> qualquer coisa </h2>
    <div className="flex flex-wrap justify-center items-center min-h-screen mt-12">
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center">
        <Card text="Este é um exemplo de texto abaixo da imagem."img='/images/fff (1).png' />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center">
        <Card text="Este é um exemplo de texto abaixo da imagem. 2" img='/images/300-blue.png'/>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center">
        <Card text="Este é um exemplo de texto abaixo da imagem. 3" img='/images/fff (2).png' />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center">
        <Card text="Este é um exemplo de texto abaixo da imagem. 4" img='/images/fff.png' />
      </div>
    </div>
    </>
    );
  }
  