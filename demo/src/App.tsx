import './App.css'
import './globals.css'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Wrench } from 'lucide-react';

function App() {

  return (
    <>
      <Card className='w-50 items-start border-none hover:bg-popover'>
        <CardHeader>
          <CardTitle className='flex gap-1 text-left font-normal text-sm'>
            <Wrench size={16} />
            Title
          </CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default App
