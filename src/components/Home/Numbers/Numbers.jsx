import './Numbers.scss';

const numbersCards = [
  {
    title: '80 000 ₽/м²',
    desc: 'Финальная цена. \nНикаких скрытых платежей.',
  },
  {
    title: '80 дней',
    desc: 'Срок строительства. \nТочно и без задержек.',
  },
  {
    title: 'Класс A+',
    desc: 'Энергоэффективность. \nЭкономия на отоплении до 40%',
  },
  {
    title: '100+ лет',
    desc: 'Срок службы. \nЖелезобетонная надёжность.',
  },
];

export default function Numbers() {
  return (
    <section className='numbers-card-container'>
      {numbersCards.map((item, index) => (
        <div className='numbers-card' key={index}>
          <span className='numbers-title'>{item.title}</span>
          <span className='numbers-desc'>{item.desc}</span>
        </div>
      ))}
    </section>
  );
}