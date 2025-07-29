import './App.css'
import './globals.css'
import Chat_Item from './ui/chat_item'
import { Wrench } from 'lucide-react';

function App() {

  return (
    <>
      <Chat_Item
        title="Title"
        subtitle="Subtitle"
        icon={<Wrench size={16} />}
        onClick={() => console.log('Card clicked')}
      />
    </>
  )
}

export default App
