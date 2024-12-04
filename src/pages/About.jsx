import React from 'react'
import Memo from '../components/demo/Memo'
import UseMemoDemo from '../components/demo/useMemo/UseMemoDemo'
import UseRef from '../components/demo/useRef/UseRef'
import UseRefDom from '../components/demo/useRef/UseRefDom'
import ContextDemo from '../components/demo/useContext/ContextDemo'

function About() {
  return (
    <div>
        <Memo />
        <UseMemoDemo />
        <UseRef />
        <UseRefDom />
        <ContextDemo />
    </div>
  )
}

export default About