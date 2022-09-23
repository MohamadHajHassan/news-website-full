// import jQuery
const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);
const container = document.getElementById("container");
//
window.onload = () => {
    const container = document.getElementById("container");
    // Fetch the get news api using jQuery
    $.get(
        "http://localhost/news/get_news.php",
        data => {
            let news = ``;
            data.map(values => {
                news += `<div class="col-lg-3 col-md-5 card">
                <h3 class="text-primary">${values.title}</h3>
                <h6>${values.date}</h6>
                <p>${values.descript}</p>
                <a class="btn btn-primary">Read more</a>
            </div>`;
            });
            container.innerHTML = news;
        },
        "json"
    );
};
