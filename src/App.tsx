import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";

function App() {

  return (
    <>
      <Card title={"sadf"} body={"asdfasdfas dfasdf asdf"} onClose={function (): void {
        
      } } />
      <Modal title={"modal title"} body={"asdfasdfasd asdf asdf asdf asdf"} closeModal={function (): void {
        
      } } modal={true} setModal={() => {}} />
    </>
  )
}

export default App
