import {coin_container, coin_row, coin, coin_data, coin_h1, coin_symbol, coin_price, coin_img, coin_volume, coin_percent, coin_marketcap, red, green} from './coins.module.css'
import Link from 'next/link'

const Coins = ({ name, price, symbol, image, marketcap, volume, priceChange, id }) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`} >
            <div className={coin_container}>
                <div className={coin_row}>
                    <div className={coin}>
                        <img src={image} alt={name} className={coin_img}/>
                        <h1 className={coin_h1}>{name}</h1>
                        <p className={coin_symbol}>{symbol}</p>
                    </div>
                    <div className={coin_data}>
                        <p className={coin_price}>${price}</p>
                        <p className={coin_volume}>${volume.toLocaleString()}</p>
                        {
                            priceChange < 0 ? (
                                <p className={coin_percent, red} >
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className={coin_percent, green} >
                                    {priceChange.toFixed(2)}%
                                </p>
                            )
                        }
                        <p className={coin_marketcap}>
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Coins
