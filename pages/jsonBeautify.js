import JSONBeautify from "../src/Components/JSONBeautify";
import Head from 'next/head';

const jsonBeautify = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - JSON Beautify</title>
            <meta name="pagename" content="JSON Tools Plus - JSON Beautify" />
            <meta name="subject" content="JSON Tools Plus - JSON Beautify" />
        </Head>
        <JSONBeautify />
    </>
}

export default jsonBeautify;
