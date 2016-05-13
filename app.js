
var peopleData = new Object();

$.get("data/people.json", function (result) {

    // console.log(result);
    peopleData = result[0];

    console.log(peopleData.john);

    runReact();
});


// console.log(peopleData.john.firstname);

function runReact(){

    var OutputPerson = React.createClass({

        handleClick: function() {
            console.log("clicked");
        },

        render: function() {
            var person = String(this.props.name);

            // console.log(person);
            // console.log(peopleData);
            // console.log(peopleData[person]);

            return (
                <div className="artist" onClick={this.handleClick}>

                    <p>{peopleData[person].name.first} {peopleData[person].name.last}</p>
                    <img src={peopleData[person].picture} />
                    <details>
                        <summary>Read Bio</summary>
                        {peopleData[person].about}
                    </details>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            );
        }
    });

    var OutputLinks = React.createClass({
        render: function() {
            return <div>
            < OutputPerson name="john" />
            < OutputPerson name="paul" />
            < OutputPerson name="ringo" />
            </div>
        }
    })

    ReactDOM.render(
        < OutputPerson name="paul" />,
        document.getElementById('example')
    );
}
