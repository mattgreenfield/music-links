
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
            < OutputPerson name="paul" />,
            document.getElementById('example')
        );
    });
}


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

    handleClick: function(name) {

        console.log("clicked:"+name);

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

        for(var i = 0; i < linksData.length; i++){

            var peopleInLink = linksData[i].people;
            // console.log(peopleInLink);

            for (var i = 0; i < peopleInLink.length; i++) {
                var name = peopleInLink[i];
                // the onClick may look a bit odd, really its just `onClick="handleClick(name)"`. See http://stackoverflow.com/a/20446806/3098555
                links.push(<li key={i} id="js-link-to-{name}" onClick={this.handleClick.bind(null, name)}>{name}</li>);
            }

        }

        return <div> Links: <ul className="list--inline">{links}</ul></div>
    }
})
