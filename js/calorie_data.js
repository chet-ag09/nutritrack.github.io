  const foodList = document.getElementById("food-list");
let totalCalories = 0;

const calorieData = {
  "apple": 52,
  "banana": 89,
  "sandwich": 304,
  "pizza": 266,
  "lasanga": 135,
  "waffles": 291
  // ... add more food items and their calorie counts
};

function addCalorie() {
  const foodName = document.getElementById("food-name").value.toLowerCase(); // Ensure case-insensitive search
  const calories = calorieData[foodName];

  if (calories) {
    totalCalories += calories;
    const listItem = document.createElement("li");
    listItem.innerHTML = `${foodName}: ${calories} calories`;
    foodList.appendChild(listItem);
    document.getElementById("total-calories").innerHTML = `Total Calories: ${totalCalories}`;
    document.getElementById("food-name").value = ""; // Clear input field
  } else {
    alert("Calorie information not found for this food item.");
  }
}

