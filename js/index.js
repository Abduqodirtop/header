let body = document.querySelector('body')
let elheader = document.createElement('header')
elheader.classList.add('header')
let elcontainer = document.createElement('div')
elcontainer.classList.add('container')
let  elwrapper = document.createElement('div')
elwrapper.classList.add('header__wrapper')
let ellink = document.createElement('a')
ellink.classList.add('header__link')
let elimg = document.createElement('img')
elimg.classList.add('header__img')
elimg.src = './img/logo.svg'
let ellist = document.createElement('ul')
ellist.classList.add('header__list')
let elitem = document.createElement('li')
elitem.classList.add('header__item')
let elitem2 = document.createElement('li')
elitem2.classList.add('header__item2')
let elitem3 = document.createElement('li')
elitem3.classList.add('header__item3')
body.append(elheader)
elheader.append(elcontainer)    
elcontainer.append(elwrapper)
elwrapper.append(ellink,ellist,elitem,elitem2,elitem3)
ellink.append(elimg)
