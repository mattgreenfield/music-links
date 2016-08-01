// Function to return info from wikipedia
function wikiData(searchTerm, callBack) {

    // replace spaces with %20 etc etc.
    // var searchTerm = searchTerm.replace(" ","").toLowerCase();
        // console.log(searchTerm);
    var searchTerm = encodeURIComponent( camelToSpace(searchTerm) );

    var article = {
        name: "",
        description: "",
        url: ""
    };

    $.ajax({
        // Search wikipedia for our term
        url:'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+searchTerm+'%22AND%22Born%22AND%22music&format=jsonfm&srlimit=1',
        data: {
            format: 'json'
        },
        dataType: 'jsonp',
        success: function(data) {

            var article = {};

            // Set the name and description as the result from wikipedia
            article.name = data.query.search[0].title;
            article.description = data.query.search[0].snippet.replace(/<(?:.|\n)*?>/gm, '');
            // @TODO Load the image

            if( typeof(callBack)==='function'){
                callBack(article);
            }


        },
        type: 'GET'
    });


} // end function
