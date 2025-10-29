const recipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        category: "breakfast",
        prepTime: 15,
        difficulty: "easy",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        description: "Fluffy, golden pancakes perfect for weekend mornings. Serve with maple syrup and fresh berries.",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1 teaspoon salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs and then whisk in milk, melted butter, and vanilla.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour 1/4 cup of batter for each pancake and cook until bubbles form on surface.",
            "Flip and cook until golden brown. Serve immediately with syrup."
        ]
    },
    {
        id: 2,
        name: "Caesar Salad",
        category: "lunch",
        prepTime: 20,
        difficulty: "medium",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop",
        description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan cheese, and crunchy croutons.",
        ingredients: [
            "2 large heads romaine lettuce",
            "1/2 cup mayonnaise",
            "2 cloves garlic, minced",
            "2 tablespoons lemon juice",
            "1 tablespoon Worcestershire sauce",
            "1/2 cup grated Parmesan cheese",
            "2 cups croutons",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Wash and chop romaine lettuce into bite-sized pieces.",
            "In a small bowl, whisk together mayonnaise, minced garlic, lemon juice, and Worcestershire sauce.",
            "Season dressing with salt and pepper to taste.",
            "In a large bowl, toss lettuce with dressing until well coated.",
            "Add half the Parmesan cheese and toss again.",
            "Top with remaining cheese and croutons before serving."
        ]
    },
    {
        id: 3,
        name: "Spaghetti Carbonara",
        category: "dinner",
        prepTime: 25,
        difficulty: "medium",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        description: "Creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper. A true Roman classic.",
        ingredients: [
            "1 lb spaghetti",
            "6 oz pancetta or bacon, diced",
            "4 large egg yolks",
            "1 whole egg",
            "1 cup freshly grated Parmesan cheese",
            "Freshly ground black pepper",
            "Salt for pasta water",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, heat a large skillet and cook pancetta until crispy.",
            "In a bowl, whisk together egg yolks, whole egg, and most of the Parmesan cheese.",
            "Reserve 1 cup pasta water, then drain pasta.",
            "Add hot pasta to the skillet with pancetta and toss.",
            "Remove from heat and quickly stir in egg mixture, adding pasta water as needed.",
            "Season with black pepper and serve with remaining cheese."
        ]
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        category: "dessert",
        prepTime: 30,
        difficulty: "easy",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
        description: "Soft and chewy chocolate chip cookies that are crispy on the edges and tender in the center.",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a medium bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter and both sugars until light and fluffy.",
            "Beat in eggs one at a time, then stir in vanilla.",
            "Gradually mix in flour mixture until just combined.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown. Cool on baking sheet for 2 minutes."
        ]
    },
    {
        id: 5,
        name: "Vegetable Stir Fry",
        category: "vegetarian",
        prepTime: 20,
        difficulty: "easy",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        description: "Colorful and nutritious vegetable stir fry with a savory soy-based sauce. Quick and healthy!",
        ingredients: [
            "2 tablespoons vegetable oil",
            "1 bell pepper, sliced",
            "1 cup broccoli florets",
            "1 carrot, julienned",
            "1 zucchini, sliced",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "3 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 teaspoon cornstarch",
            "Green onions for garnish"
        ],
        instructions: [
            "Heat vegetable oil in a large wok or skillet over high heat.",
            "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
            "Add harder vegetables (carrots, broccoli) first and stir-fry for 2-3 minutes.",
            "Add remaining vegetables and continue stir-frying for 2-3 minutes.",
            "In a small bowl, mix soy sauce, sesame oil, and cornstarch.",
            "Pour sauce over vegetables and toss to coat.",
            "Cook for another minute until sauce thickens slightly.",
            "Garnish with green onions and serve immediately over rice."
        ]
    },
    {
        id: 6,
        name: "French Toast",
        category: "breakfast",
        prepTime: 15,
        difficulty: "easy",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
        description: "Golden, custardy French toast made with thick bread slices. Perfect for a special breakfast.",
        ingredients: [
            "8 thick slices of bread",
            "4 large eggs",
            "1 cup whole milk",
            "2 tablespoons sugar",
            "1 teaspoon vanilla extract",
            "1/2 teaspoon cinnamon",
            "Pinch of salt",
            "Butter for cooking",
            "Maple syrup for serving"
        ],
        instructions: [
            "In a shallow dish, whisk together eggs, milk, sugar, vanilla, cinnamon, and salt.",
            "Heat butter in a large skillet over medium heat.",
            "Dip each bread slice in the egg mixture, letting it soak for a few seconds on each side.",
            "Cook in the skillet for 2-3 minutes per side until golden brown.",
            "Serve immediately with maple syrup and powdered sugar if desired."
        ]
    },
    {
        id: 7,
        name: "Grilled Chicken Sandwich",
        category: "lunch",
        prepTime: 25,
        difficulty: "medium",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
        description: "Juicy grilled chicken breast on a toasted bun with fresh vegetables and creamy avocado.",
        ingredients: [
            "4 chicken breasts",
            "4 hamburger buns",
            "2 tablespoons olive oil",
            "1 teaspoon garlic powder",
            "1 teaspoon paprika",
            "Salt and pepper to taste",
            "1 avocado, sliced",
            "4 lettuce leaves",
            "1 tomato, sliced",
            "Mayonnaise"
        ],
        instructions: [
            "Season chicken breasts with olive oil, garlic powder, paprika, salt, and pepper.",
            "Preheat grill or grill pan to medium-high heat.",
            "Grill chicken for 6-7 minutes per side until internal temperature reaches 165°F.",
            "Let chicken rest for 5 minutes, then slice.",
            "Toast hamburger buns lightly.",
            "Assemble sandwiches with mayonnaise, lettuce, chicken, tomato, and avocado.",
            "Serve immediately."
        ]
    },
    {
        id: 8,
        name: "Beef Tacos",
        category: "dinner",
        prepTime: 30,
        difficulty: "medium",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1565299585323-38174c70a7df?w=400&h=300&fit=crop",
        description: "Flavorful seasoned ground beef tacos with fresh toppings and warm tortillas.",
        ingredients: [
            "1 lb ground beef",
            "8 small tortillas",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tablespoon chili powder",
            "1 teaspoon cumin",
            "1/2 teaspoon paprika",
            "Salt and pepper",
            "1 cup shredded cheese",
            "1 cup lettuce, shredded",
            "2 tomatoes, diced",
            "Sour cream and salsa"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat.",
            "Cook ground beef, breaking it up, until browned and cooked through.",
            "Add onion and garlic, cook until softened.",
            "Add chili powder, cumin, paprika, salt, and pepper.",
            "Cook for 2-3 minutes until fragrant.",
            "Warm tortillas in a dry skillet or microwave.",
            "Fill tortillas with beef mixture and desired toppings.",
            "Serve with sour cream and salsa on the side."
        ]
    },
    {
        id: 9,
        name: "Apple Pie",
        category: "dessert",
        prepTime: 60,
        difficulty: "hard",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&h=300&fit=crop",
        description: "Classic homemade apple pie with flaky crust and cinnamon-spiced apple filling.",
        ingredients: [
            "6-8 large apples, peeled and sliced",
            "2 pie crusts",
            "3/4 cup sugar",
            "2 tablespoons flour",
            "1 teaspoon cinnamon",
            "1/4 teaspoon nutmeg",
            "1/4 teaspoon salt",
            "2 tablespoons butter",
            "1 egg, beaten",
            "1 tablespoon sugar for sprinkling"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "In a large bowl, mix sliced apples with sugar, flour, cinnamon, nutmeg, and salt.",
            "Place bottom crust in a 9-inch pie pan.",
            "Fill with apple mixture and dot with butter pieces.",
            "Cover with top crust and seal edges.",
            "Cut several slits in top crust for steam vents.",
            "Brush with beaten egg and sprinkle with sugar.",
            "Bake for 15 minutes, then reduce to 350°F and bake 35-45 minutes until golden."
        ]
    },
    {
        id: 10,
        name: "Quinoa Buddha Bowl",
        category: "vegetarian",
        prepTime: 35,
        difficulty: "medium",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        description: "Nutritious and colorful bowl with quinoa, roasted vegetables, and tahini dressing.",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 sweet potato, cubed",
            "1 cup Brussels sprouts, halved",
            "1 red bell pepper, sliced",
            "2 tablespoons olive oil",
            "1/4 cup tahini",
            "2 tablespoons lemon juice",
            "1 tablespoon maple syrup",
            "1 clove garlic, minced",
            "1 avocado, sliced",
            "1/4 cup pumpkin seeds"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Rinse quinoa and cook in vegetable broth according to package directions.",
            "Toss sweet potato, Brussels sprouts, and bell pepper with olive oil, salt, and pepper.",
            "Roast vegetables for 20-25 minutes until tender and caramelized.",
            "For dressing, whisk together tahini, lemon juice, maple syrup, and garlic.",
            "Add water to thin dressing to desired consistency.",
            "Divide quinoa among bowls and top with roasted vegetables and avocado.",
            "Drizzle with tahini dressing and sprinkle with pumpkin seeds."
        ]
    }
];