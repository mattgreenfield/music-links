
var peopleData = new Object();
var linksData = new Object();
var currentlyDisplayedPeople = {};

$.get("data/relationships.json", function (result) {

    linksData = result;
    // console.log(linksData);

    // now we have the relationships data, get the people data
    getPeople()
});


function getPeople(){

    $.get("data/people.json", function (result) {

        peopleData = result[0];
        // console.log(peopleData.john);

        // Now we have the people data, run react and render the site
        buildPage();
    });
}

function buildPage(){
    ReactDOM.render(
        <OutputPage />,
        document.getElementById('page')
    );
}



// Function: get person data
var personPicture, personFullName, personBio;
function GetPersonData(person){
    personPicture = peopleData[person].picture;
    personFullName = peopleData[person].name.first + " " + peopleData[person].name.last;
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
    {person: 'paulMcCartney', link: 'georgeHarrison'}
];
// console.log(peopleToShowArray);

var OutputPage = React.createClass({

    render: function() {

        // Loop through the peopleToShowArray array and add the output of each person we need to output
        var peopleList = [];
        var lastPerson;
        for(var i = 0; i < peopleToShowArray.length; i++){
            peopleList.push(<div className="row row--artist">< OutputLink linkedFrom={peopleToShowArray[i].link} linkedTo={peopleToShowArray[i].person} /><OutputPerson key={peopleToShowArray[i]} name={peopleToShowArray[i].person} linkedFrom={peopleToShowArray[i].link}/></div>);
            lastPerson = peopleToShowArray[i].person;
        }
        // console.log(lastPerson);

        // Output everyone in the 'peopleList' array and the links to the 'lastPerson'
        return (
            <main>
                {peopleList}
                < OutputLinkOptions name={lastPerson}/>
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
        var linkedFrom = this.props.name;
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

                        // Add the markup
                        links.push(<li key={a} onClick={clickEvent} className={itemClass}><p>{personFullName}</p><img src={personPicture}/></li>);
                    }
                }
            }

        }

        return <section className="row row--links"><h1>Choose A Link</h1><ul className="link-choices">{links}</ul></section>
    }
})
