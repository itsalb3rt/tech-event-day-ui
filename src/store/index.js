import HttpClient from './modules/HttpClient'

export default class Store {

    /**
     * path = 'http://localhsot/api'
     */
    constructor(apiURL){
        this.apiURL = apiURL;
    }

    actions(){
        var request = new HttpClient();
        var path = this.apiURL;
        
        return {
            async createSpeaker(payload){
                return request.post(`${path}/speakers`,payload);
            },
            async getSpeakers() {
                return request.get(`${path}/speakers`);
            },        
            async getSpeaker(id) {
                return request.get(`${path}/speakers/${id}`);
            },
            async updateSpeaker(id,payload) {
                return request.put(`${path}/speakers/${id}`,payload);
            },
            async deleteSpeaker(id){
                return request.delete(`${path}/speakers/${id}`);
            },
            async createTalk(payload){
                return request.post(`${path}/talks`,payload);
            },
            async getTalks() {
                return request.get(`${path}/talks`);
            },  
        }
    }

}