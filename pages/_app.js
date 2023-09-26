import { AlertsProvider } from "../src/Contexts/AlertsContext";
import Navbar from "../src/Components/Navbar";
import SiteFooter from '../src/Components/SiteFooter';
import Head from 'next/head';
import Script from 'next/script';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-91856744-2';
ReactGA.initialize(TRACKING_ID);

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JSON Tools Plus</title>

                <link rel="icon" href="/images/jp-logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description"
                    content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
                <meta name="keywords"
                    content="JSON, json, JSON Path, JSON Schema, JSON Validator, Schema, Schema Validator, JSON Path Finder, JSON Path Evaluator, JSON Schema Generator, Developer, Javascript, Developer Tools, JSON Beautify, JSON Minify, Beautify, Beautifier, Mini, Minify, JSON Minifier" />
                <meta name="author" content="Ahmed Al-Zubidy" />
                <meta name="subject" content="JSON Tools Plus" />
                <meta name="abstract"
                    content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
                <meta name="topic"
                    content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
                <meta name="summary"
                    content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
                <meta name="designer" content="Ahmed Al-Zubidy" />
                <meta name="owner" content="Ahmed Al-Zubidy" />
                <meta name="url" content="http://www.jsontoolsplus.com" />
                <meta name="identifier-URL" content="http://www.jsontoolsplus.com" />
                <meta name="pagename" content="JSON Tools Plus" />
                <meta name="target" content="all" />
                <link rel="bookmark" title="JSON Tools Plus" href="http://www.jsontoolsplus.com" />
                <link rel="apple-touch-icon" href="/images/j-logo.png" />

                <link rel="manifest" href="/manifest.json" />

                <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" />
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
            </Head>
            <AlertsProvider>
                <Navbar />
                <Component {...pageProps} />
                <SiteFooter />
            </AlertsProvider>
        </>
    )
}
