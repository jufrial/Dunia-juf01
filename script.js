
document.addEventListener("DOMContentLoaded", function () {
    const dialogText = document.getElementById("dialog-text");
    const texts = [
        "Sore itu, Juf duduk di bangku taman, lalu datanglah Shira...",
        "Shira: Hai Juf... lama nggak ketemu ya.",
        "Juf: Iya, aku senang kamu datang hari ini...",
        "Shira tersenyum... dan duduk di sebelah Juf."
    ];
    let index = 0;

    document.getElementById("dialog-box").addEventListener("click", () => {
        index++;
        if (index < texts.length) {
            dialogText.textContent = texts[index];
        } else {
            dialogText.textContent = "..." // end of dialog
        }
    });
});
