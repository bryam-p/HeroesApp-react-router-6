import HeroCard from "./HeroCard"
import getHeroByPublisher from "../../selectors/getHeroByPublisher"
import { useMemo } from "react"

const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}

export default HeroList
