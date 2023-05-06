$(readyNow)

function readyNow() {
    console.log('JS and JQ');

    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click', '#deleteButton', deleteEmployee);
}
function addEmployee() {

    const firstNameIn = $('#firstNameInput').val();
    const lastNameIn = $('#lastNameInput').val();
    const idIn = $('#idInput').val();
    const titleIn = $('#titleInput').val();
    const annualSalaryIn = $('#annualSalaryInput').val();
    //delete button below

    $('tbody').append(`<tr>
    <td>${firstNameIn}</td>
    <td> ${lastNameIn}</td >
    <td>${idIn}</td>
    <td>${titleIn}</td>
    <td>${annualSalaryIn}</td>
    <td><button id='deleteButton'>Delete</button></td>
    </tr > `)

    //clear inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}

function deleteEmployee(event) {
    $(event.target).closest('tr').remove();
}




