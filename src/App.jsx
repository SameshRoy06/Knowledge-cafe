
import './App.css'
import Blogs from './Componant/Blogs/Blogs'
import Bookmarks from './Componant/Bookmarks/Bookmarks'
import Header from './Componant/Header/Header'

function App() {


  return (
    <>
       <Header></Header>
       <div className='md:flex'>
       <Blogs></Blogs>
       <Bookmarks></Bookmarks>
       </div>
    </>
  )
}

export default App
