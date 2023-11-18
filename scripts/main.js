import { getCustomerList } from "./CustomerList.js";
import { getEmployeeList } from "./EmployeeList.js";

const employeeEquipmentHTML = await getEmployeeList()
const customerHTML = await getCustomerList()
const render = () => {
    const containerElement = document.querySelector(".container")
    const html = `
        <section>
            ${employeeEquipmentHTML}
        </section>
        <section>
            ${customerHTML}
        </section
    `
    containerElement.innerHTML = html
}
render()