// const input = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const imgContainer = document.querySelector('.img-container');
// submit.addEventListener('click', async function() {
//     const count = input.value;
//     console.log(count)
//     if( count < 1 || count > 100) {
//         alert('Please enter a number between 1 and 10');
//     }else {
//         for( let i=0;i < count;i++) {
//             const img = document.createElement('img');
//             img.src = `https://picsum.photos/200/300/?random/${i}`;
//             imgContainer.appendChild(img);
//         }
//     }
// });


const input=document.getElementById("input");
const button=document.getElementById('click-button');
const image=document.getElementsByClassName("image-container")[0];

button.addEventListener('click',async function() {
    

    const count =input.value;
    console.log(count);
    if(1>count ||count>100 ){
        alert("enter a nu. between 1 to 100");
    }
    else{
        for(let i=0; i<count;i++){
     const img=document.createElement('img');
     img.src=`https://picsum.photos/200/300/?random/${i}`;
     image.appendChild(img);
        }
    }
});