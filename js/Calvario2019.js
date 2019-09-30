var calcolaClassificaRun = false;


var matchs = [];
matchs[11] = {"stazione":1, "girone":1, "nome":"il-calvario-stazione-n-1-gruppo-1", "daCaricare":true};
//matchs[12] = {"stazione":1, "girone":2, "nome":"il-calvario-stazione-n-1-gruppo-2", "daCaricare":true};
matchs[12] = {"stazione":1, "girone":2, "nome":"csp-inverno-2018-2019-girone-6", "daCaricare":true};


matchs[21] = {"stazione":2, "girone":1, "nome":"il-calvario-stazione-n-2-gruppo-1", "daCaricare":true};
//https://api.chess.com/pub/tournament/csp-inverno-2018-2019-girone-1/1/1

function elabora() {
    //Carico i dati di tutti i match
    var url = '';
    for (var i in matchs) {
        url = 'https://api.chess.com/pub/tournament/' + matchs[i].nome + '/1/1';
        caricaMatch(i, url);
    };
}

function caricaMatch(index, url)
{
    //Leggo i dati 
    $.getJSON(url,function(data){

        //Cerco match elaborato
        var iMatch = 0
        for (var i in matchs) {
            if (this.url.indexOf(matchs[i].nome) > 0)
            iMatch = i;
        }        

        //Creo tutti i giocatori per avere anche quelli senza punteggio
        for (var iPlayer in data.players) {
            if (! giocatori[data.players[iPlayer].username.toLowerCase()]) {
                creaGiocatore(data.players[iPlayer].username);
            }

            //Se è il primo torneo della stazione lo creo.
            //   Lo devo fare qui per avere tutti i giocatori, anche quelli a zero
            var calvario = giocatori[data.players[iPlayer].username].calvario;
            var stazione = matchs[iMatch].stazione;
            if (! calvario[stazione]) {
                calvario[stazione] = {};
                calvario[stazione].stampa = '';
                calvario[stazione].url = '';
                calvario[stazione].vittorie = 0;
                calvario[stazione].partiteFinite = 0;
                calvario[stazione].girone = matchs[iMatch].girone;
                calvario[stazione].url = 'https://www.chess.com/tournament/' + matchs[iMatch].nome;
                calvario[stazione].puntiClassifica = 0;
            } 
        }

        //Carico i risultati delle partite
        for (var i in data.games) {

            //Classifica giocatori
            //   NB NB DA FARE PER PRIMA COSI' CREA IL GIOCATORE
            if (data.games[i].end_time) {
                setPunti(data.games[i].white.username.toLowerCase(), data.games[i].white.result, data.games[i].black.username);
                setPunti(data.games[i].black.username.toLowerCase(), data.games[i].black.result, data.games[i].white.username);

                //Punti Calvario
                setPuntiCalvario(data.games[i].white.username.toLowerCase(), data.games[i].white.result, matchs[iMatch])
                setPuntiCalvario(data.games[i].black.username.toLowerCase(), data.games[i].black.result, matchs[iMatch])
            }
        }


        matchs[iMatch].daCaricare = false;
        //Se ho caricato tutti i dati calcolo la classifica
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
        calcolaClassificaRun = true;

        //Ricerco elo e stampo classifica calvario / giocatori
        getAvatar();
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in matchs) {
                    if (matchs[i].url = this.url)
                        index = i;
                };
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
            }
              
        });
}

//Salva i punti del calvario
function setPuntiCalvario(username, risultato, match) {

    var calvario = giocatori[username].calvario;
    var stazione = match.stazione;
    var girone = match.girone;
    //Se è un nuovo girono azzero il punteggio
    if (calvario[stazione].girone < girone) {
        calvario[stazione].vittorie = 0;
        calvario[stazione].girone = girone;
        calvario[stazione].url = 'https://www.chess.com/tournament/' + match.nome;
    } 
    calvario[stazione].partiteFinite ++;
    if (risultato == 'win') {
        //assegno punti se è un girone successivo a quello già inserito
        if (calvario[stazione].girone == girone) {
            calvario[stazione].vittorie ++;
        }
    }
    
}

//calcolo classifica del calvario
function calcolaClassificaCalvario()
{

    //????????????

    //Aggiorno il campo da stampare per ogni stazione e stampo
    for (var username in giocatori)
    {
        //imposto i valori da stampare
        var calvario = giocatori[username].calvario;
        var ii = 0;
        for (var i in calvario) {
            //Stazione successiva
            ii = parseInt(i) + 1;
            //Default, numero di vittori
            calvario[i].stampa = calvario[i].vittorie;
            //Se ho superato il turno
            if (calvario[ii] || calvario[i].vittorie > 2) {
                calvario[i].stampa = '<img class="calvario-img" src="img/check.png">';
                //Se non mi sono ancora iscritto alla stazione successiva la creo per visualizzare l'attesa
                if (! calvario[ii]) {
                    calvario[ii] = {};
                    calvario[ii].stampa = '<img class="calvario-img" src="img/wait.png">';
                    calvario[ii].url = '';
                    calvario[ii].vittorie = 0;
                    calvario[ii].partiteFinite = 0;
                    calvario[ii].girone = '';
                    calvario[ii].url = '';
    
                }
            }
            //Se ho non posso raggiungere le tre vittori
            if ((!calvario[i+1]) && (8 - calvario[i].partiteFinite + calvario[i].vittorie < 3 )) {
                calvario[i].stampa = '<img class="calvario-img" src="img/wait.png">';
            }
            //Aggiorno i punti classifica per ordinare la tabella
            calvario[i].puntiClassifica = i * 100 + calvario[i].vittorie;

        }
        stampaCalvario(username);
    }
    
    //Calcolo e stampo la classifica dei giocatori
    calcolaClassificaGiocatori();
}

function stampaCalvario(username)
{
    //stampo riga    
    var riga = '';
    var calvario = giocatori[username].calvario;

//che data bisogna congelare classifica?
//che data bisogna congelare classifica?
//che data bisogna congelare classifica?
//che data bisogna congelare classifica?
    //preparo riga con punteggio
    for (var i=1; i < 13; i++) {
        if (calvario[i])
            if (calvario[i].url != '')
                riga += '<td class="classifica-calvario2"><a class="username" href="' + calvario[i].url+ '" target=”_blank”> ' +  calvario[i].stampa + '<span style="font-size: 10px;"><br>(Girone: ' + calvario[i].girone + ')</span></a></td>'
            else                
                riga += '<td class="classifica-calvario2">' +  calvario[i].stampa + '</td>'
            else
            riga += '<td class="classifica-calvario2"> </td>';
    }
    $("#calvario").append('<tr class="classifica-giocatori">' +
        '<td class="classifica-calvario1">' +
        '    <table><tr>' +
        '        <td>' +
        '        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">' +
        '    </td>' +
        '    <td width=7px></td>' +
        '    <td><div>' +
        '            <a class="username" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
        '        </div> <div>  (' + giocatori[username].elo + ') </div>' +
        '        </td>' +    
        '    </tr></table>' +
        '</td>' +
        riga +
        '</tr>'
    );
}
