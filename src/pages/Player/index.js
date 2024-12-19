import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import NotFound from "../../pages/NotFound";
import styles from "../../pages/Player/Player.module.css";
import videos from "../../components/data/db.json"; // Asegúrate de que la ruta de importación sea correcta

function Player() {
    const [video, setVideo] = useState(null);
    const parametros = useParams();

    useEffect(() => {
        const videoEncontrado = videos.find(video => video.id === Number(parametros.id));
        if (videoEncontrado) {
            const videoURL = convertToEmbedURL(videoEncontrado.video); // Usa `video` como llave
            setVideo({ ...videoEncontrado, video: videoURL });
        }
    }, [parametros.id]);

    const convertToEmbedURL = (url) => {
        // Transforma los links de YouTube para embeber el iframe
        const youtuShort = /youtu\.be\/([^?]+)/;
        const youtubeStandard = /youtube\.com\/watch\?v=([^&]+)/;
        
        if (youtuShort.test(url)) {
            return url.replace(youtuShort, "www.youtube.com/embed/$1");
        }
        if (youtubeStandard.test(url)) {
            return url.replace(youtubeStandard, "www.youtube.com/embed/$1");
        }
        return url;
    };

    if (!video) return <NotFound />;
    
    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="80vh" 
                    src={video.video} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </section>
        </>
    );
}

export default Player;