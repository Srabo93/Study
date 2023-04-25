// Topic: Option
//
// Requirements:
// * Print out the details of a student's locker assignment
// * Lockers use numbers and are optional for students
//
// Notes:
// * Use a struct containing the student's name and locker assignment
// * The locker assignment should use an Option<i32>

// * Use a struct containing the student's name and locker assignment
// * The locker assignment should use an Option<i32>
struct Locker {
    name: String,
    assignment: Option<i32>,
}
fn main() {
    let new_locker = Locker {
        name: "Harmin".to_owned(),
        assignment: Some(29),
    };

    fn print_locker(locker: Locker) {
        match locker.assignment {
            Some(assignment) => println!("{}", assignment),
            None => println!("no assignment"),
        }
    }
    print_locker(new_locker)
}
