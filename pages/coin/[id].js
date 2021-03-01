import Layout from "../../components/Layout"
import Image from 'next/image'
import {coin_page, coin_container, coin_image, coin_name,
    coin_ticker, coin_current} from './coin.module.css'


const Coin = ({coin}) => {
    return (
        <Layout>
            <div className={coin_page}>
                <div className={coin_container}>
                    <img
                        src={coin.image.large}
                        alt={coin.name}
                        className={coin_image}
                    />
                    <h1 classname={coin_name}>{coin.name}</h1>
                    <p className={coin_ticker}>{coin.symbol}</p>
                    <p className={coin_current}>
                        {coin.market_data.current_price.usd}
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Coin

export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json()
    return {
        props: {
            coin: data
        }
    }
}
