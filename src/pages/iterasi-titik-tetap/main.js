/* Function resultData Start */
function resultData() {
    /* Declaration Variables Start */
    var iterasi = parseInt(document.querySelector(".iterasi").value);
    var xr = parseFloat(document.querySelector(".xr").value);
    /* Declaration Variables End */
    console.log(xr);


    /* if value input = null Start */
    if (iterasi == 0 && xr == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    } else if (iterasi == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    }
    /* if value input = null End */


    /* Output on first row list data result Start */
    var iterasiElement = document.createElement("h4");
    var iterasiText = document.createTextNode(1);
    iterasiElement.appendChild(iterasiText);
    document.querySelector(".iterasi-box").appendChild(iterasiElement);

    var xrElement = document.createElement("h4");
    var xrText = document.createTextNode(xr.toFixed(2));
    xrElement.appendChild(xrText);
    document.querySelector(".xr-box").appendChild(xrElement);

    var erElement = document.createElement("div");
    var erText = document.createTextNode(0);
    erElement.appendChild(erText);
    document.querySelector(".er-box").appendChild(erElement);
    /* Output on first row list data result End */


    /* Looping for results Start */
    for (let i = 2; i <= iterasi; i++) {
        /* iterasi create element & looping */
        var iterasiCreateElement = document.createElement("p");
        var text = document.createTextNode(i);
        iterasiCreateElement.appendChild(text);
        document.querySelector(".iterasi-box").appendChild(iterasiCreateElement);

        /* xr temporary value */
        var temp = xr;

        /* xr create element & looping */
        var xr = xr - (xr * xr * xr - xr * xr - xr + 1) / (3 * xr * xr - 2 * xr - 1 + 0);
        var xrCreateElement = document.createElement("p");
        var xrText = document.createTextNode(xr.toFixed(5));
        xrCreateElement.appendChild(xrText);
        document.querySelector(".xr-box").appendChild(xrCreateElement);

        /* galat create element & looping */
        var galat = Math.abs(temp - xr);
        var galatCreateElement = document.createElement("p");
        var galatText = document.createTextNode(galat.toFixed(5));
        galatCreateElement.appendChild(galatText);
        document.querySelector(".er-box").appendChild(galatCreateElement);
    }
    /* Looping for results End */

    window.scrollTo({
        top: 550,
        behavior: "smooth",
    });
}
/* Function resultData End */

/* Function Reset Data Start */
function resetData() {
    location.reload();
}
/* Function Reset Data End */