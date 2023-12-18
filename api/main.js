const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'
const ALBUM_API_URL = 'https://jsonplaceholder.typicode.com/albums'
const PHOTO_API_URL = 'https://jsonplaceholder.typicode.com/photos'

const btnPost = document.getElementById('#btn_post');
const btnAlbums = document.getElementById('#btn_albums');
const btnPhoto = document.getElementById('#btn_photo');
const ulEle = document.querySelector('ul');




const getAPI_Post = async () => {
    try{
        let response = await fetch(POST_API_URL);
        let data =await response.json();
        let html = '';
        data.forEach((dat) => {
            html+=`<li>${dat.title}</li>`
        });
        ulEle.innerHTML = html;
    }catch(err){
        console.log(err)
    }
}
const getAPI_Photo = async () => {
    try{
        let response = await fetch(PHOTO_API_URL);
        let data =await response.json();
        let html = '';
        data.forEach((dat) => {
            html+=`<li>${dat.title}</li>`
        });
        ulEle.innerHTML = html;
    }catch(err){
        console.log(err)
    }
}
const getAPI_Albums = async () => {
    try{
        let response = await fetch(ALBUM_API_URL);
        let data =await response.json();
        let html = '';
        data.forEach((dat) => {
            html+=`<li>${dat.title}</li>`
        });
        ulEle.innerHTML = html;
    }catch(err){
        console.log(err)
    }
}
getAPI_Post();
// btnAlbums.addEventListener("click", ()=>{
//     getAPI_Albums();
// )
// btnPhoto.addEventListener("click" .)




 




