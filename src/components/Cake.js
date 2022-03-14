
// importing the file path for images 
import lemonDrizzle from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/lemonDrizzle.jpeg'
import teaLoaf from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/teaLoaf.jpeg'
import brownie from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/brownie.png'
import carrotCake from '/Users/alimaa/Documents/coursework/week_09/day_1/bakery_components_exercise/src/images/carrotCake.png'

// creating a function for the cake items
const Cakes = () => {

    // an array to store the different types of cakes and properties for each cake
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

 // creating a new function that loops through the 'cakes' items 
//using .map so for every element in the cake array you perfom the following 'cake' function
    const individualCake = cakes.map(cake => {
        // returning the name for every cake in the array
        /* returning the image for every cake element */
        // creating an unordered list with li tags within it 
        // looping through the ingredients of cakes using .map, and apply a function to each ingredient
        // the function we want to apply to each ingredient is enclosed within li tags bec we want all the ingredients to show as a bullet point
        // this function also gets all the rating for the each cake in the cake array


        // within the ul tag we want to enclose cakeName, ingredient (each ingredient will appear as a bullet point - its enclosed in li tag) and rating 
        // each ul element will have unique key - each ul is a cake from the cakes array
        
        return <div key={cake.cakeName}><p>Cake Name: {cake.cakeName}</p>
            <img src={cake.img} alt={cake.cakeName} width="200"/>
            
        <ul key={cake.cakeName}>Ingredients: {cake.ingredients.map(cakeIngredient => {
            return <li key={cakeIngredient}>{cakeIngredient}</li>
        })}</ul>
        
        <p key={cake.rating}>Rating: {cake.rating}</p>
        </div>
    })


    // calling on the function 'individualCake' 
    return (
    <>
        <section>
            {individualCake}
        </section>
    </>
       
    )
}

// allows the 'Cakes' function to be called elsewhere
export default Cakes;