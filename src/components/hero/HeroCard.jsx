import { Link } from 'react-router-dom'
import './heroCards.css'

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <Link to={`/hero/${id}`} className="col-4">
            <div className="card">
                <div className="row no-gutters">
                    <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
                    <div className="cont__text">
                        <div className="superHeroName">{superhero}</div>
                        <div className="alterEgo">{alter_ego}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HeroCard
