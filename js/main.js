const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name" : "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


let contenitore = document.getElementById("container")
contenitore.innerHTML= ""
for (let i = 0; i < posts.length; i++) {
    const postEle = posts[i];
    contenitore.innerHTML+= 
    ` <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon" id="imageProfile">
                <img class="profile-pic" src="${postEle.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data" id="author">
                <div class="post-meta__author">${postEle.author.name}</div>
                <div class="post-meta__time">${postEle.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text" id="content">${postEle.content}</div>
    <div class="post__image" id="postImage">
        <img src=" ${postEle.media} " alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1" id="miPiace">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter" id="counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${postEle.likes}</b> persone
            </div>
        </div> 
    </div>            
</div> 

    `
}

let likeArray = [];

let buttonBlue = document.querySelectorAll(".like-button") 
for (let i = 0; i < buttonBlue.length; i++) {
    const buttonEle = buttonBlue[i];
    buttonEle.addEventListener ("click", function(e){
        e.preventDefault();
        let classAdd = "like-button--liked";
        let contatore = document.querySelectorAll(".js-likes-counter")
        let like = contatore[i].innerText
        
        
        if(!buttonEle.classList.contains(classAdd)){
            buttonEle.classList.add(classAdd)
            like++
            contatore[i].innerText = like            
        
        }
    
        
})
}




