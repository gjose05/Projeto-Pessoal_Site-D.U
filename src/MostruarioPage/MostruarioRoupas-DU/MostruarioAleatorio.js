import './MostruarioRoupas.css';

function CarroselFotosAleatorio() {
    return (
        <div className="ctr-accordion">
            <div className="tab">
                <img src="images-du/CatalogoFeminino/Catálogo D.U-images-13.jpg" alt="Modelo 1" />
            </div>
            <div className="tab">
                <img src="images-du/CatalogoMasculino/CatálogoD.U-images-6.jpg" alt="Modelo 2" />
            </div>
            <div className="tab">
                <img src="images-du/CatalogoFeminino/Catálogo D.U-images-11.jpg" alt="Modelo 3" />
            </div>
            <div className="tab">
                <img src="images-du/CatalogoMasculino/CatálogoD.U-images-2.jpg" alt="Modelo 4" />
            </div>
        </div>
    );
}

export default CarroselFotosAleatorio;