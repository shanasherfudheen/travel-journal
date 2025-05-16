import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import data from '../src/data.js'

function App() {
  const entryElements = data.map((entry)=> {
    return <Entry
              key={entry.id} 
              {...entry}
          />
  })
  return (
    <>
      <Header />
      <main>
        {entryElements}
      </main>
    </>
  )
}

export default App
