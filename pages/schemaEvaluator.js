import SchemaValidator from "../src/Components/SchemaValidator";
import Head from 'next/head';

const schemaEvaluator = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - JSON Schema Validator</title>
            <meta name="pagename" content="JSON Tools Plus - JSON Schema Validator" />
            <meta name="subject" content="JSON Tools Plus - JSON Schema Validator" />
        </Head>
        <SchemaValidator />
    </>
}

export default schemaEvaluator;
