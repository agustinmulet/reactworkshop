import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Diagrama = () => {
  return <StaticImage
            src="../images/diagrama.png"
            placeholder="blurred"
            alt="Ciclos de vida de un método"
        />
}

const Props = () => {
  return <StaticImage
            src="../images/props.jpg"
            placeholder="blurred"
            alt="Explicación de Props"
        />
}

const State = () => {
  return <StaticImage
            src="../images/state.jpg"
            placeholder="blurred"
            alt="Explicación de State"
        />
}

const Top = () => {
  return <StaticImage
            src="../images/top.png"
            placeholder="blurred"
            alt="Parte de arriba terminada"
        />
}

export {
  Diagrama,
  Props,
  State,
  Top
}
