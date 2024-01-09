const allCategories = document.querySelectorAll(`.item`)
console.log(`Number of cetegories: ${allCategories.length} `);
allCategories.forEach(item => {
    const nameCategory = item.querySelector(`h2`);
    const categoryCount = item.querySelectorAll(`.name-box`);
    console.log(`Category: ${nameCategory.textContent}`);
    console.log(`Elements: ${categoryCount.length}`);
})