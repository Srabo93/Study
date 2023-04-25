// Topic: Result & the question mark operator
//
// Requirements:
// * Determine if an employee can access a building using a digital keycard
// * Employees that can access the building are:
//   * Maintenance crews
//   * Marketing department employees
//   * Managers
// * Other employees that work at the company are:
//   * Line supervisors
//   * Kitchen staff
//   * Assembly technicians
// * Ensure that terminated employees cannot access the building
//   regardless of their position
//
// Notes:
// * Use an enum to represent all types of employees
// * Use a struct to store the employee type and whether they are
//   still employed
// * Use a function that returns a Result to determine if the employee
//   may enter the building
// * Print whether the employee may access the building
//   * Must use a function that utilizes the question mark operator to do this

enum Position {
    Maintenance,
    Marketing,
    Managers,
    Line,
    Kitchen,
    Assembly,
}
enum Status {
    Active,
    Terminated,
}
struct Employee {
    position: Position,
    status: Status,
}
fn try_access(employee: &Employee) -> Result<(), String> {
    match employee.status {
        Status::Terminated => return Err("Employee is not granted access".to_owned()),
        Status::Active => (),
    }
    match employee.position {
        Position::Maintenance => Ok(()),
        Position::Marketing => Ok(()),
        Position::Managers => Ok(()),
        _ => Err("invalid position".to_owned()),
    }
}
fn print_access(employee: &Employee) -> Result<(), String> {
    let attempt_access = try_access(employee)?;
    println!("access okay");
    Ok(())
}
fn main() {
    let manager = Employee {
        position: Position::Managers,
        status: Status::Active,
    };
    match print_access(&manager) {
        Err(e) => println!("access denied: {:?}", e),
        _ => (),
    }
}
