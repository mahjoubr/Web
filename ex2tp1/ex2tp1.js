 let txt = document.getElementById("txt");
        let nb = document.getElementById("nb");
        let cl = document.getElementById("cl");
        let police = document.getElementById("police");

        nb.addEventListener("input", nbr);
        cl.addEventListener("input", colr);
        police.addEventListener("change", polc);

        function nbr() {
            txt.style.fontSize = nb.value + "px";
        }

        function colr() {
            txt.style.color = cl.value;
        }

        function polc() {
            txt.style.fontFamily = police.value;
        }