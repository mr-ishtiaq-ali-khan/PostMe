import Card from "./components/card/Card";

function App() {

  return (
    <Card title={"sadf"} body={"asdfasdfas dfasdf asdf"} onClose={function (): void {
      throw new Error("Function not implemented.");
    } } />
  )
}

export default App
