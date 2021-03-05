import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IuserConnect, User } from 'src/app/shared/models/user';

@Injectable()
export class AuthPagesService {
    // private _fullName: BehaviorSubject<string> = new BehaviorSubject<string>();
    private _fullName: Subject<string> = new BehaviorSubject<string>('');

    public fullName: Observable<string> = this._fullName.asObservable();

    sendUser(fullName: string) {
        this._fullName.next(fullName);
    }

}
