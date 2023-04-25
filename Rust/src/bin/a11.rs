// Topic: Ownership
//
// Requirements:
// * Print out the quantity and id number of a grocery item
//
// Notes:
// * Use a struct for the grocery item
// * Use two i32 fields for the quantity and id number
// * Create a function to display the quantity, with the struct as a parameter
// * Create a function to display the id number, with the struct as a parameter

struct Grocery {
    id: i32,
    quantity: i32,
}
fn main() {
    let item = Grocery {
        id: 458,
        quantity: 30,
    };

    fn display_quantity(item: &Grocery) {
        println!("Quantity {}", item.quantity);
    }

    fn display_id(item: &Grocery) {
        println!("Id {}", item.id);
    }

    display_id(&item);
    display_quantity(&item);
}
