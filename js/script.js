let main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/550?api_key=e5078ac25311497ae421e00502e3954c')
.then(response => response.json())
.then(data => {
    console.log(data)
})