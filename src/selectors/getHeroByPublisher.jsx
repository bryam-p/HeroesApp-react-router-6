import { heroes } from "../data/heroes"

const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is nor a valid publisher`)
    }
    return heroes.filter(hero => hero.publisher === publisher)
}

export default getHeroByPublisher
