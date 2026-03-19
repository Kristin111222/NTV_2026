type Props = {
  recipe: any
}

export default function RecipeCard({ recipe }: Props) {
  if (!recipe) return null

  return (
    <div className="card">
      <h2>{recipe.title}</h2>

      <img src={recipe.image} width={300} />

      <div
        dangerouslySetInnerHTML={{
          __html: recipe.summary,
        }}
      />

      <p>{recipe.instructions}</p>
    </div>
  )
}