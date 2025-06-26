import './GoogleMapsBotao.css'; // importa o CSS

function MapsButton() {
  return (
    <a
      href="https://maps.apple.com/place?address=Rua%20Alberto%20Silva%2C%201216%2C%20Lagoa%20Seca%2C%20Natal%20-%20RN%2C%2059022-300%2C%20Brasil&map=hybrid&coordinate=-5.808351%2C-35.209516&name=Rua%20Alberto%20Silva%2C%201216"
      target="_blank"
      rel="noopener noreferrer"
      className="maps-button"
    >
      Onde estamos
    </a>
  );
}

export default MapsButton;