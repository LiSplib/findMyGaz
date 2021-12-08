async function main(withIP = true) {
    let ville;
    let src = document.querySelector('iframe');
    console.log(src.getAttribute('src'));
    if (withIP) {
        const ip = await fetch('https://api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip)
            .catch(err => handleError(err));

        ville = await fetch('https://freegeoip.app/json/' + ip)
            .then(resultat => resultat.json())
            .then(json => json)
            .catch(err => handleError(err));

    } else {
        ville = document.querySelector('#ville').textContent;

    }
    let link = "https://data.opendatasoft.com/explore/embed/dataset/stations-services-en-france@datanova/map/?flg=fr&disjunctive.typeroute&disjunctive.commune&disjunctive.codepostal&disjunctive.services&disjunctive.carburants&disjunctive.activite&location=15," + ville.latitude + "," + ville.longitude + "&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=false"
    console.log(link);
    src.setAttribute('src', link);
}

const ville = document.querySelector('#ville');
ville.addEventListener('click', () => {
    ville.contentEditable = true;
});
ville.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        ville.contentEditable = false;
        main(false);
    }
});

main();

