import Monitor from '../../assets/monitor.png';
import Lapis from '../../assets/lapis.png';
import Lista from '../../assets/lista.png';
import Icones from '../../assets/icones.png';
import Mapa from '../../assets/mapa.png';
import Lupa from '../../assets/lupa.png';
import './Servicos.css';

const Servicos = () => {
  const services = [
    {
      title: 'Sites institucionais',
      description: 'O site institucional é o primeiro contato que o cliente terá com você na internet, podendo conhecer seus produtos, serviços e um pouco da sua filosofia. Ele acaba se tornado uma ótima ferramenta de comunicação da empresa com o público, fortalecendo sua visibilidade e marketing.',
      icon: Monitor,
    },
    {
      title: 'Criação da sua marca na internet',
      description: 'Com domínio e e-mail personalizado o seu negócio se mostra muito mais profissional e tem muito mais crédito para o cliente, trazendo um sistema de relacionamento único, fortalecendo sua imagem e desenvolvimento a fidelização do seu público.',
      icon: Lapis,
    },
    {
      title: 'Controle de estoque',
      description: 'Através de uma planilha desenvolvida, é possível controlar o que entrou e o que saiu do estoque, com o objetivo de analisar quanto tem gasto com estoque, quando é preciso comprar mais insumos, evitar grandes problemas e etc.',
      icon: Lista,
    },
    {
      title: 'Desenvolvimento de aplicações WEB',
      description: 'A criação de aplicações na web proporciona mais visibilidade ao seu negócio, facilita o atendimento ao cliente e ajuda na interação com as mídias sociais. Nossas soluções desenvolvem e impulsionam o seu negócio para acompanhar a evolução do mercado, de maneira inovadora e econômica.',
      icon: Icones,
    },
    {
      title: 'Mapeamento de processos',
      description: 'Consiste em analisar, registrar e sugerir melhorias em processos de uma empresa. Visando redução de recursos, cortes de gastos desnecessários, documentação do processo, e etc.',
      icon: Mapa,
    },
    {
      title: 'Pesquisa de fornecedores',
      description: 'Buscar por fornecedores, por exemplo, para ajudá-lo a encontrar os melhores preços na hora da compra de insumos. Além disso, analisamos a questão de prazo, custo do frete, qualidade, etc.',
      icon: Lupa,
    },
  ];

  const servicesColumn1 = services.slice(0, 3);
  const servicesColumn2 = services.slice(3);

  return (
    <>
      <div className="service-section" id='service'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="space-line"></div>

        <section>
          <h2 className="main-title">Serviços</h2>
          <div className="services">
            <div className="column">
              {servicesColumn1.map((service, index) => (
                <div className="service" key={index}>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="icon-title">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="column">
              {servicesColumn2.map((service, index) => (
                <div className="service" key={index + 3}>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="icon-title">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='botao'>
          <button className="botao-texto">Entre em contato</button>
        </div>

        <div className="space-line"></div>
      </div>
    </>
  );
};

export default Servicos;