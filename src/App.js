import { useState } from "react";
import Child from "./Child";
const App = () => {
  const [data, setData] = useState('Hello World')
  const [data1, setData1] = useState('Hello')
  const [data2, setData2] = useState('text')

  return (
    <form>
      <div>
        <Child name={data}
          text={data1}
          text1={data2} />
        <button onClick={(e) => { e.preventDefault(); setData(data) }}>Click data</button>
        <button onClick={(e) => { e.preventDefault(); setData1(data1) }}>update data1</button>
        <button onClick={(e) => { e.preventDefault(); setData2(data2) }}>Click data2</button>
      </div>
    </form>
  )
}
export default App;
