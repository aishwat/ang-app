import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from '../../models/user';
import {SignupResponse} from '../../models/signup_response';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private loginUrl = '/login';
  private signupUrl= '/signup';

  constructor(private http:Http){

  }
  private headers = new Headers({'Content-Type': 'application/json'});

	login(email:string,password:string) : Promise<User>{
    return this.http
      .post(this.loginUrl, JSON.stringify({email: email,password:password}), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json().user as User)
                    .catch(this.handleError);
	}
  signup(user:User) : Promise<SignupResponse>{
    return this.http
      .post(this.signupUrl, JSON.stringify(user), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as SignupResponse)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
