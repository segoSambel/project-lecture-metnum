/* Function resultData Start */
function resultData() {
    /* Declaration Variables Start */
    var iterasi = parseInt(document.querySelector(".iterasi").value);
    var xr1 = parseFloat(document.querySelector(".xr1").value);
    var xr = parseFloat(document.querySelector(".xr").value);
    /* Declaration Variables End */

    /* if value input = null Start */
    if (iterasi == 0 && xr1 == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    } else if (iterasi == 0 && xr == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    } else if (iterasi == 0) {
        alert("Masukkan jumlah iterasi dengan benar!!");
        return;
    } else if (xr1 == 0 && xr == 0) {
        alert("Masukkan nilai xr-1 dan xr dengan benar!!");
        return;
    }
    /* if value input = null End */


    /* Output on first row list data result Start */
    var iterasiElement = document.createElement("h4");
    var iterasiText = document.createTextNode(1);
    iterasiElement.appendChild(iterasiText);
    document.querySelector(".iterasi-box").appendChild(iterasiElement);

    var xr1Element = document.createElement("h4");
    var xr1Text = document.createTextNode(xr1);
    xr1Element.appendChild(xr1Text);
    document.querySelector(".xr-box").appendChild(xr1Element);

    var erElement = document.createElement("h4");
    var erText = document.createTextNode(0);
    erElement.appendChild(erText);
    document.querySelector(".er-box").appendChild(erElement);
    /* Output on first row list data result End */

    /* Output on second row list data result Start */
    var iterasiElement = document.createElement("h4");
    var iterasiText = document.createTextNode(2);
    iterasiElement.appendChild(iterasiText);
    document.querySelector(".iterasi-box").appendChild(iterasiElement);

    var xrElement = document.createElement("h4");
    var xrText = document.createTextNode(xr);
    xrElement.appendChild(xrText);
    document.querySelector(".xr-box").appendChild(xrElement);

    var er = Math.abs(xr1 - xr);
    var erElement = document.createElement("h4");
    var erText = document.createTextNode(er.toFixed(5));
    erElement.appendChild(erText);
    document.querySelector(".er-box").appendChild(erElement);
    /* Output on first row list data result End */

    /* Temporary second row */
    var secondTemp = xr;

    /* Looping for results Start */
    for (let i = 3; i <= iterasi; i++) {
        /* Iterasi create element & looping*/
        var iterasiElement = document.createElement("p");
        var iterasiText = document.createTextNode(i);
        iterasiElement.appendChild(iterasiText);
        document.querySelector(".iterasi-box").appendChild(iterasiElement);

        /* xr create element & looping */
        var xrResult = xr - (((xr * xr * xr - xr * xr - xr + 1) * (xr - xr1)) / ((xr * xr * xr - xr * xr - xr + 1) - (xr1 * xr1 * xr1 - xr1 * xr1 - xr1 + 1)));
        var xrResultCreateElement = document.createElement("p");
        var xrResultText = document.createTextNode(xrResult.toFixed(5));
        xrResultCreateElement.appendChild(xrResultText);
        document.querySelector(".xr-box").appendChild(xrResultCreateElement);

        /* Redeclare Variable */
        var xr1 = xr;
        var xr = xrResult;

        /* galat create element & looping */
        var galat = Math.abs(xr1 - xr);
        var galatCreateElement = document.createElement("p");
        var galatText = document.createTextNode(galat.toFixed(5));
        galatCreateElement.appendChild(galatText);
        document.querySelector(".er-box").appendChild(galatCreateElement);
    }
    /* Looping for results End */

    window.scrollTo({
        top: 700,
        behavior: "smooth",
    });
}
/* Function resultData End */

/* Function Reset Data Start */
function resetData() {
    location.reload();
}
/* Function Reset Data End */