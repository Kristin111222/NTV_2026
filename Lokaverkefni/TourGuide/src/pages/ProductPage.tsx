import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Stök vara</h1>
      <p>Id: {id}</p>
    </div>
  )
}