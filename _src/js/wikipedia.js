// Function to return info from wikipedia
function wikiData(searchTerm, callBack) {

    // replace spaces with %20 etc etc.
    var searchTerm = encodeURIComponent(searchTerm.trim());

    var article = {
        title: "",
        description: "",
        url: ""
    };

    $.ajax({
        // Search wikipedia for our term
        url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch='+ searchTerm,
        data: {
            format: 'json'
        },
        dataType: 'jsonp',
        success: function(data) {

            // Get the title of the first search result
            var pageTitle = data.query.search[0].title;
            // console.log(pageTitle);

            // Get the data of contents of that page
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=xml&search='+ pageTitle +'&namespace=0',
                data: {
                    format: 'json'
                },
                dataType: 'jsonp',
                success: function(data) {
                    // console.log(data);

                    article.title = data[1][0];
                    article.description = data[2][0];
                    article.url = data[3][0];
                    // @TODO Load the image


                    if( typeof(callBack)==='function'){
                        callBack(article);
                    }
                    // console.log(article);
                    // return article;


                },
                type: 'GET'
            });

        },
        type: 'GET'
    });


} // end function
