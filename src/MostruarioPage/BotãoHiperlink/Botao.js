import './Botao.css';

const Botao = ({ texto, link }) => {
  return (
     <a 
      href={"https://api.whatsapp.com/send/?phone=5584994078838&text&type=phone_number&app_absent=0"} 
      className="texto-gradiente"
      target="_blank"          // Abre em nova guia
      rel="noopener noreferrer" // Segurança para links externos
    >
      {"Fale com a gente"}
    </a>
  );
};

export default Botao;