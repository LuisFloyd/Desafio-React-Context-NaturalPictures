import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import React, {useContext} from "react"

export default function Home() {

  const { fotos } = useContext(Context);

  // Utilicé esta función clickHeart, para no interferir el componente Heart. Así el componente Heart puede ser utilizado por otros componentes,
  // y no quedar amarrado a modificar exclusivamente el dato liked de las fotos.

  // dejo obsoleto comentario anterior, ya que en base a lo que indica el css .galeria .foto svg {align-self: flex-end;}
  // ya que esto indica que se trata de un elemento descendiente

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((dato) => (  <div  key={dato.id}
                                    className="foto"
                                    style={{backgroundImage: `url(${dato.src.tiny})`}}
                              >
                                <Heart  filled = {dato.liked}  id = {dato.id} liked = {dato.liked} />
                                <p>{dato.alt}</p>
                              </div>
                            ))}
    </div>
  );
}
