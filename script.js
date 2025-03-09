document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let time = document.getElementById("time").value;

    alert(Tempahan berjaya! Nama: ${name}, Masa: ${time});
});
