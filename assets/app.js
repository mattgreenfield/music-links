var peopleData = [{

    "georgeHarrison": {
        "picture": "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTI3ODgzMTQ1MTU5NzAwNDUw.jpg",
        "name": "George Harrison",
        "about": "Mollit minim adipisicing labore culpa laborum Lorem."
    },
    "paulMcCartney": {
        "picture": "https://s-media-cache-ak0.pinimg.com/736x/85/3d/e2/853de2b8224c681079a3a66111bd97ec.jpg",
        "name": "Paul McCartney",
        "about": "Mollit minim adipisicing labore culpa laborum Lorem."
    },
    "johnLennon": {
        "picture": "http://www.straight.com/files/v3/images/15/12/johnlennon.jpg",
        "name": "John Lennon",
        "about": "Mollit minim adipisicing labore culpa laborum Lorem."
    },
    "ringoStarr": {
        "picture": "https://streetsandstyle.files.wordpress.com/2014/07/169.jpg",
        "name": "Ringo Starr",
        "about": "Mollit minim adipisicing labore culpa laborum Lorem."
    },
    "paulWeller": {
        "picture": "/",
        "name": "Paul Weller",
        "about": "The Modfather"
    },
    "damonAlbarn": {
        "picture": "/",
        "name": "Damon Albarn",
        "about": ""
    },
    "alexJames": {
        "picture": "/",
        "name": "Alex James",
        "about": "Bassist in Blur"
    },
    "grahamCoxon": {
        "picture": "/",
        "name": "Graham Coxon",
        "about": "Guitarist in Blur"
    },
    "daveRowntree": {
        "picture": "/",
        "name": "Dave Rowntree",
        "about": "Drummer in Blur"
    },
    "bobbyWomack": {
        "picture": "/",
        "name": "Bobby Womack",
        "about": ""
    },
    "ericClapton": {
        "picture": "http://cdn.amazingradios.com/blues/2014/11/eric.jpg",
        "name": "Eric Clapton",
        "about": "Guitarist and lover of the Fender strat."
    }


}]

var linksData = [{
        "people": ["georgeHarrison","paulMcCartney","johnLennon","ringoStarr"],
        "description": "They are linked because they were all in The Beatles"
    },
    {
        "people": ["paulWeller","grahamCoxon"],
        "description": "Worked together on the single 'This old town', release in...."
    },
    {
        "people": ["grahamCoxon","alexJames","damonAlbarn","daveRowntree"],
        "description": "Members of britop sensation 'Blur'"
    },
    {
        "people": ["bobbyWomack","damonAlbarn"],
        "description": "Worked together as part of 'Gorillaz'."
    },
    {
        "people": ["paulMcCartney","kanyeWest"],
        "description": "Recorded a single together'."
    },
    {
        "people": ["ericBibb","steveSimpson","daveBronze"],
        "description": "Steve Simpson and Dave Bronze have toured together as the backing band for Eric Bibb"
    },
    {
        "people": ["steveSimpson","ronnieLane"],
        "description": "Ronnie Lanes & Slim Chance"
    },
    {
        "people": ["ronnieWood","ronnieLane","rodStewart","ianMclagan"],
        "description": "The Faces"
    },
    {
        "people": ["steveMarriot","ronnieLane","ianMclagan","kennyJones","jimmyWinston"],
        "description": "The Small Faces"
    },
    {
        "people": ["ronnieWood","jeffBeck","rodStewart"],
        "description": "The Jeff Beck Group"
    },
    {
        "people": ["ericClapton","jeffBeck","jimmyPage"],
        "description": "All members of The Yardbirds"
    },
    {
        "people": ["steveWinwood", "jimCapaldi", "chrisWood", "daveMason"],
        "description": "All members of Traffic"
    },
    {
        "people": ["ericClapton","jackBruce","gingerBaker"],
        "description": "All members of Cream"
    },
    {
        "people": ["ericClapton","steveWinwood","gingerBaker","ricGrech"],
        "description": "All members of Blind Faith"
    },
    {
        "people": ["johnMayer","ericClapton"],
        "description": "John Mayer has played at lots of Eric Claptons Crossroad Festivals"
    },
    {
        "people": ["steveJordan","ericClapton"],
        "description": "Steve toured as Erics drummer for many years"
    },
    {
        "people": ["johnMayer","steveJordan","pinoPalladino"],
        "description": "The John Mayer Trio. They met..."
    },
    {
        "people": ["questLove","pinoPalladino", "dAngelo"],
        "description": "Superjam"
    },
    {
        "people": ["questLove","elvisCostello"],
        "description": "Made an albums together, 'Wise Up Ghost'"
    },
    {
        "people": ["questLove","bettyWright"],
        "description": "Made an albums together, 'Betty Wright: The Movie'"
    },
    {
        "people": ["jeffBeck","pinoPalladino"],
        "description": "In spring of 2006, Palladino toured with Jeff Beck. He appears on Jeff Beck's 2010 album, Emotion & Commotion. "
    },
    {
        "people": ["jjCale", "ericClapton", "derekTrucks", "billyPreston", "pinoPalladino"],
        "description": "The J. J. Cale, and Eric Clapton 2006 album The Road to Escondido,"
    },
    {
        "people": ["ericClapton","pinoPalladino"],
        "description": "Palladino joined Eric Clapton's touring band for 11 dates in the Eastern US and Canada in May 2008."
    },
    {
        "people": ["herbieHancock","pinoPalladino"],
        "description": "As of August 2010, Palladino has been touring with Herbie Hancock."
    },
    {
        "people": ["steveGadd","pinoPalladino", "edieBrickell", "andyFairweatherLow"],
        "description": " recording with Steve Gadd; Edie Brickell; Andy Fairweather Low; who have formed a group the Gaddabouts."
    },
    {
        "people": ["pinoPalladino", "dAngelo"],
        "description": "In January 2011, Palladino entered the studio with D'Angelo to finish recording the long overdue follow up to Voodoo."
    },
    {
        "people": ["pinoPalladino", "dAngelo", "chrisDave", "jesseJohnson"],
        "description": "In January and February 2012, Palladino joined D'Angelo's live band for a short European tour, alongside drummer Chris 'Daddy' Dave and guitarist Jesse Johnson."
    },
    {
        "people": ["pinoPalladino", "adele"],
        "description": "Palladino played on the second album of Adele: 21, released in 2011"
    },
    {
        "people": ["pinoPalladino", "rogerDaltrey"],
        "description": " In late 2012, Palladino toured with the Who on their Quadrophenia 'revival' tour"
    },
    {
        "people": ["steveGadd", "paulSimon"],
        "description": "Gadd is famous for playing the drums on Simon's '50 Ways to Leave Your Lover'. They also worked together on Simon & Garfunkel records."
    },
    {
        "people": ["steveGadd", "walterBecker", "donaldFagen"],
        "description": "Gadd's drum solo on Steely Dan's 'Aja'."
    },
    {
        "people": ["steveGadd", "jamesTaylor"],
        "description": ""
    },
    {
        "people": ["steveGadd", "ericClapton"],
        "description": ""
    },
    {
        "people": ["steveGadd", "joeCocker"],
        "description": ""
    },
    {
        "people": ["steveGadd", "chichCorea"],
        "description": ""
    },
    {
        "people": ["donaldFagen", "steveJordan"],
        "description": "Steve Jordan has drummed on a few of Fagens solo albums"
    }
]


var currentlyDisplayedPeople = {};

function checkPeople(){

    // Get the people data
    peopleData = peopleData[0];
    // console.log(peopleData);

    // make sure we've missed nobody
    // Loop through all the relationships and add the people in them to the peopleData array (if they're not already in it).
    for(var i = 0; i < linksData.length; i++){
        var peopleInLink = linksData[i].people;
        for(var a = 0; a < peopleInLink.length; a++){
            var name = peopleInLink[a];
            // console.log(name);
            // If they aren't already in it...
            if( !peopleData.hasOwnProperty(name) ){
                // ...add this person to the peopleData object.
                peopleData[name] = {
                    "picture": "http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png",
                    "name": camelToSpace(name),
                    "about": ""
                };
            }

        }
    }

}

checkPeople();
console.log(peopleData);
// Now we have the people data, run react and render the site
buildPage();


function buildPage(){
    ReactDOM.render(
        <OutputPage />,
        document.getElementById('page')
    );
}

// Function. Helper
// Convert camelCase to spaced
function camelToSpace(str) {
    // split by ' ' at the uppercase letter
    var split =  str.replace(/\W+/g, ' ')
            .replace(/([a-z\d])([A-Z])/g, '$1 $2');
    // Return with the first letter uppercase also
    return split.charAt(0).toUpperCase() + split.slice(1);
}

// Function: get person data
var personPicture, personFullName, personBio;
function GetPersonData(person){
    personPicture = peopleData[person].picture;
    personFullName = peopleData[person].name;
    personBio = peopleData[person].about;
};


// Function to render the given 'name' as a new card in the page
function renderNewPerson(name, linkedFrom) {

    // console.log("Clicked: "+name);

    // add the clicked person to the peopleToShowArray array,
    var object = {person: name, link: linkedFrom};
    peopleToShowArray.push(object);

    // Rebuild the page with the new peopleToShowArray values
    buildPage();
};

// Function to check if a person is already on the page
function alreadyOnPage(personToCheck) {

    for( var i = 0; i < peopleToShowArray.length; i++){
        if( peopleToShowArray[i].person == personToCheck){
            // console.log(personToCheck + " is already on the page.");
            return true;
        }
    }

}



// Component: page
var peopleToShowArray = [
    {person: 'jeffBeck', link: 'georgeHarrison'}
];
// console.log(peopleToShowArray);

var OutputPage = React.createClass({

    render: function() {

        // Loop through the peopleToShowArray array and add the output of each person we need to output
        var peopleList = [];
        var lastPerson;
        for(var i = 0; i < peopleToShowArray.length; i++){

            lastPerson = peopleToShowArray[i].person;
            var key = "from-"+peopleToShowArray[i].link+"-to-"+peopleToShowArray[i].person;

            peopleList.push(<div className="row row--artist">< OutputLink linkedFrom={peopleToShowArray[i].link} linkedTo={peopleToShowArray[i].person} /><OutputPerson key={key} name={peopleToShowArray[i].person} linkedFrom={peopleToShowArray[i].link}/></div>);
        }
        // console.log(lastPerson);

        // Output everyone in the 'peopleList' array and the links to the 'lastPerson'
        return (
            <main>
                {peopleList}
                < OutputLinkOptions linkedFrom={lastPerson}/>
                <div className="connections-counter"><span>{peopleToShowArray.length - 1}</span> Connections</div>
            </main>
        );
    }
});




// Component: output a person card
var OutputPerson = React.createClass({

    render: function() {
        // the name passed to this function
        var person = String(this.props.name);
        var linkedFrom = this.props.linkedFrom;

        // Get the data for this person
        GetPersonData(person);

        // console.log(person);

        return (
                <article className="artist">
                    <div className="artist__image">
                        <img src={personPicture} />
                    </div>
                    <div className="artist__text">
                        <h1>{personFullName}</h1>
                        <p>{personBio}</p>
                    </div>
                </article>
        );
    }
});


// Component: link. The line that connects two artists
var OutputLink = React.createClass({

    render: function() {
        var linkedFrom = this.props.linkedFrom;
        var linkedTo = this.props.linkedTo;
        var linkDescription;
        for(var i = 0; i < linksData.length; i++){

            var peopleInLink = linksData[i].people;
            // console.log(peopleInLink);

            // Check if the two people we are linking are in this array
            if( peopleInLink.indexOf(linkedFrom) != -1 && peopleInLink.indexOf(linkedTo) != -1){
                // console.log("we have a link");

                linkDescription = linksData[i].description;
            }

        }

        return <div className="link"><div className="link__content">{linkDescription}</div></div>;
    }
});


// Component: link options
var OutputLinkOptions = React.createClass({

    // Render a new person when one of the link options is clicked
    clickEvent: function(linkingTo, linkedFrom) {
        renderNewPerson(linkingTo, linkedFrom)
    },

    render: function() {

        // Get the person we want to find links for
        var linkedFrom = this.props.linkedFrom;
        var links = [];
        // console.log(linksData.length);

        // Loop through all the relationships in relationships.json / linksData array
        for(var i = 0; i < linksData.length; i++){

            var peopleInLink = linksData[i].people;
            // console.log(peopleInLink);

            // Check if the person whos card we are building is in this entry of the json
            if( peopleInLink.indexOf(linkedFrom) != -1 ){
                // console.log("we have a link");

                // Loop through all the names in that link / json entry
                for (var a = 0; a < peopleInLink.length; a++) {
                    // the person we're linking too
                    var linkingTo = peopleInLink[a];
                    var itemClass = "link-choices__item";

                    // Don't output the person as a link to themselves OR if they are already on the page
                    if( linkingTo != linkedFrom ){

                        // Get the data for this person
                        GetPersonData(linkingTo);
                        // Note: the onClick may look a bit odd, really its just `onClick="renderNewPerson(name)"`. See http://stackoverflow.com/a/20446806/3098555
                        var clickEvent = this.clickEvent.bind(null, linkingTo, linkedFrom);

                        // Check the 'peopleToShowArray' to see if that person is already on the page. Remove the click to add person and add a modifier class for the css
                        if( alreadyOnPage(linkingTo) ){
                            clickEvent = "";
                            itemClass += " link-choices__item--disabled";
                        };

                        var key = a + "-link-to-" + linkingTo + "-from-" + linkedFrom;

                        // Add the markup
                        links.push(<li key={key} onClick={clickEvent} className={itemClass}><p>{personFullName}</p><img src={personPicture}/></li>);
                    }
                }
            }

        }
        // console.log(links);

        return <section className="row row--links"><h1>Choose A Link</h1><ul className="link-choices">{links}</ul></section>
    }
})
