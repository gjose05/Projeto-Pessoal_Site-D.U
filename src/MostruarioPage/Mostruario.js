import React, { useState } from 'react';
import BotoesGenero from './BotoesGenero';
import MostruarioRoupas from './MostruarioRoupas';
import MostruarioRoupasFem from './MostruarioRoupasFem';

const MostruarioController = () => {
  const [generoAtual, setGeneroAtual] = useState('masculino');

  return (
    <div>
      <BotoesGenero onGeneroChange={setGeneroAtual} />
      
      {generoAtual === 'masculino' 
        ? <MostruarioRoupas /> 
        : <MostruarioRoupasFem />}
    </div>
  );
};

export default MostruarioController;