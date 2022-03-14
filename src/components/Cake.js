import lemonDrizzle from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/lemonDrizzle.jpeg'
import teaLoaf from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/teaLoaf.jpeg'
import brownie from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/brownie.png'
import carrotCake from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/carrotCake.png'

const Cakes = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5,
            img: lemonDrizzle
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3,
            img: teaLoaf
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4,
            img: brownie
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5,
            img: carrotCake
        }
    ]

    
    const individualCake = cakes.map(cake => {
        return <div key={cake.cakeName}>
            <p>Cake Name: {cake.cakeName}</p>
            <img src={cake.img} alt={cake.cakeName} width="200"/>
        <ul key={cake.cakeName}>Ingredients: {cake.ingredients.map(cakeIngredient => {
            return <li key={cakeIngredient}>{cakeIngredient}</li>
        })}</ul>
        <p key={cake.rating}>Rating: {cake.rating}</p>
        </div>
    })

    return (
    <>
        <section>
            {individualCake}
        </section>
    </>
       
    )
}

export default Cakes;