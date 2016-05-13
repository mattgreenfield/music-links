
var OutputPerson = React.createClass({

    // Empty State
    getInitialState: function() {
        return {
            firstName: '',
            lastName: '',
            image: ''
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get("data/people.json", function (result) {
            // console.log(result);
            var data = result[0][this.props.name];

            this.setState({
                firstName: data.name.first,
                lastName: data.name.last,
                image: data.picture,
                bio: data.about,
                related: data.related
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    handleClick: function() {
        console.log("clicked");
    },

    render: function() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.state.image}/>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <details>
                    <summary>Read Bio</summary>
                    {this.state.bio}
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
    < OutputPerson name="john" />,
    document.getElementById('example')
);
