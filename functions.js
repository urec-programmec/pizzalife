// модальные окна карточек

function add_modal(){
    var items = document.getElementsByClassName("imagine");
    for (let i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(){
            let path = items[i].href.animVal;
            $('#image-modal .modal-body img').attr('src', path);
            $("#image-modal").modal('show');
        })
    }

    let sign_in = document.getElementById("sin");
    sign_in.addEventListener("click", function(){
        $("#sign-in").modal('show');
    });

    let sign_up = document.getElementById("sup");
    sign_up.addEventListener("click", function(){
        $("#sign-up").modal('show');
    });
}

// пагинация страниц
function pagination_pages(){
    var this_page = 1;
    var count_img = 15;
    var count_page = count_img % 6 == 0 ? (count_img - count_img % 6) / 6  : (count_img - count_img % 6) / 6 + 1;


    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    next.addEventListener("click", function() {
        if (this_page != count_page) {
            if (this_page == 1)
                prev.classList.remove("disabled");
            this_page += 1;
            document.getElementById("num").childNodes[0].textContent = this_page      
            if (this_page == count_page)
                next.classList.add("disabled");  
        }

        change(this_page, count_img);
    });

    prev.addEventListener("click", function() {
        if (this_page != 1) {
            if (this_page == count_page)
                next.classList.remove("disabled");
            this_page -= 1;
            document.getElementById("num").childNodes[0].textContent = this_page;
            if (this_page == 1)
                prev.classList.add("disabled");
            
            change(this_page, count_img);
        }
    });
}

function change(number, count_img){
    let path_start = "imagins/items/pizza-img";
    let path_end = ".jpg";

    let row = document.getElementsByClassName("row")[1];
    let str = "";
  
    for (let i = 0; i < 6; i++){

        let this_index = (number - 1) * 6 + 1 + i;
        // console.log(this_index);
        // console.log(count_img);
        
        if (this_index <= count_img) {
            let path = path_start + this_index.toString() + path_end;   
            str += '<div class="col-md-4"><div class="card mb-4 shadow-sm' + toInnerTextBody + '"><svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><image x="0" y="0" xlink:href="' + path + '" class="imagine"></image><text class="card-text-svg" x="40%" y="30%" dy=".3em">This pizza is </text><text class="card-text-svg" x="60%" y="50%" dy=".3em">да, в моём сердце</text></svg><div class="card-body"><p class="card-text' + toInnerText + '">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><button type="button" class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-muted">9 mins</small></div></div></div></div>';
            // items[i].childNodes[1].childNodes[1].childNodes[3].setAttribute("xlink:href", path);
        }
    }

    // console.log("--");
    row.innerHTML = "";
    row.innerHTML = str;
    add_modal()
}

var theme = 1;
let toInnerText = "";
let toInnerTextBody = "";

function change_theme(){    
    let fon;
    let menu_add;
    let menu_remove;
    let carousel;
    let modal = "bg-dark"; 
    let card_text = "text-light";
    let card_body = "bg-dark";
    let pagination = "bg-dark";

    if (theme == 1){
        theme = 2;
        fon = "imagins/fon-dark.jpg";
        menu_add = "bg-dark";
        menu_remove = "bg-secondary"; 
        carousel = "deeppink"

        let modal_win = document.getElementsByClassName("modal-content");        
        for (let i = 0; i < modal_win.length; i++){
            modal_win[i].classList.add(modal);
            modal_win[i].classList.add(card_text);
            
        }
        
        let cards = document.getElementsByClassName("card-text");
        for (let i = 0; i < cards.length; i++){
            cards[i].classList.add(card_text);
        }
        
        let card_bodys = document.getElementsByClassName("card");
        for (let i = 0; i < card_bodys.length; i++){
            card_bodys[i].classList.add(card_body);
        }

        document.getElementById("prev").childNodes[0].classList.add(card_body);
        document.getElementById("num").childNodes[0].classList.add(card_body);
        document.getElementById("next").childNodes[0].classList.add(card_body);

        document.getElementById("prev").childNodes[0].classList.add(card_text);
        document.getElementById("num").childNodes[0].classList.add(card_text);
        document.getElementById("next").childNodes[0].classList.add(card_text);


        toInnerText = ' ' + card_text;
        toInnerTextBody = ' ' + card_body;
    }
    else{
        theme = 1;
        fon = "imagins/fon.jpg";
        menu_add = "bg-secondary";
        menu_remove = "bg-dark"; 
        carousel = "lime"

        let modal_win = document.getElementsByClassName("modal-content");        
        for (let i = 0; i < modal_win.length; i++){
            modal_win[i].classList.remove(modal);
            modal_win[i].classList.remove(card_text);
        }
        
        let cards = document.getElementsByClassName("card-text");
        for (let i = 0; i < cards.length; i++){
            cards[i].classList.remove(card_text);
        }
        
        let card_bodys = document.getElementsByClassName("card");
        for (let i = 0; i < card_bodys.length; i++){
            card_bodys[i].classList.remove(card_body);
        }
        
        
        document.getElementById("prev").childNodes[0].classList.remove(card_body);
        document.getElementById("num").childNodes[0].classList.remove(card_body);
        document.getElementById("next").childNodes[0].classList.remove(card_body);

        document.getElementById("prev").childNodes[0].classList.remove(card_text);
        document.getElementById("num").childNodes[0].classList.remove(card_text);
        document.getElementById("next").childNodes[0].classList.remove(card_text);

        toInnerText = "";
        toInnerTextBody = "";
    }

    document.body.style.backgroundImage = "url(" + fon + ")";
    document.getElementById("navbarHeader").classList.add(menu_add);
    document.getElementById("navbarHeader").classList.remove(menu_remove);

    document.getElementById("navbarHeaderLow").classList.add(menu_add);
    document.getElementById("navbarHeaderLow").classList.remove(menu_remove);

    $('.text-carousel').css('background', carousel);

    // let th = theme == 1 ? "2" : "1";
    document.cookie = "theme=" + theme.toString() + "; expires=15/02/2021 00:00:00";
    // onload_theme();
    
}

function onload_theme(){
    let cookie = document.cookie;
    if (cookie[cookie.indexOf("theme=") + 6] == "2"){
        element = document.getElementById("dark");
        element.checked = !element.checked;
        change_theme()
    }
}

function sign_in_load(){
    var forms = document.getElementsByClassName('needs-validation')

    Array.prototype.filter.call(forms, function (form) {        
        form.addEventListener('submit', function (event) {
            
            if (form.checkValidity() === false) {
                // console.log(1);
                event.preventDefault()
                event.stopPropagation()
            }
            else {
                // console.log(1);
                console.log($("#exampleModalLongTitle"));
                $("#send").click();
                $("#send2").click();
                
            }
            form.classList.add('was-validated')
            }, false)
    })
}

function check_equal_passwd(){
    let pass = document.getElementById("passwordOne");
    let pass2 = document.getElementById("passwordTwo");

    if (pass.value === pass2.value)
        $("#passwordTwo")[0].setCustomValidity("");
    else
        $("#passwordTwo")[0].setCustomValidity("Repeat password must be equal");
}

function delete_all_info(){
    document.getElementById("username").value = "";
    document.getElementById("passwordOne").value = "";
    document.getElementById("passwordTwo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("country").value = "";
    document.getElementById("state").value = "";
}

add_modal();
pagination_pages();
onload_theme();
sign_in_load();

window.onload = function(){
    document.getElementById("passwordTwo").oninput = check_equal_passwd;
    document.getElementById("passwordOne").oninput = check_equal_passwd;
    document.getElementById("submit").onclick = check_equal_passwd;

}