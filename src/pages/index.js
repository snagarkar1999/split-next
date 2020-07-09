import Link from 'next/link'
import MyApp from "./_app";
import { FEATURE } from '../../constants'
import Button from "../components/Button";
import ColorMode from "../components/ColorMode";
import AskLadder from "../components/AskLadder";
import DisplayText from "../components/DisplayText";


export default function Index({userKey, treatments}) {
  return (
    <div>
      <h1>Giving Pages</h1>
        {/*<Button />*/}
      <p>sudo user '{userKey}' </p>
        <DisplayText mode = {treatments.display_text} />
        {/*<div> {display_text}</div>*/}
        <AskLadder mode = {treatments.ask_ladder} userKey = {userKey} />
        {/*<div> {ask_ladder}</div>*/}
        <ColorMode mode = {treatments.color_mode} />
        {/*<p> {color_mode} </p>*/}
    </div>
  )
};

