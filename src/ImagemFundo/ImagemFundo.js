import './ImagemFundo.css';

function ImagemFundo(){
    return(
        <div className="imagemfundo-container">
            {/* Imagem de fundo */}
            <img
                src={process.env.PUBLIC_URL + "/images-du/manualmarca-images-7.jpg"}
                alt="fotofundo"
                className="imagemfundo-image"
            />
        </div>
    );
}

export default ImagemFundo;