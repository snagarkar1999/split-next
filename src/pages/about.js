import { useEffect } from 'react';
import { FEATURE } from '../../constants'
import Link from "next/link";
import _app from "next/app";

export default function About({ treatment, userKey }) {

  useEffect(() => {
    split?.client().track('page_visited', 1, { page: '/about' });
  }, [])

  return (
    <div>
        <Link href="/">
            <a>Back to Giving Page Creation</a>
        </Link>
      <p>This is a giving page</p>
        {/*<div> {text} </div>*/}
      {/*<p>treatment '{treatment}' for feature '{FEATURE}' and user key '{userKey}' </p>*/}
      <p> Ask Ladder Boxes place here </p>
    </div>
  )
}
