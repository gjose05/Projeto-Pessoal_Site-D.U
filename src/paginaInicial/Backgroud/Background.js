import './Background.css';

function Background(){
    return(
        <div className="Background-container">
            {/* Imagem de fundo */}
            <img
                src={process.env.PUBLIC_URL + "/images-du/manualmarca-images-1.jpg"}
                alt="fundo"
                className="fundo-image"
            />

            {/* Logo sobre o fundo */}
            <img
                src={process.env.PUBLIC_URL + "/images-du/logotipobranco_du.png"}
                alt="logo"
                className="logotipobranco-image"
            />

            <div className="text2-DU">
                <p>
                Conheça. Escolha. Vista D.U.
                </p>
            </div>
        </div>
    );
}

export default Background;