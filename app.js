
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

// Component: page
var peopleToShowArray = [
    {person: 'john', link: 'john'}
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
            </main>
        );
    }
});





// Component: person
var OutputPerson = React.createClass({

    // Function to render the given 'name' as a new card in the page
    renderNewPerson: function(name, linkedFrom) {

        // console.log("Clicked: "+name);

        // if they aren't already in the peopleToShowArray array, add them to it
        // if( peopleToShowArray.indexOf(name) == -1 ){
            var object = {person: name, link: linkedFrom};
            peopleToShowArray.push(object);
        // }
        // else {
        //     alert("They're already on the page.");
        // }
        // console.log(peopleToShowArray);

        // Now we have the people data, run react and render the site
        buildPage();
    },

    render: function() {
        // the name passed to this function
        var person = String(this.props.name);
        var linkedFrom = this.props.linkedFrom;


        // console.log(person);

        var clickEvent;
        // if this is a link, add the renderNewPerson() function onclick
        if(this.props.link){
            // Note: the onClick may look a bit odd, really its just `onClick="renderNewPerson(name)"`. See http://stackoverflow.com/a/20446806/3098555
            clickEvent = this.renderNewPerson.bind(null, person, linkedFrom);
        }
        else {
            // TODO: Reset the chain up to this person, maybe with a "are you sure"
        }

        return (
                <article className="artist" onClick={clickEvent}>
                    <div className="artist__image">
                        <img src={peopleData[person].picture} />
                    </div>
                    <div className="artist__text">
                        <h1>{peopleData[person].name.first} {peopleData[person].name.last}</h1>
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

            // Check if the person whos card we are building is in this entry of the json
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

    render: function() {

        // Get the person we want to find links for
        var person = this.props.name;
        var links = [];
        // console.log(linksData.length);

        // Loop through all the relationships in relationships.json / linksData array
        for(var i = 0; i < linksData.length; i++){

            var peopleInLink = linksData[i].people;
            // console.log(peopleInLink);

            // Check if the person whos card we are building is in this entry of the json
            if( peopleInLink.indexOf(person) != -1 ){
                // console.log("we have a link");

                // Loop through all the names in that link / json entry
                for (var a = 0; a < peopleInLink.length; a++) {
                    var linkName = peopleInLink[a];

                    // Don't output the person as a link to themselves
                    // @TODO: stop it outputting if the name is already in the `links` array / on the page?
                    if(linkName != person){
                        links.push(<OutputPerson key={a} name={linkName} linkedFrom={person} link="true"/>);
                    }
                }
            }

        }

        return <section className="row row--links"><h1>Choose A Link</h1>{links}</section>
    }
})
