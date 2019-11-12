import Store from './store/index'
import speakers from './components/speakers'
import talks from './components/talks'

window.store = new Store('http://localhost:3000/api');

window.onload = () => {
    speakers.loadSpeakers();
    talks.loadTalks();
    
    document.getElementById('mainContianer').removeAttribute('style');

    document.getElementById('saveSpeakerForm').addEventListener('submit', speakers.saveSpeaker);
    document.getElementById('saveTalkForm').addEventListener('submit',talks.saveTalk);

    document.getElementById('addTalkModalBtn').addEventListener('click',()=>{
        speakers.loadSpeakers();
        $('#addTalksModal').modal('show')
    })
}