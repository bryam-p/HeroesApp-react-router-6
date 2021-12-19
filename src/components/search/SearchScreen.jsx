import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import getHeroesByName from "../../selectors/getHeroesByName"
import HeroCard from "../hero/HeroCard"

const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    console.log(q)

    const [formValues, handleInputChange, reset] = useForm({
        searchText: q
    })

    const { searchText } = formValues

    const heroesFileted = getHeroesByName(q)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Búsquedas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchText} />

                        <button type="submit" className="btn btn-primary mt-2" >Enviar</button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    <div className="row">
                        <div className="d-flex flex-wrap">
                            {
                                heroesFileted.map(hero => (
                                    <HeroCard key={hero.id} {...hero}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
