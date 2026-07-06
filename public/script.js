console.log("script.js loaded");

document.querySelector("button").addEventListener("click", async () => {

    console.log("Button clicked!");

    const message = document.getElementById("message").value;

    try {
        const response = await fetch("/announce", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Announcement",
                message: message
            })
        });

        console.log("Response received:", response);

        const data = await response.json();

        console.log(data);

        alert("Done!");

    } catch (err) {
        console.error(err);
    }

});