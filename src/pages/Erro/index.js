import './style.css'
import MikeSaImage from './img/Mike_sa.png';
function Erro () {
    return(
        <div className="erro">
            <h1>404</h1>
             Ops, url não encontrado !
        <br/>
        <img src={MikeSaImage} alt="Mike Sa" />
        </div>
    )
}

export default Erro