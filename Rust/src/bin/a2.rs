// Topic: Basic arithmetic
//
// Program requirements:
// * Displays the result of the sum of two numbers
//
// Notes:
// * Use a function to add two numbers together
// * Use a function to display the result
// * Use the "{:?}" token in the println macro to display the result

fn main() {
    fn add(x: i32, y: i32) -> i32 {
        x + y
    }
    fn display(data: i32) {
        println!("number is {}", data);
    }

    let result = add(1, 2);

    display(result);
}
