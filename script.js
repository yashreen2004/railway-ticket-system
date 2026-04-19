function addTicket() {
    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;

    if (name === "" || destination === "") {
        alert("Please fill all details");
        return;
    }

    let list = document.getElementById("ticketList");

    let item = document.createElement("li");

    item.innerHTML = name + " → " + destination +
        " <button class='delete-btn' onclick='deleteTicket(this)'>Cancel</button>";

    list.appendChild(item);

    document.getElementById("name").value = "";
    document.getElementById("destination").value = "";
}

function deleteTicket(btn) {
    btn.parentElement.remove();
}
