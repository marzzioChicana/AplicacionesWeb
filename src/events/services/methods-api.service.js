import http from '../../core/services/http-common';

export class MethodsApiService{
    getAll(){
        return http.get('methods');
    }
    getById(id){
        return http.get(`/methods/${id}`);
    }
    create(data){
        return http.post('/methods', data);
    }
    update(id, data){
        return http.post(`/methods/${id}`, data);
    }
    delete(id){
        return http.delete(`/methods/${id}`);
    }
}