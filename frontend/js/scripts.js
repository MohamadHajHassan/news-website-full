// import jQuery
const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);
const container = document.getElementById("container");
//
window.onload = () => {
    const container = document.getElementById("container");
    $.get(
        "http://localhost/news/get_news.php",
        data => {
            let news = ``;
            data.map(values => {
                news += `<div class="col-lg-3 col-md-5 card">
                <p class="text-primary">${values.title}</p>
                <p>${values.date}</p>
                <p>${values.descript}</p>
                <a class="btn btn-primary">Read more</a>
            </div>`;
            });
            container.innerHTML = news;
        },
        "json"
    );
};
