import './App.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

function App() {

  const [currentCard, setCurrentCard] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffSet, setItemOffPage] = useState(0)
  const itemsPerPage = 20

  useEffect(() => {
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((response) => response.json())
    .then((data) => {
      setCurrentCard(data.slice(itemOffSet, itemOffSet + itemsPerPage))
      setPageCount(Math.ceil(data.length / itemsPerPage))
    })
  }, [itemOffSet])

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setItemOffPage(selectedPage * itemsPerPage)
    window.scroll(0, 0)
  }

  return (
    <div className="App">
      <h1>Superheros</h1>
      <div className='container'>
        {currentCard.map((item) => (
          <div className='card' key={item.id}>
            <div className='card_content'>
              <img src={item.images.sm} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.work.occupation}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate previousLabel={"← Previous"} nextLabel={"Next →"} pageCount={pageCount}
       onPageChange={handlePageClick} containerClassName={"pagination"}pageClassName={"pagination__link"}
       previousLinkClassName={"pagination__link"} nextLinkClassName={"pagination__link"}
       disabledClassName={"pagination__link--disabled"} activeClassName={"pagination__link--active"}
      /> 

    </div>
  );
}

export default App;
