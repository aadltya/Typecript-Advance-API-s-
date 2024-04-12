import './App.css'

function App() {

  return (
    <>
      <Todo title='go to scholl' description='at 10 AM' />
    </>
  )
}

interface todoInfo {
  title : string,
  description : string
}

function Todo(props : todoInfo) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
