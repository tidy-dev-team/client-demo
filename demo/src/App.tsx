import './App.css'
import './globals.css'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <>
      <Card className='w-50 items-start'>
        <CardHeader>
          <CardTitle className='text-left'>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default App
