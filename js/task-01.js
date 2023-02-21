// const allCategories = document.querySelector("ul#categories").children.length;
// console.log('Number of categories:' + allCategories);


const allCategories = document.querySelector("ul#categories");

const allItems = allCategories.querySelectorAll("li.item");
console.log(`Number of categories: ${allItems.length}`);

for(const item of allItems){
    const categoryName = item.querySelector("h2").textContent;
    console.log(`Category: ${categoryName}`);

    const categoryElements = item.querySelectorAll("li").length;
    console.log(`Elements: ${categoryElements}`);
};




