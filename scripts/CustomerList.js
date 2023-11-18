import { fetchCustomers, fetchEmployees, fetchRelationships } from "./TransientState.js"


export const getCustomerList = async () => {
    const employees = await fetchEmployees()
    const customers = await fetchCustomers()
    const relationships = await fetchRelationships()
    let html = ""
    customers.map((customer) => {
        const filterRelationships = relationships.filter(relationship => relationship.customerId === customer.id)
        const mapFilterRelationships = filterRelationships.map((relationship) => {
            const findEmployee = employees.find(employee => employee.id === relationship.employeeId)
            return `<li>${findEmployee.firstName} ${findEmployee.lastName}</li>`
        })
        html += `
            <div class="customer">
                <header class="customer__name">
                    <h1>${customer.name}</h1>
                </header>
                <section class="employee__customers">
                    Has worked for the following employees.
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