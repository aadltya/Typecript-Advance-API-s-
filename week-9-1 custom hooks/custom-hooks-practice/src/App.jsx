import './App.css'
import { useMousePointer } from './hooks/useIsOnline'


function App() {
  const mousePointer = useMousePointer();
  
  return (
    <div>
      {/* <SearchBar  /> */}
      Your pointer is at X({mousePointer.p}), Y({mousePointer.q}) <br />
    </div>
  ) 
}
export default App

