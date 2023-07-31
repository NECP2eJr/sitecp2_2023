import Form from '../../assets/WebPS.png';
import './FormularioPS.css';

const FormularioPS = () => {
    return (
        <div className='form'>
            <h1>Processo seletivo</h1>
            <p>Venha fazer parte da nossa equipe! O processo seletivo está aberto até o dia xx/xx</p>
            <img src={Form} alt='Formulário de inscrição' />
        </div>
        );
}

export default FormularioPS;