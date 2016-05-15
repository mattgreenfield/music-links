
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
        <OutputPeople />,
        document.getElementById('page')
    );
}

// Component: page
var peopleToShowArray = [
    'john'
];
var OutputPeople = React.createClass({

    render: function() {

        // Loop through the peopleToShowArray array and add the output of each person we need to output
        var peopleList = [];
        var lastPerson;
        for(var i = 0; i < peopleToShowArray.length; i++){
            peopleList.push(<OutputPerson key={peopleToShowArray[i]} name={peopleToShowArray[i]}/>);
            lastPerson = peopleToShowArray[i];
        }
        // console.log(lastPerson);

        // Output everyone in the 'peopleList' array and the links to the 'lastPerson'
        return (
            <main>
                {peopleList}
                < OutputLinks name={lastPerson}/>
            </main>
        );
    }
});





// Component: person
var OutputPerson = React.createClass({

    render: function() {
        // the name passed to this function
        var person = String(this.props.name);
        // console.log(person);

        return (
            <article className="row" parent="">
                <main className="artist">
                    <div className="artist__image">
                        <img src={peopleData[person].picture} />
                    </div>
                    <div className="artist__text">
                        <h1>{peopleData[person].name.first} {peopleData[person].name.last}</h1>
                        {peopleData[person].about}
                    </div>
                </main>
            </article>
        );
    }
});


// Component: links
var OutputLinks = React.createClass({


    // Function to render the given 'name' as a new card in the page
    renderNewPerson: function(name) {

        console.log("Clicked: "+name);

        // if they aren't already in the peopleToShowArray array, add them to it
        // if( peopleToShowArray.indexOf(name) != -1 ){
            peopleToShowArray.push(name);
        // }
        console.log(peopleToShowArray);

        // Now we have the people data, run react and render the site
        buildPage();
    },

    render: function() {

        // Get the person we want to find links for
        var person = String(this.props.name);
        var links = [];
        // console.log(linksData.length);

        // Loop through all the relationships in relationships.json / linksData array
        for(var i = 0; i < linksData.length; i++){

            var peopleInLink = linksData[i].people;
            var linkDescription = linksData[i].description;
            // console.log(peopleInLink);

            // Check if the person whos card we are building is in this entry of the json
            if( peopleInLink.indexOf(person) != -1 ){
                // console.log("we have a link");

                // Loop through all the names in that link / json entry
                for (var a = 0; a < peopleInLink.length; a++) {
                    var name = peopleInLink[a];
                    var fullName = peopleData[name].name.first + " " + peopleData[name].name.last;

                    // Don't output the person as a link to themselves
                    // @TODO: stop it outputting if the name is already in the `links` array
                    if(name != person){
                        // Note: the onClick may look a bit odd, really its just `onClick="handleClick(name)"`. See http://stackoverflow.com/a/20446806/3098555
                        links.push(<li key={a} id="js-link-to-{name}" onClick={this.renderNewPerson.bind(null, name)}>{fullName}</li>);
                        // links.push(<OutputPerson key={a} name={name} onClick={this.renderNewPerson.bind(null, name)}/>);
                    }
                }
            }

        }

        return <div className="links row">{links}</div>
    }
})
