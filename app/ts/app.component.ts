import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'my-app',
    templateURL: 'app/html/app.component.html'
   // directives : [PlaylistComponent]
})

export class AppComponent {

    mainHedding = Config.MAIN_HEDDING;
    videos:Array<Video>;


    constructor(){
        this.videos=[
            new Video(1,"First Video" , "First URL" ,"Description1"),
            new Video(2,"Second Video" , "second URL" ,"Description 2")
        ]
    }
}
