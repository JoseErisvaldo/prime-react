import { useEffect, useState } from "react"
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './style.css'
//URL API : /movie/now_playing/api_key=b8eb4ace57a9776e464725237d540b49
function Home () {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect (() => {
      
        async function loadApi () {
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key:"b8eb4ace57a9776e464725237d540b49",
                    language:"pt-BR",
                    page:2
                }
            })
            setFilmes(response.data.results.slice(0,30))
            setLoading(false)
        }
        loadApi()
    })

    if(loading) {
        return(
            <div className="carregando-home">
                Carregando filmes...
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filme" >
                {filmes.map((filme) => {
                  return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        <Link className="link" to={`/filme/${filme.id}`}> Acessar </Link>
                    </article>
                  )  
                })}

            </div>
        </div>
    )
}

export default Home