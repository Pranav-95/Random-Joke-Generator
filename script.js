const jokeEl = document.getElementById('joke');          // get the joke from id in div from HTML file in line 14.
const get_joke = document.getElementById('get_joke');    // get the get_joke from id in button from HTML file in line 17.

get_joke.addEventListener('click', generateJoke);
generateJoke();                                          // call the function 

async function generateJoke(){
    // call the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {     // when button is clicked we make another request to the API to get another joke and save it again, basically change the innerHTML.
        headers: {
            'Accept': 'application/json'       // this will tell that we need a JSON response


        }
    });

    const joke = await jokeRes.json();     // save the joke 

    // set the new joke
    jokeEl.innerHTML = joke.joke;    // store the response joke inside the div
}

