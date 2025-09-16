const loadLesson=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(fes=> fes.json())
    .then(data=> displayLevel(data.data))

}
const levelWord=(levelNo)=>{
    const url=`https://openapi.programming-hero.com/api/level/${levelNo}`
   fetch(url)
   .then(fes=>fes.json())
   .then(data=>displayWord(data.data))
}
const displayWord=(words)=>{
 const wordParent=document.getElementById("level-word-container");
 wordParent.innerHTML="";
 words.forEach(word=>{

 const createWordElement=document.createElement("div");
 createWordElement.innerHTML=`
   
<div class="bg-white text-center px-5 py-15 space-y-4 rounded-2xl">
  <h2 class="font-bold text-[32px] text-[rgba(0,0,0,1)]">${word.word}</h2>
  <p class="text-[#18181b] font-medium  text-[20px]"> "Meaning/pronounciation"</p>
  <p class="font-semibold text-[32px]  font-bangla text-
  [rgba(24, 24, 27, 1)]">${word.meaning} / ${word.pronunciation}</p>

<div class="flex justify-between items-center">
  <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
  <button class="btn"><i class="fa-solid fa-clock"></i></button>

</div>
</div>
 
 `
wordParent.append(createWordElement)
 })
}

const displayLevel=(levels)=>{
    // 1 get container

    const container=document.getElementById("vocabulary-container");
    container.innerHTML="";

    // 2get every lesson
    levels.forEach((level) => {
        // 3creaate element
    const levelElement=document.createElement('div');
    levelElement.innerHTML=`
    
  <button onclick="levelWord(${level.level_no})" class="btn btn-soft btn-primary">
  <i class="fa-brands fa-leanpub"></i> lesson -${level.level_no}
  </button>
    `

    //4 appeninto container
    container.append(levelElement)
    }) 
    
}
loadLesson()