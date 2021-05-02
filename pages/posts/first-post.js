import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post1</h1>
            <h2>
                <Link href={"/"}>
                    Go Back to homepage
                </Link>
                <Image src="/images/profile.jpg" width={900} height={900}/>
            </h2>
        </Layout>
    )
}