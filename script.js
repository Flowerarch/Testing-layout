var current_page = 1;
var records_per_page = 1;

var objJson = [
    { pageData: `
    <!-- First Photo Grid-->
<div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <img src="img/sandwich.jpg" alt="Sandwich" style="width:100%">
      <h3>Sản phẩm 1</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/steak.jpg" alt="Steak" style="width:100%">
      <h3>Sản phẩm 2</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/cherries.jpg" alt="Cherries" style="width:100%">
      <h3>Sản phẩm 3</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      <p>What else?</p>
    </div>
    <div class="w3-quarter">
      <img src="img/wine.jpg" alt="Pasta and Wine" style="width:100%">
      <h3>Sản phẩm 4</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center">
    <div class="w3-quarter">
      <img src="img/popsicle.jpg" alt="Popsicle" style="width:100%">
      <h3>Sản phẩm 5</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/salmon.jpg" alt="Salmon" style="width:100%">
      <h3>Sản phẩm 6</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/sandwich.jpg" alt="Sandwich" style="width:100%">
      <h3>Sản phẩm 7</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/croissant.jpg" alt="Croissant" style="width:100%">
      <h3>Sản phẩm 8</h3>
      <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
    `},
    { pageData: `
    <!-- First Photo Grid-->
<div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <img src="img/sandwich.jpg" alt="Sandwich" style="width:100%">
      <h3>Sản phẩm 9</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/steak.jpg" alt="Steak" style="width:100%">
      <h3>Sản phẩm 10</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/cherries.jpg" alt="Cherries" style="width:100%">
      <h3>Sản phẩm 11</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      <p>What else?</p>
    </div>
    <div class="w3-quarter">
      <img src="img/wine.jpg" alt="Pasta and Wine" style="width:100%">
      <h3>Sản phẩm 12</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center">
    <div class="w3-quarter">
      <img src="img/popsicle.jpg" alt="Popsicle" style="width:100%">
      <h3>Sản phẩm 13</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/salmon.jpg" alt="Salmon" style="width:100%">
      <h3>Sản phẩm 14</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/sandwich.jpg" alt="Sandwich" style="width:100%">
      <h3>Sản phẩm 15</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <img src="img/croissant.jpg" alt="Croissant" style="width:100%">
      <h3>Sản phẩm 16</h3>
      <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
    `},
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    current_page = page;
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    //page_span hiển thị số trang hiện tại
    // var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].pageData + "<br>";
    }
    // page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }

    this.showPagination();
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

function showPagination(){
    var numPages = this.numPages();
    var pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    
    for (var i = 1; i <= numPages; i++) {
        if(i == current_page){
            var page = `
            <a href="javascript:changePage(`+i+`)" class="w3-bar-item w3-black w3-button">`+i+`</a>
            `;
        }else{
            var page = `
            <a href="javascript:changePage(`+i+`)" class="w3-bar-item w3-button w3-hover-black">`+i+`</a>
            `;
        }
        pagination.innerHTML += page;
    }
}

window.onload = function() {
    changePage(1);
    showPagination();
};