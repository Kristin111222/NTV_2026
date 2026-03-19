import { useState } from "react"
import RecipeCard from "../features/recipes/component/RecipeCard"
import RecipeButton from "../features/recipes/component/RecipeButton"

export function IndexPage() {
  const [recipe, setRecipe] = useState<any>(null)

  async function getRecipe() {
    const res = await fetch(
      "https://api.spoonacular.com/recipes/random?number=1&apiKey=99fb026b93a94b91b62d73ba016926e3"
    )

    const data = await res.json()

    setRecipe(data.recipes[0])
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Recipe Page</h1>

      <RecipeButton onClick={getRecipe} />

      <RecipeCard recipe={recipe} />
    </div>
  )
}