var InitialState = React.createClass({

    //
    clickEvent: function(person) {
        peopleToShowArray = [
            {person: person, link: 'georgeHarrison'}
        ];
        console.log('Starting with '+person);
        ReactDOM.render(
            <OutputPage />,
            document.getElementById('page')
        );
    },

    render: function() {

        var _this = this;
        //
        return (
            <main>
                <ul className="list--inline initial-list">
                    {peopleData.map(function(person){
                        return <li onClick={_this.clickEvent.bind(null, person) } name={person} >{camelToSpace(person)}</li>;
                    })}
                </ul>
            </main>
        );
    }
});
