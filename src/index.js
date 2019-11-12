import baseURL from './env'

const saveSpeaker = event => {
    event.preventDefault()

    const newSpeaker = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        github_account: document.getElementById('githubUser').value
    }
    const btnSubmit = document.getElementById('saveSpeakerBtn')

    btnSubmit.innerHTML = `
    <div class="spinner-border spinner-border-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
    btnSubmit.setAttribute('disabled', 'true');

    setTimeout(() => {
        btnSubmit.removeAttribute('disabled')
        btnSubmit.innerHTML = `<i class="fa fa-save"></i> Save`

        const options = {
            method: 'POST',
            body: JSON.stringify(newSpeaker), 
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${baseURL}/speakers`,options)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                $('#addSpeaker').modal('hide')
                console.log(myJson);
            });


    }, 1000);
    console.log(newSpeaker)
}