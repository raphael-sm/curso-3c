const fotos = [
    "https://preview.redd.it/line-drawn-reaction-images-v0-e8qu39vybpcc1.jpg?width=640&crop=smart&auto=webp&s=375605c97412b2ff521fd98892d156438550c4c9",
    "https://preview.redd.it/how-in-the-world-does-this-subreddit-have-better-reaction-v0-hd4j01d4ujmb1.jpeg?width=263&format=pjpg&auto=webp&s=c3aa935a9dda8cc9cc583cf3ba707c24d563fe21",
    "https://preview.redd.it/show-me-your-best-reaction-images-v0-rvescfyv7m7e1.png?width=640&crop=smart&auto=webp&s=78a8d733339c20d2150537995ee75ce777e86f15",
    "https://preview.redd.it/send-me-your-best-reaction-images-when-someone-here-posts-v0-9kzab0ws3mcb1.jpeg?width=634&format=pjpg&auto=webp&s=901c56ea793746e43b9b4ba270800d018fd24dd3",
    "https://preview.redd.it/what-episode-season-was-it-where-patrick-put-a-water-jug-on-v0-cobqptp8h92h1.jpeg?width=640&format=pjpg&auto=webp&s=3172788cf27dc4b27127f242698e1c6b48ec697c",
    "https://preview.redd.it/reaction-image-of-the-day-v0-1sjxqne9such1.jpeg?auto=webp&s=e7427d30998d78c3719044180f7ea613e35039b9"
]

const gallery = document.getElementById("galeria");
const btn = document.getElementById("btn-remover-ultimo")

fotos.forEach(function(element) {
    const img = document.createElement("img")
    img.setAttribute('src', element)
    img.classList.add("imagem")
    gallery.appendChild(img)
});

btn.addEventListener("click", function(){
    gallery.lastElementChild.remove()
})