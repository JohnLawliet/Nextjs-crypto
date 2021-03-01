import {coin_search, coin_input} from './search.module.css'

const SearchBar = ({...rest}) => {
    return (
        <div className={coin_search}>
            <input className={coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar
