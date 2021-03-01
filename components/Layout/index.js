import Head from 'next/head'
import Link from 'next/Link'
import Image from 'next/image'

// to be put under <Head></Head> for svg logo


const Layout = ({children, title="Crypto Tracker"}) => {
    return(
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <header className="header">
                    <Link href="/" passHref>
                        <Image
                            src="/currency.svg"
                            alt="Picture of the author"
                            width={400}
                            height={300}
                        />
                    </Link>
                </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
