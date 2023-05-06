$(readyNow)

function readyNow() {
    console.log('JS and JQ');

    $('#submitButton').on('click', addEmployee);
}
function addEmployee() {

    const firstNameIn = $('#firstNameInput').val();
    const lastNameIn = $('#lastNameInput').val();
    const idIn = $('#idInput').val();
    const titleIn = $('#titleInput').val();
    const annualSalaryIn = $('#annualSalaryInput').val();
    //delete button eventually

    $('tbody').append(`<tr>
    <td>${firstNameIn}</td>
    <td> ${lastNameIn}</td >
    <td>${idIn}</td>
    <td>${titleIn}</td>
    <td>${annualSalaryIn}</td>
    </tr > `)
}






