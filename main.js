// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  document.getElementById("player1_name").innerHTML = "player1_name: " + player1_name;
  document.getElementById("player2_name").innerHTML = "player2_name: " + player2_name;
  // Store these values locally
localStorage.setItem("player1_name")
localStorage.setItem("player2_name")
  //Assign "game_page.html" to window.location
  window.location("game_page.html")
}

