import './MVV.css'

import missao from '../../assets/missao.png'
import visao from '../../assets/visao.png'
import valores from '../../assets/valores.png'


function MVV({ }) {

    return (

        <div className='containerMVV'>
            <div className='padding-mvv'>
                <div className='mvv-card1'>
                    <div className='image-title-mvv'>
                        <img src={missao}></img>
                        <h2>Missão</h2>
                    </div>
                    <p>Com domínio e e-mail personalizado o seu negócio se mostra muito mais profissional e tem muito mais crédito para o cliente, trazen- do um sistema de relacionamento único, for- talecendo sua imagem e desenvolvimento a fidelização do seu público.</p>
                </div>

                <div className='mvv-card2'>
                    <div className='image-title-mvv2'>
                        <img src={visao}></img>
                        <h2>Visão</h2>
                    </div>
                    <p>Ser referência no Movimento Empresa Júnior, proporcionando experiências fantásticas para os alunos e as melhores soluções tecnológicas para os clientes.</p>
                </div>

                <div className='mvv-card3'>
                    <div className='image-title-mvv'>
                        <img src={valores}></img>
                        <h2>Valores</h2>
                    </div>
                    <p>Prezamos a entrega de serviços com a quali-dade acima da média, sempre inovando e nos comprometendo com o cliente. Trabalhamos de forma transparente, mantendo a ética e a responsabilidade acima de tudo.</p>
                </div>
            </div>
        </div>

    )
}

export default MVV