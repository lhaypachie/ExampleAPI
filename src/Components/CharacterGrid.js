import ChacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({isLoading, items}) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        {items.map(item => (
            <ChacterItem key={item.char_id} item={item} />
        ))}
    </section>)
}

export default CharacterGrid
