import { useMemo } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import getHeroById from "../../selectors/getHeroById"
import './heroCards.css'

const HeroScreen = () => {

    const { heroeId } = useParams()

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(-1)
    }

    if (!hero) return <Navigate to="/" /> //Me devuelve al inicio

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const imagePath = `/assets/${hero.id}.jpg`;

    return (
        <div className="row">
            <div className="col-4 especificImg">
                <img src={imagePath} alt={superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance </b> {first_appearance}
                    </li>
                    <li className="list-group-item">
                        <b>Characters</b> {characters}
                    </li>
                </ul>

                <button className="btn btn-outline-info mt-5 mx-3" onClick={handleReturn}>
                    Regresar
                </button>

            </div>
        </div>
    )
}

export default HeroScreen
