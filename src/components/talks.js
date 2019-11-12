const saveTalk = event => {
    event.preventDefault()

    const newTalk = {
        name: document.getElementById('talkName').value,
        tags: document.getElementById('talkTags').value,
        speakerId: document.getElementById('speakers').value,
        time: document.getElementById('talkTime').value
    }
    console.log(newTalk)
    const btnSubmit = document.getElementById('saveTalkBtn')

    btnSubmit.innerHTML = `
    <div class="spinner-border spinner-border-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
    btnSubmit.setAttribute('disabled', 'true');

    setTimeout(() => {

        store.actions().createTalk(newTalk).then(response => {

            $('#addTalksModal').modal('hide')
            btnSubmit.removeAttribute('disabled')
            btnSubmit.innerHTML = `<i class="fa fa-save"></i> Save`
            loadTalks();
        }).catch(error => {
            console.log(error);
        })


    }, 1000);
}

const loadTalks = () => {
    let talkTemplate = `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">{{SPEAKER}}</div>
        <div class="card-body text-primary">
            <h3 class="card-title">{{TALKTITLE}}</h3>
            <h5 class="card-title">{{TIME}}</h5>
            <p class="card-text">{{TAGS}}</p>
        </div>
    </div>`;

    store.actions().getTalks().then(response => {
        const talks = response;
        let talksContainer = document.getElementById('talksContainer');
        talksContainer.innerHTML = '';
        let resultTemplate = '';

        if (talks.length > 0) {
            talks.forEach(talk => {
                resultTemplate += talkTemplate.replace('{{SPEAKER}}',talk.speakerId)
                .replace('{{TALKTITLE}}',talk.name)
                .replace('{{TIME}}',talk.time)
                .replace('{{TAGS}}',talk.tags) 
            });
            talksContainer.innerHTML = resultTemplate;
        }
    }).catch(error => {
        console.log(error)
    })
}

export default {saveTalk,loadTalks};