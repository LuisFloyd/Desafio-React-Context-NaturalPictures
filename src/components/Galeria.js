import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import React, {useContext, useState, useEffect} from "react"

export default function Home() {

  const { fotos, setFotos } = useContext(Context);

  const clickHeart = (id, liked) => {
    const nuevoListado = [...fotos]
    const index = nuevoListado.findIndex(dato => dato.id == id)
    nuevoListado[index].liked = !liked
    setFotos(nuevoListado)
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((dato) => (  <div  key={dato.id}
                                    className="foto"
                                    style={{backgroundImage: `url(${dato.src.tiny})`}}
                              >
                                <div  style={{alignSelf: 'flex-end'}}
                                      onClick = {() => clickHeart(dato.id, dato.liked)}
                                >
                                  <Heart  filled = {dato.liked} />
                                </div>
                                <p>{dato.alt}</p>
                              </div>
                            ))}
    </div>
  );
}
