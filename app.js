/*
  app.js: displays the recipes defined in recipes.js.
  You shouldn't need to edit this file to add recipes.
*/

const app = document.getElementById("app");

/* ---------- Helpers ---------- */

// Escape text so it is safe to put into HTML
function esc(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Turn 0.5 into "1/2", 1.33 into "1 1/3", etc.
function formatAmount(value) {
  const fractions = [
    [0, ""], [1 / 8, "1/8"], [1 / 4, "1/4"], [1 / 3, "1/3"], [3 / 8, "3/8"],
    [1 / 2, "1/2"], [5 / 8, "5/8"], [2 / 3, "2/3"], [3 / 4, "3/4"], [7 / 8, "7/8"], [1, ""]
  ];
  let whole = Math.floor(value);
  const rest = value - whole;
  let best = fractions[0];
  for (const f of fractions) {
    if (Math.abs(f[0] - rest) < Math.abs(best[0] - rest)) best = f;
  }
  if (best[0] === 1) whole += 1;
  const fracText = best[0] === 1 ? "" : best[1];
  if (whole === 0 && fracText === "") return "1/8"; // never show 0
  return [whole || "", fracText].filter(Boolean).join(" ");
}

// "cup" becomes "cups" when the amount is more than 1
function formatUnit(unit, amount) {
  if (!unit) return "";
  if (unit === "cup" && amount > 1) return "cups";
  return unit;
}

function formatIngredient(ing, servings, baseServings) {
  if (ing.amount == null) return esc(ing.name);
  const scaled = ing.amount * (servings / baseServings);
  const parts = [formatAmount(scaled), formatUnit(ing.unit, scaled), ing.name].filter(Boolean);
  return esc(parts.join(" "));
}

/* ---------- List page ---------- */

function showList(filterTag) {
  const allTags = [...new Set(RECIPES.flatMap(r => r.tags || []))].sort();
  const shown = filterTag ? RECIPES.filter(r => (r.tags || []).includes(filterTag)) : RECIPES;

  const tagButtons = [
    `<button class="tag-btn ${!filterTag ? "active" : ""}" data-tag="">All</button>`,
    ...allTags.map(t => `<button class="tag-btn ${t === filterTag ? "active" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`)
  ].join("");

  const cards = shown.map(r => `
    <a class="card" href="#/${esc(r.id)}">
      <h2>${esc(r.title)}</h2>
      <p>${esc(r.description)}</p>
      <div class="meta">${esc(r.time || "")} &middot; Serves ${r.servings}</div>
    </a>
  `).join("");

  app.innerHTML = `
    <h1>Recipes</h1>
    <div class="tags">${tagButtons}</div>
    <div class="grid">${cards || "<p>No recipes found.</p>"}</div>
  `;

  app.querySelectorAll(".tag-btn").forEach(btn => {
    btn.addEventListener("click", () => showList(btn.dataset.tag));
  });
}

/* ---------- Recipe page ---------- */

function showRecipe(recipe) {
  let servings = recipe.servings;

  function render() {
    const ingredients = recipe.ingredients
      .map(i => `<li>${formatIngredient(i, servings, recipe.servings)}</li>`)
      .join("");
    const steps = recipe.steps.map(s => `<li>${esc(s)}</li>`).join("");
    const notes = (recipe.notes || []).map(n => `<li>${esc(n)}</li>`).join("");
    const nutrition = recipe.nutrition
      ? `<section>
           <h2>Nutrition</h2>
           <p class="small">${esc(recipe.nutrition.label)}. Based on the original ${recipe.servings} servings; it does not change when you adjust servings.</p>
           <ul class="nutrition">
             ${recipe.nutrition.items.map(n => `<li><strong>${esc(n.name)}</strong> ${esc(n.value)}</li>`).join("")}
           </ul>
         </section>`
      : "";

    app.innerHTML = `
      <a href="#/" class="back">&larr; All recipes</a>
      <h1>${esc(recipe.title)}</h1>
      <p class="lead">${esc(recipe.description)}</p>
      <p class="meta">${esc(recipe.time || "")}</p>

      <section>
        <h2>Ingredients</h2>
        <div class="servings">
          <span>Servings:</span>
          <button id="minus" aria-label="Fewer servings">&minus;</button>
          <strong id="count">${servings}</strong>
          <button id="plus" aria-label="More servings">+</button>
        </div>
        <ul class="ingredients">${ingredients}</ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol class="steps">${steps}</ol>
      </section>

      ${notes ? `<section><h2>Notes</h2><ul>${notes}</ul></section>` : ""}
      ${nutrition}
      <button class="print-btn" onclick="window.print()">Print recipe</button>
    `;

    document.getElementById("minus").addEventListener("click", () => {
      if (servings > 1) { servings--; render(); }
    });
    document.getElementById("plus").addEventListener("click", () => {
      if (servings < 50) { servings++; render(); }
    });
  }

  render();
}

/* ---------- Routing (uses the part of the URL after #) ---------- */

function route() {
  const id = location.hash.replace(/^#\/?/, "");
  window.scrollTo(0, 0);
  if (!id) {
    document.title = "My Instant Pot Recipes";
    showList();
    return;
  }
  const recipe = RECIPES.find(r => r.id === id);
  if (recipe) {
    document.title = recipe.title;
    showRecipe(recipe);
  } else {
    app.innerHTML = `<p>Recipe not found. <a href="#/">Back to all recipes</a></p>`;
  }
}

window.addEventListener("hashchange", route);
route();
