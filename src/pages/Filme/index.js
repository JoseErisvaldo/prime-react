import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './style.css'

import api from "../../services/api"


function Filme () {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadingApi () {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"b8eb4ace57a9776e464725237d540b49",
                    language:"pt-BR"
                }
            })
            .then((response)=> {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('Filme não encontrado')
            })
        }
        loadingApi ()
        return () =>
        {
            console.log('Componente desmontado')
        }
    }, [])

    if(loading) {
        return(
            <div className="filme-info">
                <h1>Carregando detalhes....</h1>
            </div>
        )
    }

    return(
        <div className="filme-info" >
            <strong>{filme.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            <span>{filme.overview}</span>
            <strong> Avaliação: {filme.vote_average} /10</strong>
        </div>
    )
}
export default Filme