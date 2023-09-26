import JSONMinify from "../src/Components/JSONMinify";
import Head from 'next/head';

const jsonMinify = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - JSON Minify</title>
            <meta name="pagename" content="JSON Tools Plus - JSON Minify" />
            <meta name="subject" content="JSON Tools Plus - JSON Minify" />
        </Head>
        <JSONMinify />
    </>
}

export default jsonMinify;
