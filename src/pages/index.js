import Link from 'next/link'
import MyApp from "./_app";
import { FEATURE } from '../../constants'
import Button from "../components/Button";


export default function Index({userKey, color_mode, display_text, ask_ladder }) {
  return (
    <div>
      <h1>Giving Pages</h1>
      <p>sudo user '{userKey}' </p>
        <div> {display_text}</div>
        <div> {ask_ladder}</div>
        <p> {color_mode} </p>
    </div>
  )
};

