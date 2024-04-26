function showItems() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);

    var itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; 

    for (var i = 1; i <= quantity; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = "Produto " + i;
      itemList.appendChild(listItem);
    }
  }