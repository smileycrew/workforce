// create a transient state object later???
// create the functions to set changes later???
// this is going to be my data provider for everything
// start with making my fetch calls from the api
// function to fetch the employees from the database
export const fetchEmployees = async () => {
    const response = await fetch("http://localhost:8088/employees")
    const employees = response.json()
    return employees
}
// function to fetch the computers from the database
export const fetchComputers = async () => {
    const response = await fetch("http://localhost:8088/computers")
    const computers = await response.json()
    return computers
}
// function to fetch the departments from database
export const fetchDepartments = async () => {
    const response = await fetch("http://localhost:8088/departments")
    const departments = await response.json()

    return departments
}
// function to fetch the locations from the database
export const fetchLocations = async () => {
    const response = await fetch("http://localhost:8088/locations")
    const locations = await response.json()
    return locations
}
// function to fetch customers
export const fetchCustomers = async () => {
    const response = await fetch("http://localhost:8088/customers")
    const customers = await response.json()
    return customers
}
// function to fetch relationships
export const fetchRelationships = async () => {
    const response = await fetch("http://localhost:8088/relationships")
    const relationships = await response.json()
    return relationships
}