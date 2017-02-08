var window;
function openwindow() {
    window = window.open('','', 'width=100,height=100');
    window.focus();
}

function resizewindow() {
    window.resizeTo(500, 500);
    window.focus();
}