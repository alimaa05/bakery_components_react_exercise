const RecipeForm = () => {

    return (
    <form>
    <h2>Submit a new recipe</h2>
    <label htmlFor="name">Cake Name: </label>
    <input type="text" name="name"></input>

    <label htmlFor="ingredients">Ingredients: </label>
    <input type="text" name="ingredients"></input>

    <label htmlFor="rating">Rating: </label>
    <input type="text" name="rating"></input>

    {/* submit button */}
    <input type="submit" value="submit"></input>
    </form>
    )

}

export default RecipeForm;