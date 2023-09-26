import JSONPath from "../src/Components/JSONPath";
import Head from 'next/head';

const jsonPath = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - JSON Path Evaluator</title>
            <meta name="pagename" content="JSON Tools Plus - JSON Path Evaluator" />
            <meta name="subject" content="JSON Tools Plus - JSON Path Evaluator" />
        </Head>
        <JSONPath />
    </>
}

export default jsonPath;
