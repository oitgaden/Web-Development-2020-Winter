function validate() {
    
    document.getElementById('first-name-error').style.visibility = 'hidden';
    document.getElementById('last-name-error').style.visibility = 'hidden';

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;

    if (firstName == '') {
        document.getElementById('first-name-error').style.visibility = 'visible';
        return;
    }

    if (lastName == '') {
        document.getElementById('last-name-error').style.visibility = 'visible';
        return;
    }

    window.location = 'index.html';
}