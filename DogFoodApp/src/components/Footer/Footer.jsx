import React, { useEffect } from 'react'


export const Footer = () => {

  const listener = (e) => console.log(e.key)

  useEffect(() => {
    return () => console.log("UNMOUNT");
  }, []);

  return <div>
    <h1>FOOTER</h1>
  </div>
}