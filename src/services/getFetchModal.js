import axios from 'axios'
const { REACT_APP_API_KEY } = process.env
export async function getDetailsMovies({ id = '', type = '' }) {


    try {

        const URL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`
        const request = await axios.get(URL)


        const { title,
            name,
            vote_average,
            release_date,
            first_air_date,
            runtime,
            episode_run_time,
            number_of_episodes,
            number_of_seasons,
            backdrop_path,
            production_companies,
            genres,
            overview } = request.data
        return {
            title,
            name,
            backdrop_path,
            vote_average,
            release_date,
            first_air_date,
            runtime,
            episode_run_time,
            number_of_episodes,
            number_of_seasons,
            overview,
            production_companies,
            genres,
        }


    } catch (error) {
        return console.log('Error', error)
    }
}