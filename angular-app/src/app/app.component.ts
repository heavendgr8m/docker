import { Component, OnInit } from "@angular/core";
import { ServiceService } from "./service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "todo-app";
  constructor(public api: ServiceService) { }
  ngOnInit() {
    this.api.connect().subscribe(res => {
      console.log(res);
    })
  }
}
