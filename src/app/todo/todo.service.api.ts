import { Inject } from "@angular/core";
import { Observable, of } from "rxjs";

@Inject
export class TodoService {

    public callEndpoint() {
        console.log("Calling endpoint a");
        
    }
}