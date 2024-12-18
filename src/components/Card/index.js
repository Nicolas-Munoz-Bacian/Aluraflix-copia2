import { useFavoritosContext } from "context/Favoritos";
import styles from "../Card/Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";
import { Link } from "react-router-dom";
function Card({ id, capa, titulo }) {
  
  const {favorito , agregarFavorito}= useFavoritosContext()
  const isFavorito = favorito.some(fav=> fav.id === id)
  const icon = isFavorito ? iconFavorito : iconNoFavorito 

  return (
    <div className={styles.container}>
        <Link to={`/player/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
        </Link>
        <img 
            src={icon} 
            alt="Icono favorito"
            className={styles.favorito}
            onClick={() => agregarFavorito({ id, titulo, capa })}
        />
        <button onClick={handleEdit} className={styles.button}>
            Editar
        </button>
        <button onClick={handleDelete} className={styles.button}>
            Eliminar
        </button>

    {showModal && (
        <Editmodal
        initialData={{ id, titulo, capa, descripcion, video }}
        onClose={() => setShowModal(false)}
        onSave={onSave}
        onDelete={onDelete}
        onClear={onClear} // Pasa la función onClear al EditModal
    />
)}
</div>
);
}

export default Card;