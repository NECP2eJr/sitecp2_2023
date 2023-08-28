import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Ps.css';
import Financeiro from '../../assets/financeiro.png';
import GestaoDePessoas from '../../assets/gestaodepessoas.png';
import Documentos from '../../assets/Documentos.png';
import Vendas from '../../assets/Vendas.png';
import Marketing from '../../assets/Marketing.png';
import Comunicacao from '../../assets/Comunicacao.png';
import Desing from '../../assets/Desing.png';
import BackEnd from '../../assets/Back-end.png';
import FrontEnd from '../../assets/Front-end.png';
import Processos from '../../assets/Processos.png';
import Marketing2 from '../../assets/Marketing2.png';
import Impulsionar from '../../assets/Impulsionar.png';


const PS = () => {
  // Utilize o React Hook useState para controlar o estado do tamanho da tela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Utilize o React Hook useEffect para atualizar o estado do tamanho da tela ao redimensionar
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const blocks = [
    {
      title: 'Núcleo de Assuntos internos',
      text: 'O Núcleo de Assuntos Internos é o núcleo que garante que nada opere fora do lugar, que tudo esteja em ordem para que todos os outros núcleos possam agir de maneira independente. Além disso, lida diretamente com o sentimento e engajamento de todos os membros, a fim de manter um ambiente saudável. Também é responsável por manter todos os documentos que regem o funcionamento da empresa atualizados, e ainda controlar o fluxo de caixa geral para que todos estejam cientes da situação financeira da empresa.',
      images: [
        Financeiro,
        GestaoDePessoas,
        Documentos,
      ],
    },
    {
      title: 'Núcleo Comercial',
      text: 'O Núcleo Comercial é uma parte vital da nossa empresa, responsável por impulsionar o crescimento e o sucesso por meio das vendas e do marketing da CP2eJr. No setor de vendas, você terá a oportunidade de se envolver diretamente com os clientes, construindo relacionamentos sólidos e oferecendo soluções personalizadas para atender às suas necessidades. Através de um processo de vendas estruturado e orientado para resultados, você terá o suporte necessário para se destacar e alcançar seu potencial máximo por uma vivência empresarial. Também englobamos o marketing, que tem como objetivo impulsionar nossos serviços no mercado, por meio de estratégias inovadoras nas redes sociais e ferramentas digitais.',
      images: [
        Vendas,
        Marketing,
        Comunicacao,
      ],
    },
    {
      title: 'Núcleo de Desenvolvimento',
      text: 'O Núcleo de Desenvolvimento é responsável por desenvolver soluções web em formato de landing page e sites institucionais. Lidamos com tecnologias da tríade HTML, CSS e JavaScript, e também React. No design, a criatividade tem espaço garantido na criação da identidade visual dos sites, que são totalmente personalizados de acordo com cada cliente. Além disso, para garantir que os projetos estejam acontecendo conforme o esperado, contamos com o Gerente de Projetos, que é responsável por monitorar as entregas dos membros e planejar todo o desenvolvimento do projeto.',
      images: [
        Desing,
        FrontEnd,
        BackEnd,
      ],
    },
    {
      title: 'Núcleo de Projetos',
      text: 'O Núcleo de Projetos é essencial para o crescimento e a eficiência das empresas. Com nossos serviços de planejamento de marketing e mapeamento de processos, ajudamos nossos clientes a se destacarem no mercado, aprimorarem seus processos internos e alcançarem resultados excepcionais. Estamos comprometidos em impulsionar o sucesso de nossos clientes, fortalecer sua posição no mercado e ajudá-los a prosperar em um ambiente empresarial em constante evolução.',
      images: [
        Processos,
        Marketing2,
        Impulsionar,
      ],
    },
  ];
  // Define um tamanho máximo para as imagens dentro do carrossel
  const carouselImageStyle = {
    maxWidth: '141px',
    maxHeight: '130px', // Defina o tamanho máximo desejado aqui
  };

  return (
    <section className="blocks-section" id="PS-inicio">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="space-line"></div>

      <h1 className='main-title'>Conheça a CP2eJr!</h1>

      {blocks.map((block, index) => (
        <div key={index} className="block">
          <h2>{block.title}</h2>
          <p>{block.text}</p>
          {/* Verifica se a tela é menor que 768 pixels para exibir o carrossel */}
          {windowWidth < 768 ? (
            <Carousel showArrows={true} showThumbs={false}>
              {block.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image} alt={`Imagem ${imgIndex + 1}`} style={carouselImageStyle} />
                </div>
              ))}
            </Carousel>
          ) : (
            // Caso contrário, exibe as imagens em uma linha normal
            <div className="image-container">
              {block.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Imagem ${imgIndex + 1}`} />
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="squad">
        <h2>SQUADS</h2>
        <p>Além dos núcleos, dentro da empresa também existe os squads, que são grupos formados à parte, por membros de diferentes núcleos, com o objetivo de desenvolver soluções. Um exemplo é o squad da grife, em que os membros participantes, possuem a oportunidade de desenvolver o design de produtos personalizados para a CP2, procurar fornecedores e repassar todas as informações para o resto da empresa, São várias oportunidades de fazer atividades fora do tema de um núcleo específico.</p>
      </div>

    </section>
  );
};

export default PS;