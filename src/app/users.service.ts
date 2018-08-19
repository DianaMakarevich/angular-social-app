import { Http } from '@angular/http';
import { Injectable } from '../../node_modules/@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: Http) {

    }

    getUsers(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=80&nat=gb')
        .map(function(responce){
            return responce.json();
        })
        .map(responce => responce.results)
        .map(users => {
            return users.map(u => {
                return {
                    name: u.name.first + ' ' + u.name.last,
                    image: u.picture.large,
                    geo: u.location.city + ' ' + u.location.state + u.location.street
                }
            })
        })
    }

    users = [
        {name: 'Name 1'},
        {name: 'Name 2'},
        {name: 'Name 3'},
        {name: 'Name 4'},
        {name: 'Name 5'}
    ]
}