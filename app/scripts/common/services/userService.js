'use strict';

export default class UserService{
	constructor($timeout){
        'ngInject';

		this.$timeout = $timeout;
		this.users = [{
			name: 'John',
			email: 'john@gmail.com',
			age: 45,
			pass: 'qwe'
		},{
			name: 'user',
			email: 'user@gmail.com',
			age: 55,
			pass: 'user'
		},{
            name: 'admin',
            email: 'admin@gmail.com',
            age: 55,
            pass: 'admin',
			permission: 'admin'
        }
		];
	}

	addUser(user){
		this.users.push(user);
	}

    saveUser(id, user){
        this.users[id] = user;
    }

	getUsersList(){
		return this.$timeout(()=>{
			return this.users;
		}, 0);

	}

	getUser(id, list){
		if (list){
			return list[id];
		}

		return this.loadUser(id);
	}

	loadUser(id){
		return JSON.parse(JSON.stringify(this.users[id]));
	}

    authorizeAndGetUser(user){
        for (let i = 0; i < this.users.length; i++){
             let storedUser = this.users[i];
             if (user.name === storedUser.name && user.pass === storedUser.pass){
             	this.authorizedUser = storedUser;
             	return storedUser;
			 }
		}
        this.authorizedUser = undefined;
		return undefined;
    }

}