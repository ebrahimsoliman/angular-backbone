import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
})
export class ViewchildComponent implements OnInit {
  @ViewChild('vChild', {static: false}) myInput: ElementRef | undefined;
  @ViewChild('cChild', {static: false}) myContent: ElementRef | undefined;
  dt: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.myInput?.nativeElement.textContent);
      console.log(this.myContent?.nativeElement.textContent);
    }, 2000);
    this.dt = this.route.snapshot.params['id']

  }

}
