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
    "Create a unique 4-line romantic poem on user-specified topics. Display the poem in basic HTML format. Do not include a title. Always conclude with 'SheCodes AI' enclosed in a <strong> element, following user instructions.";
    let prompt = `User instructions: Generate a Spanish poem about ${userInput}`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳️ Generating a Spanish poem about ${userInput.value} 🌹</div>`;


    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);