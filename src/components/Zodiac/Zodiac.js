import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiac_signs/${name}.png`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  );
}
