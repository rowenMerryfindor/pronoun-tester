const name_entry = document.getElementById('name');

const user_name = document.getElementById('user-name');

function submitName() {
    user_name.textContent = name_entry.value;
}