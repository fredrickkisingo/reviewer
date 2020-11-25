// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Hello i really enjoyed this service!",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "I highly reccomend this to anyone who wants to give a shot at web development",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "I find internship a very pivotal stage in my career and using this site enabled me to gain more insights on interning",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "I found this particular service very efficient to use and i willl highly reccomend it to any user who wants to give a shot at web development ",
  },
];

//select items
const img =document.getElementById("person-img");
const author =document.getElementById("author");
const job =document.getElementById("job");
const info=document.getElementById("info");

const prevBtn= document.querySelector('.prev-btn')
const nextBtn= document.querySelector('.next-btn')
const randomBtn= document.querySelector('.random-btn')

//set starting item
let currentItem  = 0;

//load intial item
window.addEventListener("DOMContentLoaded",function(){
  showPerson();
});

//show person based on item 
function showPerson(){
  const item= reviews[currentItem];
  img.src = item.img;
  author.textContent= item.name;
  job.textContent= item.job;
  info.textContent= item.text;
}

//show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem> reviews.length -1){
      currentItem=0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }

  showPerson();
});

//show random person
randomBtn.addEventListener('click',function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
