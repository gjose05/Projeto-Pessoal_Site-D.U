import React, { useState } from 'react';
import './BotoesGenero.css';

// Importe os componentes de forma condicional para evitar dependência circular
let CarroselFotosAleatorio, CarroselFotos, CarroselFotosFem;

try {
  CarroselFotosAleatorio = require('../MostruarioRoupas-DU/MostruarioAleatorio').default;
  CarroselFotos = require('../MostruarioRoupas-DU/MostruarioRoupas').default;
  CarroselFotosFem = require('../MostruarioRoupas-DU/MostruarioRouspasFem').default;
} catch (error) {
  console.error("Erro ao carregar componentes:", error);
}

const BotoesGenero = () => {
  const [carrosselAtivo, setCarrosselAtivo] = useState(null);

  return (
    <div className="container-genero">
      <div className="botoes-container">
        <button
          className="botao-masculino"
          onMouseEnter={() => setCarrosselAtivo('masculino')}
        >
          Masculino
        </button>
        
        <button
          className="botao-feminino"
          onMouseEnter={() => setCarrosselAtivo('feminino')}
        >
          Feminino
        </button>
      </div>

      <div className="area-carrossel">
        {!carrosselAtivo && CarroselFotosAleatorio && <CarroselFotosAleatorio />}
        {carrosselAtivo === 'masculino' && CarroselFotos && <CarroselFotos />}
        {carrosselAtivo === 'feminino' && CarroselFotosFem && <CarroselFotosFem />}
      </div>
    </div>
  );
};

export default BotoesGenero;