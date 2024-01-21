import { useEffect, useState } from "react"
import Menu from "../../components/Menu"
import { Link } from "react-router-dom"

export default function Home(){

    const [filmes, setFilmes] = useState([]);


    useEffect(() => {

        let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDUxNGE2YWI0Yjg4ZGY0NWZmZTNmNWQ4Nzk2NzZkNiIsInN1YiI6IjY0ZjAwM2QxY2FhNTA4MDBlOTUxNjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59SDvErSwX-F6-slLHwL3w1vtXW36Ks0baQ7jBs54IU";

        let options = {
            method: 'GET',
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        }

        let url = 'https://api.themoviedb.org/3/movie/popular';
        fetch(url, options)
            .then((resp) => resp.json())  // Convert data to JSON format
            .then(data => setFilmes (data.results))
            .catch(error => console.log(error))



    }, []);

    return(
        <div>
            <Menu />
            <div className="container bg-white shadow p-4 mx-auto">
                <h1 className="text-4xl font-bold">Populares</h1>


                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                    {filmes.map(filme =>(
                        <Link to={`/filme/${filme.id}`} >
                            <div key={filme.id} >
                                <img src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                                <h3 className="text-2xl font-semibold text-center">{filme.title}</h3>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}