async function getData() {
        const response = await fetch("http://localhost:3000/json");
        const data = await response.json();
        console.log(data)
        document.querySelector(".container").innerText = data;
}

async function postData() {
        const response = await fetch("http://localhost:3000", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify({
                        title: "fillip er kul"
                })
        })
        const data = await response.json();
        console.log(data)
}

// async function putData() {
//         const response = await fetch("http://localhost:3000", {
//                 method: "PUT"
//         })
//         const data = await response.text();
//         console.log(data)
// }

getData()
postData()
// putData()