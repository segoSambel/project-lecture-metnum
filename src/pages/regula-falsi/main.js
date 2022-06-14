/* Function resultData Start */
function resultData() {
    /* Declaration Variables */
    var iterasi = document.querySelector('.iterasi').value;
    var a = document.querySelector('.a').value;
    var b = document.querySelector('.b').value;
    var fa = ((a * a * a) - (a * a) - a + 1);
    var fb = ((b * b * b) - (b * b) - b + 1);
    var c = b - ((fb * (b - a)) / (fb - fa));
    var fc = ((c * c * c) - (c * c) - c + 1);


    /* if value input = "" */
    if (iterasi == "" || a == "" || b == "") {
        return;
    } else {
        /* Output on first row list data result Start */
        var iterasiElement = document.createElement('h4');
        var iterasiText = document.createTextNode(1);
        iterasiElement.appendChild(iterasiText);
        document.querySelector('.iterasi-box').appendChild(iterasiElement);

        var aElement = document.createElement('h4');
        var aText = document.createTextNode(a);
        aElement.appendChild(aText);
        document.querySelector('.a-box').appendChild(aElement);

        var bElement = document.createElement('h4');
        var bText = document.createTextNode(b);
        bElement.appendChild(bText);
        document.querySelector('.b-box').appendChild(bElement);

        var faElement = document.createElement('h4');
        var faText = document.createTextNode(fa);
        faElement.appendChild(faText);
        document.querySelector('.fa-box').appendChild(faElement);

        var fbElement = document.createElement('h4');
        var fbText = document.createTextNode(fb);
        fbElement.appendChild(fbText);
        document.querySelector('.fb-box').appendChild(fbElement);

        var cElement = document.createElement('h4');
        var cText = document.createTextNode(c.toFixed(5));
        cElement.appendChild(cText);
        document.querySelector('.c-box').appendChild(cElement);

        var fcElement = document.createElement('h4');
        var fcText = document.createTextNode(fc.toFixed(5));
        fcElement.appendChild(fcText);
        document.querySelector('.fc-box').appendChild(fcElement);

        var erElement = document.createElement('div');
        var erText = document.createTextNode("");
        erElement.appendChild(erText);
        document.querySelector('.er-box').appendChild(erElement);
        /* Output on first row list data result End */


        /* Output on first row list data result Start but use if */
        var selang = fa * fc;
        if (selang > 0) {
            var selangElement = document.createElement('h4');
            var selangText = document.createTextNode('[c, b]');
            selangElement.appendChild(selangText);
            document.querySelector('.selang-box').appendChild(selangElement);
        } else if (selang < 0) {
            var selangElement = document.createElement('h4');
            var selangText = document.createTextNode('[a, c]');
            selangElement.appendChild(selangText);
            document.querySelector('.selang-box').appendChild(selangElement);
        }
        /* Output on first row list data result End but use if */


        /* Looping for results Start */
        for (let i = 2; i <= iterasi; i++) {
            /* iterasi create element & looping */
            var iterasiCreateElement = document.createElement("p");
            var text = document.createTextNode(i);
            iterasiCreateElement.appendChild(text);
            document.querySelector(".iterasi-box").appendChild(iterasiCreateElement);

            var result = fa * fc;
            var tmp = c;
            if (result > 0) {
                /* a create element, looping & if statement */
                var aCreateElement = document.createElement("p");
                var aText = document.createTextNode(c.toFixed(5));
                aCreateElement.appendChild(aText);
                document.querySelector(".a-box").appendChild(aCreateElement);

                /* b create element, looping & if statement */
                var bCreateElement = document.createElement("p");
                var bText = document.createTextNode(b);
                bCreateElement.appendChild(bText);
                document.querySelector(".b-box").appendChild(bCreateElement);

                /* fa create element, looping & if statement*/
                var fa = ((c * c * c) - (c * c) - c + 1);
                var faCreateElement = document.createElement("p");
                var faText = document.createTextNode(fa.toFixed(5));
                faCreateElement.appendChild(faText);
                document.querySelector(".fa-box").appendChild(faCreateElement);

                /* fb create element, looping & if statement*/
                var fb = ((b * b * b) - (b * b) - b + 1);
                var fbCreateElement = document.createElement("p");
                var fbText = document.createTextNode(fb);
                fbCreateElement.appendChild(fbText);
                document.querySelector(".fb-box").appendChild(fbCreateElement);

                /* c create element, looping & if statement*/
                var c = (b - ((fb * (b - c)) / (fb - fa)));
                var cCreateElement = document.createElement("p");
                var cText = document.createTextNode(c.toFixed(5));
                cCreateElement.appendChild(cText);
                document.querySelector(".c-box").appendChild(cCreateElement);

                /* fc create element, looping & if statement*/
                var fc = ((c * c * c) - (c * c) - c + 1);
                var fcCreateElement = document.createElement("p");
                var fcText = document.createTextNode(fc.toFixed(5));
                fcCreateElement.appendChild(fcText);
                document.querySelector(".fc-box").appendChild(fcCreateElement);

                /* selang create element, looping & if statement*/
                var selangCreateElement = document.createElement("p");
                var selangText = document.createTextNode("[c, b]");
                selangCreateElement.appendChild(selangText);
                document.querySelector(".selang-box").appendChild(selangCreateElement);

                /* er create element, looping & if statement*/
                var er = Math.abs((c - tmp) / c);
                var erCreateElement = document.createElement("p");
                var erText = document.createTextNode(er.toFixed(5));
                erCreateElement.appendChild(erText);
                document.querySelector(".er-box").appendChild(erCreateElement);

            } else if (result < 0) {
                /* a create element, looping & if statement */
                var aCreateElement = document.createElement("p");
                var text = document.createTextNode(a);
                aCreateElement.appendChild(text);
                document.querySelector(".a-box").appendChild(aCreateElement);

                /* b create element, looping & if statement */
                var bCreateElement = document.createElement("p");
                var text = document.createTextNode(c.toFixed(5));
                bCreateElement.appendChild(text);
                document.querySelector(".b-box").appendChild(bCreateElement);

                /* fa create element, looping & if statement*/
                var fa = ((a * a * a) - (a * a) - a + 1);
                var faCreateElement = document.createElement("p");
                var faText = document.createTextNode(fa.toFixed(5));
                faCreateElement.appendChild(faText);
                document.querySelector(".fa-box").appendChild(faCreateElement);

                /* fb create element, looping & if statement*/
                var fb = ((c * c * c) - (c * c) - c + 1);
                var fbCreateElement = document.createElement("p");
                var fbText = document.createTextNode(fb.toFixed(5));
                fbCreateElement.appendChild(fbText);
                document.querySelector(".fb-box").appendChild(fbCreateElement);

                /* c create element, looping & if statement*/
                var c = (c - ((fb * (c - a)) / (fb - fa)));
                var cCreateElement = document.createElement("p");
                var cText = document.createTextNode(c.toFixed(5));
                cCreateElement.appendChild(cText);
                document.querySelector(".c-box").appendChild(cCreateElement);

                /* fc create element, looping & if statement*/
                var fc = ((c * c * c) - (c * c) - c + 1);
                var fcCreateElement = document.createElement("p");
                var fcText = document.createTextNode(fc.toFixed(5));
                fcCreateElement.appendChild(fcText);
                document.querySelector(".fc-box").appendChild(fcCreateElement);

                /* selang create element, looping & if statement*/
                var selangCreateElement = document.createElement("p");
                var selangText = document.createTextNode("[a, c]");
                selangCreateElement.appendChild(selangText);
                document.querySelector(".selang-box").appendChild(selangCreateElement);

                /* er create element, looping & if statement*/
                var er = Math.abs((c - tmp) / c);
                var erCreateElement = document.createElement("p");
                var erText = document.createTextNode(er.toFixed(5));
                erCreateElement.appendChild(erText);
                document.querySelector(".er-box").appendChild(erCreateElement);
            }
        }
        /* Looping for results End */
    }


    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    })
}
/* Function resultData End */


/* Function Reset Data Start */
function resetData() {
    location.reload();
}
/* Function Reset Data End */