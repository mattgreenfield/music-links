
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
        ReactDOM.render(
            <OutputPeople people={peopleToShowArray} />,
            document.getElementById('example')
        );
    });
}

// Component: page
var peopleToShowArray = [
    'john',
    'paul',
    "ringo"
];
var OutputPeople = React.createClass({

    render: function() {
        // the name passed to this function
        var person = String(this.props.name);
        // console.log(person);

        // Loop through the peopleToShowArray array and get which people we need to output
        var peopleList = this.props.people.map(function(name) {
           return <OutputPerson key={name} name={name} />;
        });

        return <div className="peopleList">{peopleList}</div>;
    }
});





// Component: person
var OutputPerson = React.createClass({

    render: function() {
        // the name passed to this function
        var person = String(this.props.name);
        // console.log(person);

        return (
            <div className="artist">
                <p>{peopleData[person].name.first} {peopleData[person].name.last}</p>
                <img src={peopleData[person].picture} />
                <details>
                    <summary>Read Bio</summary>
                    {peopleData[person].about}
                </details>
                < OutputLinks {...this.props} />
            </div>
        );
    }
});


// Component: links
var OutputLinks = React.createClass({


    // Function to render the given 'name' as a new card in the page
    renderNewPerson: function(name) {

        console.log("Clicked: "+name);

        // var parent = findAncestor( document.getElementById('js-link-to-{name}'), 'artist');
        ReactDOM.render(
            < OutputPerson name={name} />,
            document.getElementById('example')
        );
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

                    // Don't output the person as a link to themselves
                    // @TODO: stop it outputting if the name is already in the `links` array
                    if(name != person){
                        // Note: the onClick may look a bit odd, really its just `onClick="handleClick(name)"`. See http://stackoverflow.com/a/20446806/3098555
                        links.push(<li key={a} id="js-link-to-{name}" onClick={this.renderNewPerson.bind(null, name)}>{name}</li>);
                    }
                }
            }

        }

        return <div> Links: <ul className="list--inline">{links}</ul></div>
    }
})
