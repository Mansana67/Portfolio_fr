
//VARIABLES NAVBAR
    const btnMobileMenu = document.querySelector('.mobile-menu');
    const btnExitMobileMenu = document.querySelector('#mobile-exit');
    let nav = document.querySelector('nav');

    btnMobileMenu.addEventListener('click', () => {
        nav.classList.add('show-nav');
        nav.classList.remove('hide-nav');
    })

    btnExitMobileMenu.addEventListener('click', () => {
        nav.classList.remove('show-nav');
        nav.classList.add('hide-nav');
    })

//VARIABLES content Bar
    const menuContent = document.querySelector('.content');
    const btnSubMenu = document.querySelector('.sub-menu');
    const closeMenuConent = document.querySelector('.close-arrow');

    btnSubMenu.addEventListener('click', () => {
        menuContent.classList.add('showMenu');
        menuContent.classList.remove('hide-sub-menu');
    })

    closeMenuConent.addEventListener('click', () => {
        menuContent.classList.remove('showMenu');
        menuContent.classList.add('hide-sub-menu');
    })



//BTN PARCOURS NAVBAR
    var btnList = document.querySelectorAll('.btn');
        btnList.forEach(btnSel => {
            btnSel.addEventListener('click', () => {
                document.querySelector('.current')?.classList.remove('current');
                btnSel.classList.add('current');
                document.querySelector('.btn-content')?.classList.remove('btn-content');
            })     
        })

//BTN PARCOURS CONTENT
    var btnContent = document.querySelectorAll('.btn-style-submenu');
        btnContent.forEach(btnCon => {
            btnCon.addEventListener('click', () => {
                document.querySelector('.btn-content')?.classList.remove('btn-content');
                btnCon.classList.add('btn-content');
                document.querySelector('.current')?.classList.remove('current');      
            })
        })

//SHOW CONTENT IN NAVBAR

    //btn variables
        const btnAccueil = document.querySelector('#accueil');
        const btnPhotoVid = document.querySelector('#photo-video');
        const btnArticle = document.querySelector('#article');
        const btnContact = document.querySelector('#contact');


    //NAVBAR Variables
        const accueil = document.querySelector('.accueil');
        const vidImg = document.querySelector('.video-image');
        const article = document.querySelector('.article');
        const contact = document.querySelector('.contact');
        const divImg = document.querySelector('.image');

    //CONDITIONS NAVBAR
        if(btnAccueil.classList.contains('current')){
            accueil.style.display = 'block';
            vidImg.style.display ='none';
            article.style.display ='none';
            contact.style.display ='none';
            divImg.style.display="none";

        }

        btnList.forEach(showDiv => {
            showDiv.addEventListener('click', () => {
                if(btnAccueil.classList.contains('current')){
                    accueil.style.display = 'block';
                    accueil.classList.add('slide');
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divPres.style.display="none";
                    divPropos.style.display="none";
                    divLien.style.display="none";
                    divMale.style.display="none";
                    divFemelle.style.display="none";
                    divChiots.style.display="none";
                    divFuturePortees.style.display="none";
                    divImg.style.display="none";
                }
            })
        })

        btnList.forEach(showDiv => {
            showDiv.addEventListener('click', () => {
                if(btnPhotoVid.classList.contains('current')){
                    accueil.style.display = 'none';
                    vidImg.style.display ='block';
                    vidImg.classList.add('slide');
                    article.style.display ='none';
                    contact.style.display ='none';
                    divPres.style.display="none";
                    divPropos.style.display="none";
                    divLien.style.display="none";
                    divMale.style.display="none";
                    divFemelle.style.display="none";
                    divChiots.style.display="none";
                    divFuturePortees.style.display="none"; 
                    divImg.style.display="none";
                }
            })
        })

        btnList.forEach(showDiv => {
            showDiv.addEventListener('click', () => {
                if(btnArticle.classList.contains('current')){
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='block';
                    article.classList.add('slide');
                    contact.style.display ='none';
                    divPres.style.display="none";
                    divPropos.style.display="none";
                    divLien.style.display="none";
                    divMale.style.display="none";
                    divFemelle.style.display="none";
                    divChiots.style.display="none";
                    divFuturePortees.style.display="none"; 
                    divImg.style.display="none";
                }
            })
        })

        btnList.forEach(showDiv => {
            showDiv.addEventListener('click', () => {
                if(btnContact.classList.contains('current')){
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='block';
                    contact.classList.add('slide');
                    divPres.style.display="none";
                    divPropos.style.display="none";
                    divLien.style.display="none";
                    divMale.style.display="none";
                    divFemelle.style.display="none";
                    divChiots.style.display="none";
                    divFuturePortees.style.display="none"; 
                    divImg.style.display="none";
                }
            })
        })



//CONTENT BTN Variables
    const btnPres = document.querySelector('#presentation');
    const btnPropos = document.querySelector('#a-propos');
    const btnLien = document.querySelector('#lien');
    const btnMale = document.querySelector('#male');
    const btnFemelle = document.querySelector('#femelle');
    const btnChiot = document.querySelector('#chiot-disponible');
    const btnFuturePortees = document.querySelector('#future-portees');
    const btnArrowRight = document.querySelector('#arrow-right');
    const btnArrowLeft = document.querySelector('#arrow-left');


//DIV variables
    const divPres = document.querySelector('.presentation');
    const divPropos = document.querySelector('.a-propos');
    const divLien= document.querySelector('.lien');
    const divMale = document.querySelector('.male');
    const divFemelle = document.querySelector('.femelle');
    const divChiots = document.querySelector('.div-chiots');
    const divFuturePortees = document.querySelector('.future-portees');
    const divVideo = document.querySelector('.video-image');
    

//ARROW VID & IMAGES
    btnArrowRight.addEventListener('click', () => {
        divVideo.style.display='none';
        divImg.style.display='block';
        divImg.classList.add('slide');
    })

    btnArrowLeft.addEventListener('click', () => {

        divImg.style.display='none';
        divVideo.style.display='block';
        divImg.classList.add('slide');
        
    })


//CONDITIONS CONTENT
    if(!btnPres.classList.contains('btn-content')){
        divPres.style.display="none";
        divPropos.style.display="none";
        divLien.style.display="none";
        divMale.style.display="none";
        divFemelle.style.display="none";
        divChiots.style.display="none";
        divFuturePortees.style.display="none";
        divVideo.style.display="none";
        divImg.style.display="none";
    }

   


    //CONDITION CONTENT NAV
        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnPres.classList.contains('btn-content')){
                    divPres.style.display='block';
                    divPres.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
            
                    
                }else{
                    divPres.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnPropos.classList.contains('btn-content')){
                    divPropos.style.display="block";
                    divPropos.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divPropos.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnLien.classList.contains('btn-content')){
                    divLien.style.display="block";
                    divLien.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divLien.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnMale.classList.contains('btn-content')){
                    divMale.style.display="block";
                    divMale.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divMale.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnFemelle.classList.contains('btn-content')){
                    divFemelle.style.display="block";
                    divFemelle.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divFemelle.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnChiot.classList.contains('btn-content')){
                    divChiots.style.display="block";
                    divChiots.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divChiots.style.display="none";
                }
            })
        })

        btnContent.forEach(showDivContent => {
            showDivContent.addEventListener('click', () => {
                if(btnFuturePortees.classList.contains('btn-content')){
                    divFuturePortees.style.display="block";
                    divFuturePortees.classList.add('slide');
                    accueil.style.display = 'none';
                    vidImg.style.display ='none';
                    article.style.display ='none';
                    contact.style.display ='none';
                    divImg.style.display="none";
                }else{
                    divFuturePortees.style.display="none";
                }
            })
        })

   


//VIDEOS
    var i = 0;
    const leftArrow = document.querySelector('#left-arrow');
    const rightArrow = document.querySelector('#right-arrow');

    var myVids = ['CSS/videos/vid-1.mp4','CSS/videos/vid-2.mp4','CSS/videos/vid-3.mp4'];



    leftArrow.addEventListener('click', () => {
        document.querySelector('#vid-1').src = myVids[i];
        if(i < myVids.length - 1){
            i++
        }else{
            i = 0;
        }  
    
    })

    rightArrow.addEventListener('click', () => {
        document.querySelector('#vid-1').src = myVids[i];
        if(i < myVids.length - 1){
            i++
        }else{
            i = 0;
        }  
    })

//IMAGE POPUP
    const imagePopUp = document.querySelectorAll('.image-padding img');
    imagePopUp.forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').classList.add('slide');
            document.querySelector('.popup-image img').src = image.getAttribute('src');
            document.querySelector('.popup-image').classList.remove('hide-slide');

        }
        
    })

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').classList.remove('slide');
        document.querySelector('.popup-image').classList.add('hide-slide');

    }

/*IMAGE SLIDE INSIDE POPUP*/

    var myImg = ['CSS/images/dog_accueil.jpg', 'CSS/images/dog_pres.jpg', 'CSS/images/famille.jpg', 'CSS/images/ptits-loup.jpg', 'CSS/images/dog1.jpg', 'CSS/images/dog2.jpg', 'CSS/images/dog3.jpg', 'CSS/images/dog4.jpg', 'CSS/images/dog5.jpg','CSS/images/dog6.jpg', 'CSS/images/dog7.jpg', 'CSS/images/dog8.jpg'];

    const arrowPopupLeft = document.querySelector('#arrow-left-popup');
    const arrowPopupRight = document.querySelector('#arrow-right-popup');

    arrowPopupLeft.addEventListener('click', () => {
        document.querySelector('#img1').src = myImg[i];
        if(i < myImg.length - 1){
            i++
        }else{
            i = 0;
        }  
    
    })

    arrowPopupRight.addEventListener('click', () => {
        document.querySelector('#img1').src = myImg[i];
        if(i < myImg.length - 1){
            i++
        }else{
            i = 0;
        }  
    
    })

//LOGIN AND SIGNUP
    const login = document.querySelector('.login-background');
    const containerLogin = document.querySelector('.container-login');
    const signUp = document.querySelector('.signUp');
    const btnShowLogin = document.querySelector('.show-login');
    const btnSignUp = document.querySelector('.signUp');
    const containerSignUp = document.querySelector('.container-signUp');
    const signIn = document.querySelector('#signIn');
    const xMarkLogin = document.querySelector('#xmark-login');
    const xMarkSignUp = document.querySelector('#xmark-sign-up');
    const btnSignUpArticle = document.querySelector('.btn-sign-in a');

    btnShowLogin.addEventListener('click', () =>{    
        login.classList.add('background');
        login.classList.remove('background-slide');
        containerLogin.classList.add('login-signup-slide');
        containerLogin.classList.remove('login-signup-slide-remove');
        containerLogin.style.display='block';
        containerSignUp.style.display='none'; 
        
    })

    btnSignUp.addEventListener ('click', () => {
        containerLogin.classList.add('blur');
        containerSignUp.classList.add('login-signup-slide');
        containerLogin.classList.add('login-signup-slide-remove');
        containerSignUp.classList.remove('login-signup-slide-remove');
        containerSignUp.style.display='block';

    })

    signIn.addEventListener('click', (e) => {
        
        containerSignUp.classList.add('login-signup-slide-remove');
        containerLogin.classList.add('login-signup-slide');
        containerLogin.classList.remove('login-signup-slide-remove');
    
    })

    btnSignUpArticle.addEventListener('click', () =>{
        login.classList.add('background');
        login.classList.remove('background-slide');
        containerLogin.classList.add('login-signup-slide');
        containerLogin.classList.remove('login-signup-slide-remove');
        containerLogin.style.display='block';
        containerSignUp.style.display='none'; 
    })

/*REMOVING LOGIN*/

    xMarkLogin.addEventListener('click', () => {
        containerLogin.classList.add('login-signup-slide-remove')
        login.classList.add('background-slide');
    })

    xMarkSignUp.addEventListener('click', () => {
        containerLogin.classList.add('login-signup-slide-remove')
        login.classList.add('background-slide');
    })


//PRODUCT DETAILS

    /*BUTTON COLOR PRODUCT*/
        const btnBlue = document.querySelector('#btn-blue');
        const btnRed = document.querySelector('#btn-red');
        const btnOrange = document.querySelector('#btn-orange');
        const btnLightBlue = document.querySelector('#btn-light-blue');
        const imageProduct = document.querySelector('#image-product');

    /*PRODUCT VARIATION*/ 
        const tShirtBlue = 'CSS/images/mockup/t-shirt-blue.png';
        const tShirtOrange = 'CSS/images/mockup/t-shirt-orange.png';
        const tShirtRed = 'CSS/images/mockup/t-shirt-red.png';
        const tShirtLightBlue = 'CSS/images/mockup/t-shirt-light-blue.png';

    /*BUTTON COLOR VARIATION*/
        btnBlue.addEventListener('click', () =>{
            imageProduct.src = tShirtBlue;
        })
        btnRed.addEventListener('click', () =>{
            imageProduct.src = tShirtRed;
        })
        btnOrange.addEventListener('click', () =>{
            imageProduct.src = tShirtOrange;
        })
        btnLightBlue.addEventListener('click', () =>{
            imageProduct.src = tShirtLightBlue;
        })

    /*QUANTITY*/
        var quantity = document.querySelector('#nbr-product');
        quantity = 1;

    /*BUTTON QUANTITY*/
        const btnAdd = document.querySelector('#add');
        const btnRemove = document.querySelector('#remove');

    /*OPERATION*/
        btnAdd.addEventListener('click', () =>{
        if(quantity >= 1){
            quantity++;
        }

        document.getElementById('nbr-product').innerText = quantity;
        })

        btnRemove.addEventListener('click', () =>{
        if(quantity > 1){
            quantity--;
        }

        document.getElementById('nbr-product').innerText = quantity ;

        })

    /*BUTTON SIZE*/
        const btnSize = document.querySelectorAll('#btn-size');

        btnSize.forEach(btnActive => {
        btnActive.addEventListener('click', () => {
            document.querySelector('.btn-size')?.classList.remove('btn-size');
            btnActive.classList.add('btn-size');
        })
        })


    /*POP-UP PRODUCT DETAILS*/ 
        const popUpDetails = document.querySelector('.container-details');
        const containerTshirt = document.querySelectorAll('.container-t-shirt');
        const closeDetails = document.querySelector('.x-mark');
        const loginBackground = document.querySelector('.login-background');
        const mvola = document.querySelector('.section-carte-paiement');
        const btnAcheter = document.querySelector('#btn-buy');
        const btnMvolaAnnuler = document.querySelector('#btn-mvola-annuler');




        containerTshirt.forEach(btnTshirt => {
            btnTshirt.addEventListener('click', () => {
                popUpDetails.classList.add('animation-product');
                popUpDetails.classList.remove('animation-product-close');
                loginBackground.classList.add('background');
                loginBackground.classList.remove('background-slide'); 
                containerSignUp.style.display='none'; 
                containerLogin.style.display='none'; 
            })
        })

        closeDetails.addEventListener('click', () => {
            popUpDetails.classList.add('animation-product-close');
            popUpDetails.classList.remove('animation-product');
            loginBackground.classList.add('background-slide');
            loginBackground.classList.add('background');
            
            
        })

    /*MVOLA BUTTON ACHETER*/ 
        btnAcheter.addEventListener('click', ()=>{
        popUpDetails.classList.add('opacity-div-out');
        containerSignUp.style.display='none'; 
        containerLogin.style.display='none';
        mvola.classList.add('opacity-div-in'); 
        mvola.classList.remove('opacity-div-out');

    })

        btnMvolaAnnuler.addEventListener('click', ()=>{
            mvola.classList.add('opacity-div-out');
            popUpDetails.classList.remove('opacity-div-out');
            mvola.classList.add('opacity-div-in'); 
        })

/*MOT DE PASSE*/
    const containerMdp = document.querySelector('.container-mdp');
    const mdp = document.querySelector('.mdp a');
    const btnAnnuler = document.querySelector('#btn-annuler');
    const bntContinuer = document.querySelector('#btn-continuer');
    const codeEmail = document.querySelector('.code-email');
    const btnCodeContinuer = document.querySelector('#btn-code-continuer');
    const resetMdp = document.querySelector('.reset-password');

    /*EMAIL*/ 
        mdp.addEventListener('click', ()=>{
            containerLogin.classList.add('opacity-div-out');
            containerLogin.style.display='none';
            containerMdp.style.display = 'block';
            containerLogin.classList.remove('login-signup-slide');
            containerLogin.classList.remove('login-signup-slide-remove');
            containerMdp.classList.add('opacity-div-in');
        })

        btnAnnuler.addEventListener('click', ()=>{
            containerMdp.style.display='none';
            loginBackground.classList.add('background-slide');
            containerLogin.classList.remove('opacity-div-out');

        })

        console.log(codeEmail);

    /*CODE VERIFICATION*/
        bntContinuer.addEventListener('click', ()=>{
            containerMdp.style.display='none';
            codeEmail.style.display='block';
            codeEmail.classList.add('opacity-div-in');
        })

    /*RESET PASSWORD*/
        btnCodeContinuer.addEventListener('click', ()=>{
            codeEmail.style.display='none';
            codeEmail.classList.remove('opacity-div-in');
            codeEmail.classList.remove('opacity-div-out');
            resetMdp.style.display='block';
            resetMdp.classList.add('opacity-div-in');

        })
   



