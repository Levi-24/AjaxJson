function readJson(){
    let url = "https://dummyjson.com/products";
    //kiszervezett fuggveny meghivasa
    sendRequest(url, "GET", null, function(posts){
        console.log(posts);
        let postList = "";
        posts.products.forEach(post => {
            postList += `
            <div class="col-lg-4 col-md-6 col-sm-12">
            <img calss="img-fluid" src="${post.thumbnail}">
            <h3>${post.title}</h3>
            </div>
            `;
        });
        document.getElementById("result-container").innerHTML = postList;
    });
}

//kiszervezett fugveny
function sendRequest(url, method, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
            console.log(xhr.responseText);
        }
    }
    xhr.open(method, url);
    xhr.send();
}

window.onload = readJson();


//Univerzalis
/*
function readJson(){
    let url = "https://dummyjson.com/products";
    //kiszervezett fuggveny meghivasa
    sendRequest(url, "GET", null, function(){

    });
}

//kiszervezett fugveny
function sendRequest(url, method, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
            console.log(xhr.responseText);
        }
    }
    xhr.open(method, url);
    xhr.send();
}

window.onload = readJson();
*/