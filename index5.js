//Windows -> The window object represents the browser window or tab where your web page is loaded. It is the global object in JavaScript for browser-based environments. Any variables, functions, or objects declared globally are actually part of the window object.

        // The window object gives access to browser-related features like alerts, timers, current URL, history, etc.
        // All global JavaScript variables and functions are stored as properties/methods of the window object.


// DOM -> The DOM represents the structure of your web page as a tree of elements and nodes. It allows JavaScript to interact with and manipulate HTML and CSS on the webpage.

        // The DOM is accessed using the document object (a part of the window object).
        // You can add, remove, or update elements on the page dynamically using DOM methods like:
                                                // getElementById, querySelector, createElement, etc.


// BOM -> The BOM refers to browser-specific objects that are not part of the DOM but provide control over the browser environment or we can say that it helps to communicate with the browser. It includes objects for the browser window, history, location, and more.

        // The BOM is accessed using the window object.
        // Some examples of BOM objects include:
                        // window.innerHeight, window.innerWidth, window.location, etc.
        // The BOM lets you interact with the browser environment itself.
        // It includes:
                // navigator (info about the browser and user agent),
                // location (current URL and redirection),
                // history (browsing history),
                // screen (screen dimensions).



// DOM :-
            // html
            // characters -> tags -> tokens(with the help of tokenizer) -> nodes -> DOM


// getElementByID -> It is called on document object and it returns single object

//getElementsByClassName and getElementsByTagName -> Both method use document object
                                                //   Both returns multiple items
                                                //   The list returned is not an array, actually it is a HTML collection