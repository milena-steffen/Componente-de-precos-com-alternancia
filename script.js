const switchtoggle = document.getElementById('switch');
const planobasicomensal = document.getElementById('plano-basico-mensal');
const planoprofissionalmensal = document.getElementById('plano-profissional-mensal');
const planomensalmaster = document.getElementById('plano-mensal-master');

const planobasicoanual = document.getElementById('plano-basico-anual');
const planoprofissionalanual = document.getElementById('plano-profissional-anual');
const planoanualmaster = document.getElementById('plano-anual-master');



function toggleplanos() {
    if (switchtoggle.checked) {
        document.getElementById("plano-basico-mensal").style.display = "block";
        document.getElementById("plano-profissional-mensal").style.display = "block";
        document.getElementById("plano-mensal-master").style.display = "block";

        document.getElementById("plano-basico-anual").style.display = "none";
        document.getElementById("plano-profissional-anual").style.display = "none";
        document.getElementById("plano-anual-master").style.display = "none";

        } else {
            
            document.getElementById("plano-basico-anual").style.display = "block";
            document.getElementById("plano-profissional-anual").style.display = "block";
            document.getElementById("plano-anual-master").style.display = "block";

            document.getElementById("plano-basico-mensal").style.display = "none";
            document.getElementById("plano-profissional-mensal").style.display = "none";
            document.getElementById("plano-mensal-master").style.display = "none";
        }
     
    }
    switchtoggle.addEventListener('change', toggleplanos);
    switchtoggle.checked = true;
    toggleplanos();


