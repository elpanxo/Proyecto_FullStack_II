function showContent(sectionId){
    document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
}

let employees = [];
let editingIndex = null;

function openEmployeeForm(){
    document.getElementById("employeeForm").classList.remove("hidden");
    document.getElementById("employeeForm").reset();
    editingIndex = null;
}

function addEmployee(event){
    event.preventDefault();

    const employee = {
        nombre: document.getElementById("nombre").value,
        rut: document.getElementById("rut").value,
        nacimiento: document.getElementById("edad").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        cargo: document.getElementById("cargo").value,
    };

    if(editingIndex !== null){
        employees[editingIndex] = employee;
        editingIndex = null;
    } else {
        employees.push(employee);
    }

    renderEmployees();
    document.getElementById("employeeForm").classList.add("hidden");
}

function renderEmployees(){
    const tableBody = document.getElementById("employeesTable");
    tableBody.innerHTML = employees.map((emp, index) => `
      <tr class="border-b hover:bg-gray-50">
        <td class="p-2 border">${emp.nombre}</td>
        <td class="p-2 border">${emp.rut}</td>
        <td class="p-2 border">${emp.nacimiento}</td>
        <td class="p-2 border">${emp.correo}</td>
        <td class="p-2 border">${emp.telefono}</td>
        <td class="p-2 border">${emp.direccion}</td>
        <td class="p-2 border">${emp.cargo}</td>
        <td class="p-2 border text-center">
          <button onclick="editEmployee(${index})" class="text-blue-600 hover:text-blue-800 mr-2">
            Editar
          </button>
          <button onclick="confirmDelete(${index})" class="text-red-600 hover:text-red-800">
            Eliminar
          </button>
        </td>
      </tr>
    `).join("");
}

function editEmployee(index){
    const emp = employees[index];
    document.getElementById("nombre").value = emp.nombre;
    document.getElementById("rut").value = emp.rut;
    document.getElementById("edad").value = emp.nacimiento; // CORREGIDO
    document.getElementById("correo").value = emp.correo;
    document.getElementById("contraseña").value = emp.contraseña;
    document.getElementById("telefono").value = emp.telefono;
    document.getElementById("direccion").value = emp.direccion;
    document.getElementById("cargo").value = emp.cargo;

    editingIndex = index;
    document.getElementById("employeeForm").classList.remove("hidden");
}

let employeeToDelete = null;

function confirmDelete(index){
    employeeToDelete = index;
    document.getElementById("confirmModal").classList.remove("hidden");
}

function closeModal(){
    document.getElementById("confirmModal").classList.add("hidden");
    employeeToDelete = null;
}

document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    if(employeeToDelete !== null){
        employees.splice(employeeToDelete, 1);
        renderEmployees();
        closeModal();
    }
});
