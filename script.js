var sources = [
    // Tier 1
    { name: 'David Ornstein', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'https://twitter.com/David_Ornstein' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 1, workplace: 'The Guardian', link: 'https://twitter.com/FabrizioRomano' },
    { name: 'BBC Sport', type: 'media', tier: 1, workplace: null, link: 'https://www.bbc.com/sport/football/teams/arsenal' },
    // Tier 2
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 2, workplace: 'RMC', link: 'https://twitter.com/mohamedbouhafsi?lang=en' },
    { name: 'James McNicholas', type: 'journalist', tier: 2, workplace: 'The Athletic', link: 'https://twitter.com/jamesmcnicholas' },    
    { name: 'Amy Lawrence', type: 'journalist', tier: 2, workplace: 'The Athletic', link: 'https://twitter.com/amylawrence71' },
    { name: 'BILD', type: 'media', tier: 2, workplace: null, link: 'https://www.bild.de/sport/fussball/fussball/home-15769054.bild.html' },
    // Tier 3   
    { name: 'James Olley', type: 'journalist', tier: 3, workplace: 'ESPN', link: 'https://twitter.com/JamesOlley' },   
    { name: 'Mark Ogden', type: 'journalist', tier: 3, workplace: 'ESPN', link: 'https://twitter.com/MarkOgden_' },
    { name: 'Simon Stone', type: 'journalist', tier: 3, workplace: 'BBC', link: 'https://twitter.com/sistoney67' },
    { name: 'Raphael Honigstein', type: 'journalist', tier: 3, workplace: 'The Athletic', link: 'https://twitter.com/honigstein' },  
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 3, workplace: 'Sky', link: 'https://twitter.com/DiMarzio' },
    { name: 'Charles Watts', type: 'journalist', tier: 3, workplace: 'Goal', link: 'https://twitter.com/charles_watts' },
    { name: 'James Benge', type: 'journalist', tier: 3, workplace: 'football.london', link: 'https://twitter.com/jamesbenge' },
    { name: 'Chris Wheatley', type: 'journalist', tier: 3, workplace: 'GoonerTalk', link: 'https://twitter.com/ChrisWheatley_' },
    { name: 'Sky Sports', type: 'media', tier: 3, workplace: null, link: 'https://www.skysports.com/arsenal' },
    { name: 'L\'Equipe', type: 'media', tier: 3, workplace: null, link: 'https://twitter.com/lequipe' },
    { name: 'The Times', type: 'media', tier: 3, workplace: null, link: 'https://twitter.com/TimesSport' },
    { name: 'El Confidencial', type: 'media', tier: 3, workplace: null, link: 'https://www.elconfidencial.com/deportes/futbol/' },
    // Tier 4
    { name: 'Kaveh Solhekol', type: 'journalist', tier: 4, workplace: 'Sky', link: 'https://twitter.com/SkyKaveh' },
    { name: 'Dharmesh Sheth', type: 'journalist', tier: 4, workplace: 'Sky', link: 'https://twitter.com/skysports_sheth?lang=en' },
    { name: 'John Cross', type: 'journalist', tier: 4, workplace: 'Mirror', link: 'https://twitter.com/johncrossmirror' },
    { name: 'Mundo Deportivo', type: 'media', tier: 4, workplace: null, link:'https://twitter.com/mundodeportivo' },
    { name: 'Marca', type: 'media', tier: 4, workplace: null, link: 'https://www.marca.com/futbol/arsenal.html' },
    { name: 'football.london', type: 'media', tier: 4, workplace: null, link: 'https://www.football.london/arsenal-fc/' },
    { name: 'Cadena SER', type: 'media', tier: 4, workplace: null, link: 'https://cadenaser.com/tag/arsenal/a' },
    { name: 'AS', type: 'media', tier: 4, workplace: null, link: 'https://en.as.com/'},
    { name: 'SPORT', type: 'media', tier: 4, workplace: null, link: 'https://www.sport.es/en/' },
    { name: 'BILD Sport', type: 'media', tier: 4, workplace: null, link: 'https://sportbild.bild.de' },
    // Tier 5
    { name: 'Muzzi Ozcan', type: 'journalist', tier: 5, workplace: 'Agent', link: 'https://twitter.com/muzziozcan?lang=en' },    
    { name: 'Tancredi Palmeri', type: 'journalist', tier: 5, workplace: 'beIN Sports', link: 'https://twitter.com/tancredipalmeri' },
    { name: 'AFC Horse', type: 'media', tier: 5, workplace: null, link: 'https://twitter.com/afcarsenalhorse?lang=en' },    
    { name: 'Metro', type: 'media', tier: 5, workplace: null, link: '##'},
    { name: 'Express', type: 'media', tier: 5, workplace: null, link: '##' },
    { name: 'The Sun', type: 'media', tier: 5, workplace: null, link: '##' },
    { name: 'Daily Mail', type: 'media', tier: 5, workplace: null, link: '##' },
    { name: 'Mirror', type: 'media', tier: 5, workplace: null, link: '##' },
    { name: 'AFCAMDEN', type: 'media', tier: 5, workplace: null, link: 'https://twitter.com/AFCAMDEN' },
    { name: 'JOE', type: 'media', tier: 5, workplace: null, link: 'https://www.joe.co.uk' },
    { name: 'Caught Offside', type: 'media', tier: 5, workplace: null, link: 'https://www.caughtoffside.com' },       
    { name: '90min', type: 'media', tier: 5, workplace: null, link: 'https://www.90min.com' },
    { name: 'Geoff Arsenal', type: 'media', tier: 5, workplace: null, link: 'https://twitter.com/geoffarsenal' },
    { name: 'HITC', type: 'media', tier: 5, workplace: null, link: 'https://www.hitc.com/en-gb/football/' },
    { name: 'Bleacher Report', type: 'media', tier: 5, workplace: null, link: 'https://bleacherreport.com' },
];

sources.forEach(function (source) {
    var element = document.createElement('div');
    if (source.type === 'journalist') {
        element.className = 'source journalist';
        if (source.workplace) {
            element.innerHTML = '<a href="' + source.link + '"> ' + source.name + '</a> <span class="workplace">(' + source.workplace + ')</span>';
        }
        else {
            element.innerHTML = source.name;
        }
    }
    else {
        element.className = 'source media';
        element.innerHTML = '<a href="' + source.link + '"> ' + source.name + '</a>';

    }
    document.querySelector('.tier-' + source.tier + ' .tier-content').appendChild(element);
});

// Insert breaks before the start of each source of type media

document.querySelectorAll('.tier-content').forEach(function (item) {
    var element = item.querySelector('.media');
    if (element) {
        var newElement = document.createElement('div');
        newElement.className = 'flex-break';
        element.parentNode.insertBefore(newElement, element);
    }
});