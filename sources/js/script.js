async function main(withIP = true) {
    let ville;
    let src = document.querySelector('iframe');
    if (withIP) {
        const ip = await fetch('https://api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip)
            .catch(err => handleError(err));

        ville = await fetch('https://freegeoip.app/json/' + ip)
            .then(resultat => resultat.json())
            .then(json => json)
            .catch(err => handleError(err));

    }

    let link = "https://data.opendatasoft.com/explore/embed/dataset/stations-services-en-france@datanova/map/?flg=fr&disjunctive.typeroute&disjunctive.commune&disjunctive.codepostal&disjunctive.services&disjunctive.carburants&disjunctive.activite&location=15," + ville.latitude + "," + ville.longitude + "&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=false"
    src.setAttribute('src', link);
}

const ville = document.querySelector('#search');
console.log(ville);

ville.addEventListener('submit', (e) => {
    console.log(e.content);
});

main();

