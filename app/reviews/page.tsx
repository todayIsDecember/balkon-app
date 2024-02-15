import { Metadata } from "next"
import { Raiting } from "../components"

export const metadata: Metadata = {
  title: 'Balkon IF -> Reviews'
}

export default function Reviews() {
  return (
    <div>
      <Raiting rating={4}/>
    </div>
  )
}