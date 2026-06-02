type Props = {
  selectedCategory: number
  setSelectedCategory: (id: number) => void
}

function CategoryButtons({
  selectedCategory,
  setSelectedCategory
}: Props) {

  return (
    <div className="category-buttons">

      <button onClick={() => setSelectedCategory(0)}>
        All
      </button>

      <button onClick={() => setSelectedCategory(1)}>
        Adventure Tours
      </button>

      <button onClick={() => setSelectedCategory(2)}>
        Northern Lights Tours
      </button>

      <button onClick={() => setSelectedCategory(3)}>
        Museums & Culture
      </button>

    </div>
  )
}

export default CategoryButtons