let offset = 0;

const testLine = document.querySelector('.facts__photo');

document.querySelector('.btn-next').addEventListener('click', function(){
    offset = offset + 350;
    if (offset > 1050){
        offset = 0;
    }
    testLine.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function(){
    offset = offset - 350;
    if (offset < 0){
        offset = 1050;
    }
    testLine.style.left = -offset + 'px';
});





function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,behavior:"smooth"
    });
}

let aboutNode = document.getElementById('js-about');
aboutNode.addEventListener('click', function(){
    scrollTo('#intro');
    console.log('About');
})

let skillsNode = document.getElementById('js-skills');
skillsNode.addEventListener('click', function(){
    scrollTo(skills);
    console.log("Skills")
})

let infoNode = document.getElementById('js-info');
infoNode.addEventListener('click', function(){
    scrollTo(facts);
    console.log("Info")
})

let contactsNode = document.getElementById('js-contacts');
contactsNode.addEventListener('click', function(){
    scrollTo(contacts);
    console.log("Contacts")
})




