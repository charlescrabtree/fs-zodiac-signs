import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiac_signs/${name}.png`} />


    </div>
  );
}
