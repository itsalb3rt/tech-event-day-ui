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

        store.actions().createSpeaker(newSpeaker).then(response => {
            
            btnSubmit.removeAttribute('disabled')
            btnSubmit.innerHTML = `<i class="fa fa-save"></i> Save`
            $('#addSpeaker').modal('hide')
        }).catch(error => {
            console.log(error);
        })


    }, 1000);
}

const loadSpeakers = () => {
    store.actions().getSpeakers().then(response => {
        const speakers = response;
        let speakersList = document.getElementById('speakers');
        speakersList.innerHTML = '';

        if (speakers.length > 0) {
            speakers.forEach(speaker => {
                speakersList.innerHTML += `<option value="${speaker.id}">${speaker.name}</option>`
            });
        }
    }).catch(error => {
        console.log(error)
    })
}

export default {
    saveSpeaker,
    loadSpeakers
};