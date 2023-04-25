// Topic: Decision making with match
//
// Program requirements:
// * Display "one", "two", "three", or "other" based on whether
//   the value of a variable is 1, 2, 3, or some other number,
//   respectively
//
// Notes:
// * Use a variable set to any integer
// * Use a match expression to determine which message to display
// * Use an underscore (_) to match on any value

fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7];

    for number in numbers {
        match number {
            1 => println!("{}", number),
            2 => println!("{}", number),
            3 => println!("{}", number),
            4 => println!("{}", number),
            other => println!("{}", other),
        }
    }
}
