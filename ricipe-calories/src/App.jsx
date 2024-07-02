
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Recipes from './components/Recipes/Recipes'
function App() {

  return (
    <>
      <div className='w-[90%] m-auto mt-5'>
        <NavBar></NavBar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
