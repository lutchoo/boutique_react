import { List } from './components/List'

import './App.css'

function App() {



  return (
  <main style={{display: "flex", flexDirection: "row", overflow: "hidden"}}>
    <div style={{width: "50%", overflowY: "scroll"}} className='card'>
      <h1>Mon epicerie 24/7 </h1>
      <List />
    </div>
    <section  style={{width: "40%", height: "80vh"}} className='card m-5 sticky-top'>
      <h2>Mon panier </h2>
    </section>
  </main>
  )
}

export default App
