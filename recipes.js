/*
  ADDING A NEW RECIPE
  -------------------
  1. Copy any recipe block below (from "{" to "},") and paste it at the end of the list.
  2. Give it a unique "id" (lowercase, no spaces; it is used in the page URL).
  3. Change the text. Ingredient format:
       { amount: 1, unit: "cup", name: "dried black beans" }
     - "unit" is optional (leave it out for things like "3 garlic cloves")
     - "amount" is for the base "servings" number and scales automatically
     - use amount: null for things like "salt, to taste" (it will not scale)
  4. Save and refresh the page. That's it.
*/

const RECIPES = [
  {
    id: "black-beans-and-rice",
    title: "Instant Pot Black Beans and Rice",
    description: "A one-pot meal-prep staple: tender black beans and fluffy rice cooked together with aromatics. No soaking required.",
    servings: 4,
    time: "About 1 hour",
    tags: ["beans", "rice", "meal prep", "vegetarian"],
    ingredients: [
      { amount: 1, unit: "cup", name: "dried black beans, rinsed and picked over" },
      { amount: 1, unit: "cup", name: "long-grain white rice, rinsed" },
      { amount: 1, name: "small onion, diced" },
      { amount: 3, name: "garlic cloves, minced" },
      { amount: 1, name: "bell pepper, diced" },
      { amount: 1, unit: "tbsp", name: "ground cumin" },
      { amount: 1, unit: "tsp", name: "dried oregano" },
      { amount: 0.5, unit: "tsp", name: "smoked paprika" },
      { amount: 1, unit: "tbsp", name: "olive oil" },
      { amount: 4, unit: "cup", name: "vegetable or chicken broth" },
      { amount: 2, unit: "tsp", name: "salt, plus more to taste" },
      { amount: 1, name: "lime, cut into wedges (for serving)" },
      { amount: 0.25, unit: "cup", name: "fresh cilantro, chopped (for serving)" }
    ],
    steps: [
      "Set the Instant Pot to Sauté. Add the olive oil, then cook the onion and bell pepper for 3-4 minutes until softened. Add the garlic and cook for 30 seconds until fragrant.",
      "Add the black beans, cumin, oregano, smoked paprika, and salt. Stir to coat everything in the spices.",
      "Pour in the broth and stir. Cancel Sauté, seal the lid, and set to Pressure Cook (High) for 25 minutes.",
      "Press Cancel and let the pressure release naturally for 15 minutes, then carefully vent any remaining pressure.",
      "Open the lid and stir in the rice. Seal the lid again and set to Pressure Cook (High) for 4 minutes (3 minutes if using jasmine rice).",
      "Let the pressure release naturally for 10 minutes, then quick release any remainder. Fluff with a fork.",
      "Taste and adjust the salt. Serve topped with cilantro and a squeeze of lime."
    ],
    notes: [
      "Keeps 4-5 days in the fridge in an airtight container, or up to 3 months in the freezer.",
      "Add a splash of water or broth when reheating, since the rice firms up as it cools.",
      "If doubling the recipe, cooking times stay the same, but check your pot's max fill line."
    ],
    // Optional. Remove this block if you don't want nutrition shown.
    nutrition: {
      label: "Per serving (estimate)",
      items: [
        { name: "Calories", value: "~380 kcal" },
        { name: "Protein", value: "~15 g" },
        { name: "Carbs", value: "~67 g" },
        { name: "Fat", value: "~4 g" },
        { name: "Fiber", value: "~12 g" }
      ]
    }
  },

  {
    id: "lentil-soup",
    title: "Instant Pot Lentil Soup",
    description: "A hearty, budget-friendly soup that holds up beautifully in the fridge all week.",
    servings: 4,
    time: "About 45 minutes",
    tags: ["soup", "lentils", "meal prep", "vegetarian"],
    ingredients: [
      { amount: 1, unit: "tbsp", name: "olive oil" },
      { amount: 1, name: "onion, diced" },
      { amount: 2, name: "carrots, diced" },
      { amount: 2, name: "celery stalks, diced" },
      { amount: 3, name: "garlic cloves, minced" },
      { amount: 1, unit: "tsp", name: "ground cumin" },
      { amount: 1, unit: "tsp", name: "dried thyme" },
      { amount: 1, unit: "cup", name: "brown or green lentils, rinsed" },
      { amount: 4, unit: "cup", name: "vegetable or chicken broth" },
      { amount: 1, unit: "cup", name: "canned diced tomatoes, with juices" },
      { amount: 1, unit: "tsp", name: "salt, plus more to taste" },
      { amount: 1, unit: "tbsp", name: "lemon juice, to finish" }
    ],
    steps: [
      "Set the Instant Pot to Sauté. Add the olive oil, then cook the onion, carrots, and celery for 5 minutes until softened. Add the garlic, cumin, and thyme and cook for 30 seconds.",
      "Add the lentils, broth, tomatoes, and salt. Stir well and scrape up anything stuck to the bottom of the pot.",
      "Cancel Sauté, seal the lid, and set to Pressure Cook (High) for 10 minutes.",
      "Let the pressure release naturally for 10 minutes, then quick release any remainder.",
      "Stir in the lemon juice, taste, and adjust the salt. For a creamier soup, blend a few ladlefuls and stir them back in."
    ],
    notes: [
      "Soup thickens as it sits, so add a splash of broth or water when reheating.",
      "Freezes well for up to 3 months."
    ]
  },

  {
    id: "chickpea-curry",
    title: "Instant Pot Chickpea Curry",
    description: "Dried chickpeas cooked straight from the bag in a creamy, spiced tomato sauce. Great over rice.",
    servings: 4,
    time: "About 1 hour 15 minutes",
    tags: ["beans", "curry", "meal prep", "vegetarian"],
    ingredients: [
      { amount: 1, unit: "tbsp", name: "oil" },
      { amount: 1, name: "onion, diced" },
      { amount: 4, name: "garlic cloves, minced" },
      { amount: 1, unit: "tbsp", name: "fresh ginger, grated" },
      { amount: 2, unit: "tbsp", name: "curry powder" },
      { amount: 1, unit: "cup", name: "dried chickpeas, rinsed" },
      { amount: 2, unit: "cup", name: "vegetable broth" },
      { amount: 1, unit: "cup", name: "canned crushed tomatoes" },
      { amount: 1, unit: "tsp", name: "salt, plus more to taste" },
      { amount: 0.5, unit: "cup", name: "canned coconut milk" },
      { amount: 2, unit: "cup", name: "fresh spinach (optional)" }
    ],
    steps: [
      "Set the Instant Pot to Sauté. Add the oil and cook the onion for 4 minutes. Add the garlic, ginger, and curry powder and cook for 1 minute.",
      "Add the chickpeas, broth, crushed tomatoes, and salt. Stir and scrape the bottom of the pot.",
      "Cancel Sauté, seal the lid, and set to Pressure Cook (High) for 45 minutes.",
      "Let the pressure release naturally for 15 minutes, then quick release any remainder.",
      "Stir in the coconut milk and spinach (if using) and let it wilt for a minute or two. Taste and adjust the salt."
    ],
    notes: [
      "Serve over rice or with naan.",
      "Flavors deepen overnight, so it is even better the next day."
    ]
  }

  // Paste new recipes here (remember the comma after the previous one)
];
