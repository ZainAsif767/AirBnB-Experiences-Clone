import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card';
import data from './Data';

export default function App() {
  // making a const var and use .map to map data
  // from our data.js file it will render here
  // and do make sure to use correct attributes
  // as set in data.js file
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        // below is another approach of passing props
        // which is a bit better way..
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  )
}