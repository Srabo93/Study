// Topic: Working with an enum
//
// Program requirements:
// * Prints the name of a color to the terminal
//
// Notes:
// * Use an enum with color names as variants
// * Use a function to print the color name
// * The function must use the enum as a parameter
// * Use a match expression to determine which color
//   name to print

enum Colors {
    Blue,
    Violet,
    Green,
    Yellow,
}
fn main() {
    let color_vector = vec![Colors::Blue, Colors::Violet, Colors::Green, Colors::Yellow];
    fn print_color(color: Colors) {
        match color {
            Colors::Blue => println!("blue"),
            Colors::Green => println!("green"),
            Colors::Violet => println!("violet"),
            Colors::Yellow => println!("yellow"),
        }
    }

    for color in color_vector {
        print_color(color);
    }
}
