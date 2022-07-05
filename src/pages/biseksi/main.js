/* Function resultData Start */
function resultData() {
    /* Declaration Variables */
    var iterasi = parseInt(document.querySelector(".iterasi").value);
    var a = parseFloat(document.querySelector(".a").value);
    var b = parseFloat(document.querySelector(".b").value);
    var c = (a + b) / 2;
    var fa = a * a * a - a * a - a + 1;
    var fb = b * b * b - b * b - b + 1;
    var fc = c * c * c - c * c - c + 1;
    var fafc = fa * fc;
    var er = Math.abs(c - b)

    /* if value input = null */
    if (iterasi == 0 && a == 0 && b == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    } else if (iterasi == 0) {
        alert("Masukkan angka dengan benar!!")
        return;
    } else if (a == 0 && b == 0) {
        alert("Masukkan angka dengan benar!!");
        return;
    }

    /* Output on first row list data result Start */
    var iterasiElement = document.createElement("h4");
    var iterasiText = document.createTextNode(1);
    iterasiElement.appendChild(iterasiText);
    document.querySelector(".iterasi-box").appendChild(iterasiElement);

    var aElement = document.createElement("h4");
    var aText = document.createTextNode(a);
    aElement.appendChild(aText);
    document.querySelector(".a-box").appendChild(aElement);

    var bElement = document.createElement("h4");
    var bText = document.createTextNode(b);
    bElement.appendChild(bText);
    document.querySelector(".b-box").appendChild(bElement);

    var cElement = document.createElement("h4");
    var cText = document.createTextNode(c.toFixed(5));
    cElement.appendChild(cText);
    document.querySelector(".c-box").appendChild(cElement);

    var faElement = document.createElement("h4");
    var faText = document.createTextNode(fa.toFixed(5));
    faElement.appendChild(faText);
    document.querySelector(".fa-box").appendChild(faElement);

    var fbElement = document.createElement("h4");
    var fbText = document.createTextNode(fb.toFixed(5));
    fbElement.appendChild(fbText);
    document.querySelector(".fb-box").appendChild(fbElement);

    var fcElement = document.createElement("h4");
    var fcText = document.createTextNode(fc.toFixed(5));
    fcElement.appendChild(fcText);
    document.querySelector(".fc-box").appendChild(fcElement);

    var fafcElement = document.createElement("h4");
    var fafcText = document.createTextNode(fafc.toFixed(5));
    fafcElement.appendChild(fafcText);
    document.querySelector(".fafc-box").appendChild(fafcElement)

    /* Selang Choice */
    if (fafc > 0) {
        var selangElement = document.createElement("h4");
        var selangText = document.createTextNode("[c, b]");
        selangElement.appendChild(selangText);
        document.querySelector(".selang-box").appendChild(selangElement);
    } else if (fafc < 0) {
        var selangElement = document.createElement("h4");
        var selangText = document.createTextNode("[a, c]");
        selangElement.appendChild(selangText);
        document.querySelector(".selang-box").appendChild(selangElement);
    }

    var erElement = document.createElement("h4");
    var erText = document.createTextNode(er.toFixed(5));
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

        if (fafc > 0) {
            /* a create element, looping & if statement */
            var a = c;
            var aCreateElement = document.createElement("p");
            var aText = document.createTextNode(a.toFixed(5));
            aCreateElement.appendChild(aText);
            document.querySelector(".a-box").appendChild(aCreateElement);

            /* b create element, looping & if statement */
            var bCreateElement = document.createElement("p");
            var bText = document.createTextNode(b.toFixed(5));
            bCreateElement.appendChild(bText);
            document.querySelector(".b-box").appendChild(bCreateElement);

            /* c create element, looping & if statement*/
            var c = (a + b) / 2;
            var cCreateElement = document.createElement("p");
            var cText = document.createTextNode(c.toFixed(5));
            cCreateElement.appendChild(cText);
            document.querySelector(".c-box").appendChild(cCreateElement);

            /* fa create element, looping & if statement*/
            var fa = a * a * a - a * a - a + 1;
            var faCreateElement = document.createElement("p");
            var faText = document.createTextNode(fa.toFixed(5));
            faCreateElement.appendChild(faText);
            document.querySelector(".fa-box").appendChild(faCreateElement);

            /* fb create element, looping & if statement*/
            var fb = b * b * b - b * b - b + 1;
            var fbCreateElement = document.createElement("p");
            var fbText = document.createTextNode(fb.toFixed(5));
            fbCreateElement.appendChild(fbText);
            document.querySelector(".fb-box").appendChild(fbCreateElement);

            /* fc create element, looping & if statement*/
            var fc = c * c * c - c * c - c + 1;
            var fcCreateElement = document.createElement("p");
            var fcText = document.createTextNode(fc.toFixed(5));
            fcCreateElement.appendChild(fcText);
            document.querySelector(".fc-box").appendChild(fcCreateElement);

            /* fafc create element, looping & if statement*/
            var fafc = fa * fc;
            var fafcCreateElement = document.createElement("p");
            var fafcText = document.createTextNode(fafc.toFixed(5));
            fafcCreateElement.appendChild(fafcText);
            document.querySelector(".fafc-box").appendChild(fafcCreateElement);

            /* selang create element, looping & if statement*/
            var selangCreateElement = document.createElement("p");
            var selangText = document.createTextNode("[c, b]");
            selangCreateElement.appendChild(selangText);
            document.querySelector(".selang-box").appendChild(selangCreateElement);

            /* er create element, looping & if statement*/
            var er = Math.abs(c - b);
            var erCreateElement = document.createElement("p");
            var erText = document.createTextNode(er.toFixed(5));
            erCreateElement.appendChild(erText);
            document.querySelector(".er-box").appendChild(erCreateElement);

        } else if (fafc < 0) {
            /* a create element, looping & if statement */
            var aCreateElement = document.createElement("p");
            var text = document.createTextNode(a.toFixed(5));
            aCreateElement.appendChild(text);
            document.querySelector(".a-box").appendChild(aCreateElement);

            /* b create element, looping & if statement */
            var b = c;
            var bCreateElement = document.createElement("p");
            var text = document.createTextNode(b.toFixed(5));
            bCreateElement.appendChild(text);
            document.querySelector(".b-box").appendChild(bCreateElement);

            /* c create element, looping & if statement*/
            var c = (a + b) / 2;
            var cCreateElement = document.createElement("p");
            var cText = document.createTextNode(c.toFixed(5));
            cCreateElement.appendChild(cText);
            document.querySelector(".c-box").appendChild(cCreateElement);

            /* fa create element, looping & if statement*/
            var fa = a * a * a - a * a - a + 1;
            var faCreateElement = document.createElement("p");
            var faText = document.createTextNode(fa.toFixed(5));
            faCreateElement.appendChild(faText);
            document.querySelector(".fa-box").appendChild(faCreateElement);

            /* fb create element, looping & if statement*/
            var fb = b * b * b - b * b - b + 1;
            var fbCreateElement = document.createElement("p");
            var fbText = document.createTextNode(fb.toFixed(5));
            fbCreateElement.appendChild(fbText);
            document.querySelector(".fb-box").appendChild(fbCreateElement);

            /* fc create element, looping & if statement*/
            var fc = c * c * c - c * c - c + 1;
            var fcCreateElement = document.createElement("p");
            var fcText = document.createTextNode(fc.toFixed(5));
            fcCreateElement.appendChild(fcText);
            document.querySelector(".fc-box").appendChild(fcCreateElement);

            /* fafc create element, looping & if statement*/
            var fafc = fa * fc;
            var fafcCreateElement = document.createElement("p");
            var fafcText = document.createTextNode(fafc.toFixed(5));
            fafcCreateElement.appendChild(fafcText);
            document.querySelector(".fafc-box").appendChild(fafcCreateElement);

            /* selang create element, looping & if statement*/
            var selangCreateElement = document.createElement("p");
            var selangText = document.createTextNode("[a, c]");
            selangCreateElement.appendChild(selangText);
            document.querySelector(".selang-box").appendChild(selangCreateElement);

            /* er create element, looping & if statement*/
            var er = Math.abs(c - b);
            var erCreateElement = document.createElement("p");
            var erText = document.createTextNode(er.toFixed(5));
            erCreateElement.appendChild(erText);
            document.querySelector(".er-box").appendChild(erCreateElement);
        }
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