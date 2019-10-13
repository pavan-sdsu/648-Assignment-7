/*eslint-env browser*/
var inventory = [
	[4824, "Shirt", 10, 15.99],
	[6343, "Jeans", 22, 39.99],
	[3223, "Socks", 36, 9.99],
	[2233, "Hat", 12, 14.99],
	[9382, "Jacket", 5, 49.99]
]

while (true) {
	window.console.log('COMMANDS:');
	window.console.log("view - view products of the inventory \nupdate - update a product quantity. \nexit - exit the program.");
	var choice = prompt("Enter command");

	if (choice == "view") {
		inventory.sort();
		for (let i = 0; i < inventory.length; i++) {
			const el = inventory[i];
			window.console.log(el[0] + " " + el[1] + " (" + el[2] + ") $" + el[3]);
		}
	}

	if (choice == "update") {
		var sku = prompt("Enter sku")
		var quantity = prompt("Enter quantity")
		for (let i = 0; i < inventory.length; i++) {
			if(inventory[i][0] == sku) {
				inventory[i][2] = Number(quantity)
			}
		}
	}

	if (choice == "exit") break;

}