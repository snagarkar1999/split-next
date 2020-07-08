import Link from 'next/link'
import MyApp from "./_app";
import { FEATURE } from '../../constants'
import Button from "../components/button";


export default function Index({ treatment, userKey }) {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>treatment '{treatment}' for feature '{FEATURE}' and key '{userKey}' </p>
        {/*<p> {text} </p>*/}
       <Button />
      <Link href="/about">
        <a>Dummy Giving Page</a>
      </Link>
    </div>
  )
};

