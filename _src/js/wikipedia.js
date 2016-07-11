// Function to return info from wikipedia
function wikiData(searchTerm, callBack) {

    // replace spaces with %20 etc etc.
    var searchTerm = encodeURIComponent( camelToSpace(searchTerm) );

    var article = {
        name: "",
        description: "",
        url: ""
    };

    $.ajax({
        // Search wikipedia for our term
        // url:'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+ searchTerm +'%22AND%22Born%22AND%22Occupation%22&format=jsonfm&srprop=snippet&srlimit=1',
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=embeddedin&titles='+ searchTerm +'&prop=extracts&eititle=Template%E2%80%8C%E2%80%8B:Persondata&format=json',
        // url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch='+ searchTerm,
        data: {
            format: 'json'
        },
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);

            // Get first object within object (the first search result). See http://stackoverflow.com/a/909058/3098555
            var obj = data.query.pages;
            var article;
            for (var i in obj) {
                if (obj.hasOwnProperty(i) && typeof(i) !== 'function') {
                    article = obj[i];
                    break;
                }
            }
            console.log(article);

            // Set the name and description as the result from wikipedia
            article.name = article.title;
            article.description = article.extract;
            // article.url = data[3][0];
            // @TODO Load the image

            if( typeof(callBack)==='function'){
                callBack(article);
            }

        },
        type: 'GET'
    });


} // end function
