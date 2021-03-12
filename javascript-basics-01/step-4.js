function info() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    alert("Hello , "+name+" "+surname+" "+city);
}
document.getElementById("validate").addEventListener("click", info);