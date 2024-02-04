//our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";
function Newspage(){
    return <Fragment>
        <h1>The News page</h1>
        <ul>
            <li><Link href="/news/nextjs-is-good">NextJs is good</Link></li>
            <li><Link href="/news/somethingelse">Something else</Link></li>
        </ul>
        </Fragment>
}
export default Newspage;