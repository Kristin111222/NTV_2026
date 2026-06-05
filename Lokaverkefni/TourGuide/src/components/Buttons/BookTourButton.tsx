type BookTourButtonProps = {
  onClick: () => void
}

export default function BookTourButton({
  onClick,
}: BookTourButtonProps) {
  return (
    <button onClick={onClick}>
      Book Tour
    </button>
  )
}