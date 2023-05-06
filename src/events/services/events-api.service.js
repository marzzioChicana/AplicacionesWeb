import http from '../../core/services/http-common';

export class EventsApiService{
    getAll(){
        return http.get('events');
    }
    getById(id){
        return http.get(`/events/${id}`);
    }
    create(data){
        return http.post('/events', data);
    }
    update(id, data){
        return http.post(`/events/${id}`, data);
    }
    delete(id){
        return http.delete(`/tutorials/${id}`);
    }
    findByTitle(title){
        return http.get(`tutorials?title=${title}`);
    }
}