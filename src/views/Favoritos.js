import Context from "../Context";
import { useContext } from "react";
import "../assets/css/galeria.css";

export default function Favoritos() {

  const { fotos } = useContext(Context);
  
  const favoritos = fotos.filter(el => el.liked == true)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((dato) => (  <div  key={dato.id}
                                      className="foto"
                                      style={{backgroundImage: `url(${dato.src.tiny})`}}
                                    > 
                                    </div>
                                  )
                      )
        }
      </div>
    </div>
  );
}
