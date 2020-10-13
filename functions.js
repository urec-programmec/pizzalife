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
}

// пагинация страниц
function pagination_pages(){
    var this_page = 1;
    var count_img = 7;
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
            str += '<div class="col-md-4"><div class="card mb-4 shadow-sm"><svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><image x="0" y="0" xlink:href="' + path + '" class="imagine"></image><text class="card-text-svg" x="40%" y="30%" dy=".3em">This pizza is </text><text class="card-text-svg" x="60%" y="50%" dy=".3em">да, в моём сердце</text></svg><div class="card-body"><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><button type="button" class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-muted">9 mins</small></div></div></div></div>';
            // items[i].childNodes[1].childNodes[1].childNodes[3].setAttribute("xlink:href", path);
        }
    }

    // console.log("--");
    row.innerHTML = "";
    row.innerHTML = str;
    add_modal()
}


add_modal();
pagination_pages();