let = totalMonthly = 0;

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

    if (firstNameIn || lastNameIn || idIn || titleIn || annualSalaryIn === undefined) {
        alert('Please fill out all fields')
        return false;
    }

    $('tbody').append(`<tr>
    <td>${firstNameIn}</td>
    <td> ${lastNameIn}</td >
    <td>${idIn}</td>
    <td>${titleIn}</td>
    <td>${annualSalaryIn}</td>
    <td><button id='deleteButton'>Retired/Terminated</button></td>
    </tr > `)
    //monthly tracker math
    totalMonthly += Math.round(Number($('#annualSalaryInput').val()) / 12);

    monthlyTracker();

    //clear inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');


}
//delete button below
function deleteEmployee(event) {
    $(event.target).closest('tr').remove();
}
//monthly tracker below
function monthlyTracker() {
    $('#monthlyCount').text(`
    $
    ${totalMonthly}
    .00
    `)
    //red text conditional below
    if (totalMonthly >= 20000) {
        $('#monthlyCount').css('color', 'Red')
    }
}




