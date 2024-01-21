import { useEffect, useState } from "react"
import Menu from "../../components/Menu"
import { useParams } from 'react-router-dom';


export default function FilmePage(){
    
    const {id} = useParams();
    const [filme, setFilme] = useState();

    useEffect(() => {

        let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDUxNGE2YWI0Yjg4ZGY0NWZmZTNmNWQ4Nzk2NzZkNiIsInN1YiI6IjY0ZjAwM2QxY2FhNTA4MDBlOTUxNjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59SDvErSwX-F6-slLHwL3w1vtXW36Ks0baQ7jBs54IU";

        let options = {
            method: 'GET',
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        }

        let url = 'https://api.themoviedb.org/3/movie/' + id;

        fetch(url, options)
            .then((resp) => resp.json())  
            .then(data => setFilme(data))
            .catch(error => console.log(error))

        


    }, []);

    return(
        filme && <div className="bg-black min-h-screen">
            <Menu />
            <div className="w-4/5 m-auto min-h-fit flex flex-row justify-start mt-10 gap-10 bg-gray-700 p-10 rounded-md">
                <img src={"https://image.tmdb.org/t/p/w400/" + filme.poster_path} className="rounded-md" alt="" />
                <div>
                    <h1 className="text-4xl font-bold text-white">{filme.title}</h1>
                    <p className="mt-14 text-white">{filme.overview}</p>
                    <p className="mt-14 text-white"><b>Duração:</b> {filme.runtime} min</p>
                    <p className="mt-5 text-white"><b>Lançamento:</b> {filme.release_date}</p>
                    <p className="mt-5 text-white"><b>Nota:</b> {filme.vote_average}</p>
                </div>
            </div>
        </div>
    )
}