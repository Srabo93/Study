// Topic: Organizing similar data using structs
//
// Requirements:
// * Print the flavor of a drink and it's fluid ounces
//
// Notes:
// * Use an enum to create different flavors of drinks
// * Use a struct to store drink flavor and fluid ounce information
// * Use a function to print out the drink flavor and ounces
// * Use a match expression to print the drink flavor

enum Flavour {
    Strawberry,
    Melon,
    Apple,
    Paer,
}
struct Drink {
    flavor: Flavour,
    ounces: i32,
}
fn main() {
    let sweet = Drink {
        flavor: Flavour::Strawberry,
        ounces: 8,
    };

    fn print_data(drink: Drink) {
        println!("{}", drink.ounces);
        match drink.flavor {
            Flavour::Strawberry => println!("strawberry bruv"),
            _ => println!("kaputt"),
        }
    }

    print_data(sweet);
}
