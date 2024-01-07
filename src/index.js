function displayPoem(response)  {
new Typewriter("#poem", {
	strings: response.data.answer,
	autoStart: true,
    delay: 1,
    cursor: "",
});
}

function generatePoem(event)  {
    event.preventDefault();

    let userInput = document.querySelector("#user-input");
    let apiKey = "cc8ad09bc07492ceeb391dfbot84812f";
    let context = 
    "You are a romantic poem expert and love to write short poems. Generate a 4 line poem in basic HTML format. You must follow the user instructions. Do not include a title for the poem. Sign the poem with 'SheCodes AI' inside a <stong> element at the end of the poem.";
    let prompt = `User instructions: Generate a Spanish poem about${userInput}`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);