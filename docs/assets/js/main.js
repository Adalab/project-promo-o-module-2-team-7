"use strict";const legends=document.querySelectorAll(".js-legend");function legendHandler(e){const a=e.currentTarget.children[1];collapse(e),a.classList.toggle("legend__arrow--up")}function collapse(e){e.currentTarget.nextElementSibling.classList.toggle("collapsed")}legends.forEach(e=>e.addEventListener("click",legendHandler));const colorOptions=document.querySelectorAll(".design__radio"),icon=document.querySelectorAll(".icon-js"),tinyRectangle=document.querySelector(".rectangle-js"),fullName=document.querySelector(".fullname-js"),cardIcons=document.querySelectorAll(".cardicon-js");function handleChangeColorCard(e){const a=data.palette;data.palette=a,"1"===a?(tinyRectangle.classList.remove("rectanglered"),tinyRectangle.classList.remove("rectanglemix"),tinyRectangle.classList.add("rectangleblue"),fullName.classList.remove("namered"),fullName.classList.remove("namemix"),fullName.classList.add("nameblue")):"2"===a?(tinyRectangle.classList.remove("rectangleblue"),tinyRectangle.classList.remove("rectanglemix"),tinyRectangle.classList.add("rectanglered"),fullName.classList.remove("namemix"),fullName.classList.remove("nameblue"),fullName.classList.add("namered")):"3"===a&&(tinyRectangle.classList.remove("rectangleblue"),tinyRectangle.classList.remove("rectanglered"),tinyRectangle.classList.add("rectanglemix"),fullName.classList.remove("namered"),fullName.classList.remove("nameblue"),fullName.classList.add("namemix"));for(const e of icon)"1"===a?(e.classList.remove("mixiconcircle"),e.classList.remove("rediconcircle"),e.classList.add("blueiconcircle")):"2"===a?(e.classList.remove("mixiconcircle"),e.classList.remove("iconbluecircle"),e.classList.add("rediconcircle")):"3"===a&&(e.classList.remove("rediconcircle"),e.classList.remove("iconbluecircle"),e.classList.add("mixiconcircle"));for(const e of cardIcons)"1"===a?(e.classList.remove("redicon"),e.classList.remove("mixicon"),e.classList.add("blueicon")):"2"===a?(e.classList.remove("blueicon"),e.classList.remove("mixicon"),e.classList.add("redicon")):"3"===a&&(e.classList.remove("redicon"),e.classList.remove("iblueicon"),e.classList.add("mixicon"))}for(const e of colorOptions)e.addEventListener("click",getPalette);const nameInput=document.querySelector(".js-fullname"),nameCard=document.querySelector(".js-nameInput"),jobInput=document.querySelector(".js-job"),jobCard=document.querySelector(".js-jobInput"),emailInput=document.querySelector(".js-email"),emailPreview=document.querySelector(".js_preview_email"),phoneInput=document.querySelector("#phone"),linkedinInput=document.querySelector("#linkedin"),gitHubInput=document.querySelector("#github"),linkedinLinkCard=document.querySelector(".js-linkedin-link"),githubLinkCard=document.querySelector(".js-github-link"),allInput=document.querySelectorAll(".fill__input-js");let data=JSON.parse(localStorage.getItem("data"))||{palette:"2",name:"Nombre y Apellido",job:"Front-end developer",phone:"",email:"",linkedin:"",github:"",photo:"https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg"};function getPalette(e){data.palette=e.target.value,handleChangeColorCard(data.palette)}function getUserData(e){let a=e.currentTarget.name,t=e.currentTarget.value;"name"===a?""===nameInput.value?nameCard.innerHTML="Nombre Apellido":(data.name=t,nameCard.innerHTML=data.name):"job"===a?""===jobInput.value?jobCard.innerHTML="Front-end developer":(data.job=t,jobCard.innerHTML=data.job):"phone"===a?data.phone=t:"email"===a?(data.email=t,emailPreview.href="mailto:"+t):"linkedin"===a?(data.linkedin=t,linkedinLinkCard.href=data.linkedin):"github"===a&&(data.github=t,githubLinkCard.href=data.github)}function handleInputData(e){e.preventDefault(),getUserData(e),setLocalStorage()}for(const e of allInput)e.addEventListener("keyup",handleInputData);const resetBtn=document.querySelector(".js-resetBtn");function setLocalStorage(){const e=JSON.stringify(data);localStorage.removeItem("data"),localStorage.setItem("data",e)}resetBtn.addEventListener("click",()=>{nameCard.innerHTML="Nombre Apellido",jobCard.innerHTML="Front-end developer",profilePreview.style.backgroundImage="url(https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg)",profileImage.style.backgroundImage="",data.palette="1",handleChangeColorCard(data.palette),sharecreation.classList.toggle("collapsed"),sharebutton.classList.toggle("sharebuttongrey"),data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:"https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg"}});const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const a=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(a)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const shareCreationLink=document.querySelector(".js-shareCreationLink"),twitterHref=document.querySelector(".share_creation__twitter"),linkedinHref=document.querySelector(".share_creation__linkedin"),facebookHref=document.querySelector(".share_creation__facebook"),messageNewCard=document.querySelector(".share_creation__title"),shareCardRrss=document.querySelectorAll(".js-share-RRSS");function sendUserInfo(){fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(!0===e.success){shareCreationLink.href=e.cardURL;for(const e of shareCardRrss)e.classList.remove("collapsed");shareCreationLink.innerHTML=e.cardURL,messageNewCard.innerText="La tarjeta ha sido creada:",twitterHref.href="https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20super%20molona%21&url="+e.cardURL,linkedinHref.href="https://www.linkedin.com/sharing/share-offsite/?url="+e.cardURL,facebookHref.href="http://www.facebook.com/share.php?u="+e.cardURL}else{for(const e of shareCardRrss)e.classList.add("collapsed");messageNewCard.innerText="¡Error!",shareCreationLink.innerHTML="Por favor, asegúrese de que ha cumplimentado todos los campos."}})}const sharebutton=document.querySelector(".share_button__item"),sharecreation=document.querySelector(".share_creation ");function clearError(){messageNewCard.innerHTML=""}function handleButtonClick(e){e.preventDefault(),sendUserInfo(),changeColor(),setLocalStorage()}function changeColor(){sharebutton.classList.toggle("sharebuttongrey"),sharecreation.classList.toggle("collapsed")}function rememberUserData(){nameInput.value=data.name,nameCard.innerHTML=data.name,jobInput.value=data.job,jobCard.innerHTML=data.job,emailInput.value=data.email,nameInput.value=data.name;const e=parseInt(data.palette)-1;colorOptions[e].checked=!0,phoneInput.value=data.phone,linkedinInput.value=data.linkedin,gitHubInput.value=data.github,profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`,linkedinLinkCard.href=data.linkedin,githubLinkCard.href=data.github}sharebutton.addEventListener("click",handleButtonClick),localStorage.getItem("data")&&rememberUserData();