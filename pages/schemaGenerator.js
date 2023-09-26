import SchemaGenerator from "../src/Components/SchemaGenerator";
import Head from 'next/head';

const schemaGenerator = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - JSON Schema Generator</title>
            <meta name="pagename" content="JSON Tools Plus - JSON Schema Generator" />
            <meta name="subject" content="JSON Tools Plus - JSON Schema Generator" />
        </Head>
        <SchemaGenerator />
    </>
}

export default schemaGenerator;
