// wait for DOM load to add listeners
document.addEventListener("DOMContentLoaded", function () {
    const buttonIds = ["Home", "DashBoard", "Login"];

    buttonIds.forEach(function (buttonId) {
        const button = document.getElementById(buttonId);
        button.addEventListener("click", function () {
            navigate(buttonId);
        });
    });
});

// send to window based on where they click. 
function navigate(buttonId) {
    switch (buttonId) {
        case "Home":
            window.location.href = "/";
            break;
        case "DashBoard":
            window.location.href = "/dashboard";
            break;
        case "Login":
            window.location.href = "/login";
            break;
    }
}