import NotFound from "../src/Components/NotFound";
import Head from "next/head";

const Custom404 = () => {
    return <>
        <Head>
            <title>JSON Tools Plus - Page Not Found 404</title>
            <meta name="pagename" content="JSON Tools Plus - Page Not Found 404" />
            <meta name="subject" content="JSON Tools Plus - Page Not Found 404" />
        </Head>
        <NotFound />
    </>
}

export default Custom404;
