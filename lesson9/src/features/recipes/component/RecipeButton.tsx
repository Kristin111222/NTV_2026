
type Props = {
  onClick: () => void
}

export default function RecipeButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      Sækja uppskrift
    </button>
  )
}