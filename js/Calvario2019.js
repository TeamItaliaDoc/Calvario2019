var giorni = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var eliminati = [";albertocollobiano;"]
var calcolaClassificaRun = false;
var stazioneAttese = [];
var matchs = [];
matchs[101] = {"stazione":1, "girone":1, "nome":"il-calvario-stazione-n-1-gruppo-1", "vittoriePassaggio":3, "daCaricare":true};
matchs[102] = {"stazione":1, "girone":2, "nome":"il-calvario-stazione-n-1-gruppo-2", "vittoriePassaggio":3, "daCaricare":false};
matchs[103] = {"stazione":1, "girone":3, "nome":"il-calvario-stazione-n-1-gruppo-3", "vittoriePassaggio":3, "daCaricare":true};
matchs[104] = {"stazione":1, "girone":4, "nome":"il-calvario-stazione-n-1-gruppo-4", "vittoriePassaggio":3, "daCaricare":true};
matchs[105] = {"stazione":1, "girone":5, "nome":"il-calvario-stazione-n-1-gruppo-5", "vittoriePassaggio":3, "daCaricare":true};
matchs[106] = {"stazione":1, "girone":6, "nome":"il-calvario-stazione-n-1-gruppo-6", "vittoriePassaggio":3, "daCaricare":true};
matchs[107] = {"stazione":1, "girone":7, "nome":"il-calvario-stazione-n-1-gruppo-7", "vittoriePassaggio":3, "daCaricare":true};
matchs[108] = {"stazione":1, "girone":8, "nome":"il-calvario-stazione-n-1-gruppo-8", "vittoriePassaggio":3, "daCaricare":true};
matchs[109] = {"stazione":1, "girone":9, "nome":"il-calvario-stazione-n-1-gruppo-9", "vittoriePassaggio":3, "daCaricare":false};
matchs[110] = {"stazione":1, "girone":10, "nome":"il-calvario-stazione-n-1-gruppo-10", "vittoriePassaggio":3, "daCaricare":true};
matchs[111] = {"stazione":1, "girone":11, "nome":"il-calvario-stazione-n-1-gruppo-11", "vittoriePassaggio":2, "daCaricare":true};
matchs[112] = {"stazione":1, "girone":12, "nome":"il-calvario-stazione-n-1-gruppo-12", "vittoriePassaggio":2, "daCaricare":true};


matchs[201] = {"stazione":2, "girone":1, "nome":"il-calvario-stazione-n-2-gruppo-1", "vittoriePassaggio":3, "daCaricare":true};
matchs[202] = {"stazione":2, "girone":2, "nome":"il-calvario-stazione-n-2-gruppo-2-1", "vittoriePassaggio":3, "daCaricare":true};
matchs[203] = {"stazione":2, "girone":3, "nome":"il-calvario-stazione-n-2-gruppo-3", "vittoriePassaggio":3, "daCaricare":false};
matchs[204] = {"stazione":2, "girone":4, "nome":"il-calvario-stazione-n-2-gruppo-4", "vittoriePassaggio":3, "daCaricare":true};
matchs[205] = {"stazione":2, "girone":5, "nome":"il-calvario-stazione-n-2-gruppo-5", "vittoriePassaggio":3, "daCaricare":true};
matchs[206] = {"stazione":2, "girone":6, "nome":"il-calvario-stazione-n-2-gruppo-6", "vittoriePassaggio":2, "daCaricare":true};
matchs[207] = {"stazione":2, "girone":7, "nome":"il-calvario-stazione-n-2-gruppo-7", "vittoriePassaggio":2, "daCaricare":true};
matchs[208] = {"stazione":2, "girone":7, "nome":"il-calvario-stazione-n-2-gruppo-8", "vittoriePassaggio":2, "daCaricare":true};

matchs[301] = {"stazione":3, "girone":1, "nome":"il-calvario-stazione-n-3-gruppo-1", "vittoriePassaggio":3, "daCaricare":true};
matchs[302] = {"stazione":3, "girone":2, "nome":"il-calvario-stazione-n-3-gruppo-2", "vittoriePassaggio":2, "daCaricare":true};
matchs[303] = {"stazione":3, "girone":3, "nome":"il-calvario-stazione-n-3-gruppo-3", "vittoriePassaggio":2, "daCaricare":true};

matchs[401] = {"stazione":4, "girone":1, "nome":"il-calvario-stazione-n-4-gruppo-1", "vittoriePassaggio":2, "daCaricare":true};

//https://api.chess.com/pub/tournament/il-calvario-stazione-n-2-gruppo-5/1/1

function elabora() {
    //------------------   GIRONI CON BANNATI

    var username = '';
    var giocatore;
    var iMatch = 0;
    var stazione = 0;   
    //-- STAZIONE 1 - GIRONE 2 - OK
    iMatch = 102;
    stazione = 1;
    
    username = 'saurosol'; creaGiocatore(username);
    giocatore = giocatori[username];
    giocatore.punti = 7; giocatore.vinte = 7; giocatore.perse = 1; giocatore.patte = 0;
    creaStazione(giocatore.calvario, stazione, iMatch); 
    giocatore.calvario[stazione].dataPassaggio = 6000000000;
    giocatore.calvario[stazione].vittorie = 7; giocatore.calvario[stazione].partiteFinite = 8;
    giocatore.calvario[stazione].vittoriePassaggio = 3;
    giocatore.userVinte = ['ytoong','sandro2116','sandro2116']; giocatore.userPatte = [];
    //
    username = 'ytoong'; creaGiocatore(username);
    giocatore = giocatori[username];
    giocatore.punti = 6; giocatore.vinte = 6; giocatore.perse = 2; giocatore.patte = 0;
    creaStazione(giocatore.calvario, stazione, iMatch); 
    giocatore.calvario[stazione].dataPassaggio = 6000000000;
    giocatore.calvario[stazione].vittorie = 6; giocatore.calvario[stazione].partiteFinite = 8;
    giocatore.calvario[stazione].vittoriePassaggio = 3;
    giocatore.userVinte = ['saurosol','sandro2116']; giocatore.userPatte = [];
    //
    username = 'sandro2116'; creaGiocatore(username);
    giocatore = giocatori[username];
    giocatore.punti = 5; giocatore.vinte = 5; giocatore.perse = 3; giocatore.patte = 0;
    creaStazione(giocatore.calvario, stazione, iMatch); 
    giocatore.calvario[stazione].dataVittorie.push(new Date(2019,8,17).getTime()/1000);
    giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,5).getTime()/1000);
    giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,6).getTime()/1000);
    giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,11).getTime()/1000);
    giocatore.calvario[stazione].vittorie = 5; giocatore.calvario[stazione].partiteFinite = 8;
    giocatore.calvario[stazione].vittoriePassaggio = 3;
    giocatore.userVinte = ['ytoong']; giocatore.userPatte = [];


        //-- STAZIONE 2 - GIRONE 3 - OK
        iMatch = 203;
        stazione = 2;
        
        username = 'riccardocioli'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 8; giocatore.vinte = 8; giocatore.perse = 0; giocatore.patte = 0;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,20).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 8; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['saurosol','saurosol','dairola','dairola']; giocatore.userPatte = [];
        //
        username = 'dairola'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 6; giocatore.vinte = 6; giocatore.perse = 2; giocatore.patte = 0;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].vittorie = 6; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,20).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['saurosol','saurosol']; giocatore.userPatte = [];
        //
        username = 'saurosol';
        giocatore = giocatori[username];
        giocatore.punti += 4; giocatore.vinte += 4; giocatore.perse += 4; giocatore.patte += 0;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,22).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,23).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 2; giocatore.calvario[stazione].partiteFinite = 14;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = []; giocatore.userPatte = [];
    
        //-- STAZIONE 1 - GIRONE 9 - OK
        iMatch = 109;
        stazione = 1;
        
        username = 'iaiobros'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 8; giocatore.vinte = 8; giocatore.perse = 0; giocatore.patte = 0;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,25).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,29).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,05).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,05).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,11).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,29).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,02).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,05).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 8; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['cavaliereyedi','cavaliereyedi','napoli67','napoli67','tempiese75','tempiese75']; giocatore.userPatte = [];
        //
        username = 'cavaliereyedi'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 4.5; giocatore.vinte = 5; giocatore.perse = 3; giocatore.patte = 1;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,28).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,26).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,03).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,05).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,17).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 4; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['napoli67','tempiese75']; giocatore.userPatte = ['napoli67'];
        //
        username = 'napoli67'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 3.5; giocatore.vinte = 3; giocatore.perse = 4; giocatore.patte = 1;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,25).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,07).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,19).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 3; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['tempiese75']; giocatore.userPatte = ['cavaliereyedi'];
        //
        username = 'tempiese75'; creaGiocatore(username);
        giocatore = giocatori[username];
        giocatore.punti = 4; giocatore.vinte = 4; giocatore.perse = 4; giocatore.patte = 0;
        creaStazione(giocatore.calvario, stazione, iMatch); 
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,9,23).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,14).getTime()/1000);
        giocatore.calvario[stazione].dataVittorie.push(new Date(2019,10,24).getTime()/1000);
        giocatore.calvario[stazione].vittorie = 4; giocatore.calvario[stazione].partiteFinite = 8;
        giocatore.calvario[stazione].vittoriePassaggio = 3;
        giocatore.userVinte = ['cavaliereyedi','napoli67']; giocatore.userPatte = [];
        //
    

    //Carico i dati di tutti i match
    for (var i in matchs) {
        if (matchs[i].daCaricare) {
            matchs[i].url = 'https://api.chess.com/pub/tournament/' + matchs[i].nome + '/1/1';
            caricaMatch(i, matchs[i].url);
        }
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
                creaStazione(calvario, stazione, iMatch);
            } else {
                //Se è un nuovo girono azzero il punteggio
                if (calvario[stazione].girone < matchs[iMatch].girone) {
                   var gironiGiocati = calvario[stazione].gironiGiocati;
                   calvario.splice(stazione,1);
                   creaStazione(calvario, stazione, iMatch);
                   calvario[stazione].gironiGiocati = gironiGiocati;
                } 
            }
            calvario[stazione].gironiGiocati.push(matchs[iMatch].girone);
        }

        //Carico i risultati delle partite
        for (var i in data.games) {

            //Classifica giocatori
            //   NB NB DA FARE PER PRIMA COSI' CREA IL GIOCATORE
            if (data.games[i].end_time) {
                setPunti(data.games[i].white.username.toLowerCase(), data.games[i].white.result, data.games[i].black.username);
                setPunti(data.games[i].black.username.toLowerCase(), data.games[i].black.result, data.games[i].white.username);

                //Punti Calvario
                setPuntiCalvario(data.games[i].white.username.toLowerCase(), data.games[i].white.result, matchs[iMatch], data.games[i].end_time)
                setPuntiCalvario(data.games[i].black.username.toLowerCase(), data.games[i].black.result, matchs[iMatch], data.games[i].end_time)
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
        var index = 0;
        for (var i in matchs) {
            if (matchs[i].url == this.url)
                index = i;
        };
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valido. ' + this.url);
                console.log('ERRORE Match non valido. ' + this.url);
                console.log('ERRORE Match non valido. ' + this.url);
                console.log('ERRORE Match non valido. ' + this.url);
                //non lo devo più caricare
                matchs[index].daCaricare = false;
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

            }
              
        });
}

//Salva i punti del calvario
function setPuntiCalvario(username, risultato, match, dataVittoria) {

    var calvario = giocatori[username].calvario;
    var stazione = match.stazione;
    var girone = match.girone;
    //Se è un nuovo più vecchio non faccio niente
    if (calvario[stazione].girone > girone) {
        return;
    }
    calvario[stazione].partiteFinite ++;
    if (risultato == 'win') {
        //assegno punti se è un girone successivo a quello già inserito
        if (calvario[stazione].girone == girone) {
            calvario[stazione].vittorie ++;
        }
        //Salvo la data della vittoria
        calvario[stazione].dataVittorie.push(dataVittoria);
    }
}

//calcolo classifica del calvario
function calcolaClassificaCalvario()
{
    //Aggiorno il campo da stampare per ogni stazione e stampo
    for (var username in giocatori)
    {
        if (username =='paolobarolo')
           console.log('ok');
        //imposto i valori da stampare
        var calvario = giocatori[username].calvario;
        var ii = 0;
        for (var i in calvario) {

            //imposto la data del passaggio
            calvario[i].dataVittorie.sort(mySorterNumeric);
            if (calvario[i].dataVittorie[2])
                calvario[i].dataPassaggio = calvario[i].dataVittorie[2];
            giocatori[username].puntiCalvario = i * 1000000000000 + calvario[i].vittorie * 1000000000 - calvario[i].dataPassaggio;
            //Stazione successiva e precedente
            ii = parseInt(i) + 1;
            //Default, numero di vittorie
            calvario[i].stampa = calvario[i].vittorie;
            //Se ho superato il turno
            if (calvario[i].vittorie >= calvario[i].vittoriePassaggio) {
                calvario[i].stampa = '<img class="calvario-img" src="img/check.png">';
                //Se non mi sono ancora iscritto alla stazione successiva la creo per visualizzare l'attesa
                if (! calvario[ii]) {
                    calvario[ii] = {};
                 
                    //Se si vuole rimettere progressivo calvario[ii].stampa = 'XXXXX'; 
                    calvario[ii].stampa = '<img class="calvario-img" src="img/wait.png">'
                    //Stampo la data della terza vittoria, non vale per i gironi con bannati
                    if (calvario[i].dataPassaggio != 6000000000) {
                        var myObj = $.parseJSON('{"date_created":"' + calvario[i].dataPassaggio + '"}'),
                        end_time = new Date(1000*myObj.date_created);
                        calvario[ii].stampa += '<BR><span style="font-size: 10px;">' + giorni[end_time.getDate()-1]  + '/' + giorni[end_time.getMonth()]+ '/'+ end_time.getFullYear() +'</span>';
                    }
                    calvario[ii].vittorie = 0;
                    calvario[ii].vittoriePassaggio = 0;
                    calvario[ii].partiteFinite = 0;
                    calvario[ii].dataPassaggio = 0;
                    calvario[ii].girone = '';
                    calvario[ii].url = '';
                    giocatori[username].puntiCalvario = ii * 1000000000000 + 9 * 1000000000 - calvario[i].dataPassaggio;
                }
            }
            //Se ho non posso raggiungere le tre vittori
            var partiteGirone = 0;  //N. partite da giocare nel girone. 
                                    //Se passo con 3 vittorie il girone è da 5 giocatori, altrimenti da 4
            if (calvario[i].vittoriePassaggio == 3)
               partiteGirone = 8
            else 
               partiteGirone = 6;
            if ((!calvario[i+1]) && (partiteGirone - calvario[i].partiteFinite + calvario[i].vittorie < calvario[i].vittoriePassaggio )) {
                //var myObj = $.parseJSON('{"date_created":"' + calvario[i].dataPassaggio + '"}'),
                //vittoria_time = new Date(1000*myObj.date_created);
                //calvario[i].stampa = '<img class="calvario-img" src="img/wait.png"><BR><span style="font-size: 10px;">(' +  giorni[vittoria_time.getDate()-1]  + '/' + giorni[vittoria_time.getMonth()]+ '/'+ vittoria_time.getFullYear() +')</span>'; 
                calvario[i].stampa = '<img class="calvario-img" src="img/wait.png">'; 
                //imposto punteggio per visualizzarlo come prima di quelli che non hanno superato il turno
                giocatori[username].puntiCalvario = i * 1000000000000 + 9 * 1000000000;                
            }
        }
    }
    
    //Imposto posizione e salvo
    var username = '';
    var max = 0;
    while (max > -1)
    {
        max = -1;
        for (var i in giocatori)
        {
            if (!giocatori[i].stampaCalvario  && giocatori[i].puntiCalvario > max ) {
                username = i;
                max = giocatori[i].puntiCalvario;
            }
        }
        if (max > -1) 
        {
            giocatori[username].stampaCalvario = stampaCalvario;
            //Stampo il giocatore
            if (eliminati.indexOf(';' + username + ';') == -1)  //Se bannato non lo stampo
               stampaCalvario(username);
        }
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
        if (calvario[i]) {
            //Se si vuole rimettere progressivo 
            /*
            //Se sono in attesa perchè ho superato il turno aggiorno con il progressivo
            // INDEX OF NON FUNZIONA
            if ( calvario[i].stampa == 'XXXXX') {
                if (! stazioneAttese[i]) {stazioneAttese[i] = 0;}
                stazioneAttese[i]++;
                calvario[i].stampa = '<img class="calvario-img" src="img/wait.png"><BR><span style="font-size: 10px;">(' + stazioneAttese[i] + ')</span>';
            }
            */
            if (calvario[i].url != '') {
                riga += '<td class="classifica-calvario2"><a class="username" href="' + calvario[i].url+ '" target=”_blank”> ' +  calvario[i].stampa + '</a><span style="font-size: 10px;"><br>Gruppo: ' + calvario[i].girone;
                var gironiGiocati = '';
                calvario[i].gironiGiocati.sort(mySorterNumeric);
                for (var iGiocati in calvario[i].gironiGiocati) {
                    if (calvario[i].gironiGiocati[iGiocati] != calvario[i].girone)
                        gironiGiocati += calvario[i].gironiGiocati[iGiocati] + '</a>,';
                }
                if (gironiGiocati != '') {
                    gironiGiocati = gironiGiocati.substring(0, gironiGiocati.length-1);
                    riga += ' (' + gironiGiocati + ')';
                }
                riga += '</span></td>'
            } else {
                riga += '<td class="classifica-calvario2">' +  calvario[i].stampa + '</td>'
            }
        }  else {
            //Stazione non presente
            riga += '<td class="classifica-calvario2"> </td>';
        }    
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

//Crea la stazione
function creaStazione(calvario, stazione, iMatch) {
    calvario[stazione] = {};
    calvario[stazione].stampa = '';
    calvario[stazione].vittorie = 0;
    calvario[stazione].vittoriePassaggio = matchs[iMatch].vittoriePassaggio;
    calvario[stazione].dataPassaggio = 9999999999;
    calvario[stazione].dataVittorie = [];
    calvario[stazione].partiteFinite = 0;
    calvario[stazione].girone = matchs[iMatch].girone;
    calvario[stazione].url = 'https://www.chess.com/tournament/' + matchs[iMatch].nome + '/pairings';
    calvario[stazione].puntiClassifica = 0;
    calvario[stazione].gironiGiocati = [];
}

//Per fare il sort di tipo numerico
function mySorterNumeric(a, b){ return (a-b); }