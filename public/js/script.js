function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Username or Password";
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

function markAttendance() {
    var name = document.getElementById("studentName").value;
    if (name === "") return;

    var attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({
        studentName: name,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    document.getElementById("studentName").value = "";
    loadAttendance();
}

function loadAttendance() {
    var attendance = JSON.parse(localStorage.getItem("attendance")) || [];
    var list = document.getElementById("attendanceList");

    if (!list) return;

    list.innerHTML = "";

    attendance.forEach(function(record) {
        var li = document.createElement("li");
        li.textContent = record.studentName + " - " + record.date;
        list.appendChild(li);
    });
}
