import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployees, fetchLocations, fetchRelationships } from "./TransientState.js"

export const getEmployeeList = async () => {
    const employees = await fetchEmployees()
    const computers = await fetchComputers()
    const departments = await fetchDepartments()
    const locations = await fetchLocations()
    const customers = await fetchCustomers()
    const relationships = await fetchRelationships()
    let html = ""
    employees.map((employee) => {
        const findComputer = computers.find(computer => computer.id === employee.computerId)
        const findDepartment = departments.find(department => department.id === employee.departmentId)
        const findLocation = locations.find(location => location.id === employee.locationId)
        const filterRelationships = relationships.filter(relationship => relationship.employeeId === employee.id)
        const mapFilterRelationships = filterRelationships.map((relationship) => {
            const findCustomer = customers.find(customer => customer.id === relationship.customerId)
            return `<li>${findCustomer.name}</li>`
        })
        html += `
            <div class="employee">
                <header class="employee__name">
                    <h1>${employee.firstName} ${employee.lastName}</h1>
                </header>
                <section class="employee__computer">
                    Currently using a ${findComputer.year} ${findComputer.model}
                </section>
                <section class="employee__department">
                    Works in the ${findDepartment.name} deparment
                </section>
                <section class="employee__location">
                    Works at the ${findLocation.name} location
                </section>
                <section class="employee__customers">
                    Has worked for the following customers.
                    <ul>
        `
        html += mapFilterRelationships.join("")
        html += `
                    </ul>
                </section >
            </div >
        `
    })
    return html
}