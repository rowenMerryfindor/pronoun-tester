const name_entry = document.getElementById('name');
const pronouns_entry = document.getElementById('pronouns');

const user_name = document.getElementById('user-name');
const user_pronouns = document.getElementById('user-pronouns');

let pronouns = []

function submitName() {
    const value = name_entry.value.trim(); // trim whitespace

    if (value) {
        user_name.textContent = value;
    } else {
        alert("There was no name entered");
    }
}

function submitPronouns() {
        const value = pronouns_entry.value.trim(); // trim whitespace

    if (value) {
        if (pronouns.includes(value)) {
            if (confirm("You already have this pronoun added, Would you like to remove it?")) {
                pronouns.pop(value);
                user_pronouns.textContent = pronouns;
                if (pronouns = []) {
                    user_pronouns.textContent = "Blank";
                }
            }
        } else {
            pronouns.push(value);
            user_pronouns.textContent = pronouns;
        }
    }
}