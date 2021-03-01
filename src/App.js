import './App.css';
import Card from './components/Card';

const cards = [
  {
    img: 'https://emeraldspa.ru/wp-content/uploads/2020/12/image049-51.jpg',
    text: `Card huyard`,
  },
  {
    title: 'TITLE',
    text: 'This title is test',
  },
  {
    title: 'РИАЛЬНЕ ЖИРАФНЕ!!!!1111',
    text: 'Не ножимай',
    href: 'https://upyachka.ru/',
    textBtn: 'УПЯЧКА',
  }
];

function App() {
  return (
    <>
      {cards.map((item) =>
        <Card content={item}>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.text}</p>
          <a href = {item.href || '#'} className="btn btn-primary">{item.textBtn || 'Go somewhere'}</a>
        </Card>)}
    </>
  );
};

export default App;
