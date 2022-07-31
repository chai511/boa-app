import React, { useRef, useEffect } from 'react'

const UseRefDemo = () => {
  const counter = useRef(14)
  useEffect(() => {
    counter.current = counter.current + 1
  }, counter)

  return <h1>{`it has printed ${counter.current}`}</h1>
}

export default UseRefDemo