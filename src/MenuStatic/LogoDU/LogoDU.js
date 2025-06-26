import './LogoDU.css';

function LogoDU(){
    return(
        <div className="logoDU-container">
            <img
                src={process.env.PUBLIC_URL + "/images-du/brancoDU.png"}
                alt="Logo DU"
                className="logoDU-image"
            />
        </div>
    );
}

export default LogoDU;