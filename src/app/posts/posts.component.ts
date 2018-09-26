import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  editItemForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService) { }

  ngOnInit() {

    // Force page reload - to ensure javascript is reapplied
    if (this.data.postsPageReload) {
      this.data.postsPageReload = false;
      window.location.reload();
      return;
    }

    this.data.postsPageReload = true;

    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );

    // this.loadScript('http://www.some-library.com/library.js');
    this.loadScript('../assets/jscolor.js');

    this.editItemForm = this.formBuilder.group({
        name: [''],
    });
  }


  newColor(info) {
    let fontColorField = document.getElementById('karate');
    // console.log(fontColorField);
    // console.log(fontColorField.getAttribute('style'));
    let style = fontColorField.getAttribute('style');

    let ff1 = style.split("(");
    console.log(ff1);
    let ff2 = ff1[1].split(")");
    console.log(ff2);
    let ff3 = ff2[0].split(",");
    console.log(ff3);

    let fontColor = this.rgb2hex( ff3[0].trim(), ff3[1].trim(), ff3[2].trim() );
    console.log ( fontColor );

    // Send change-color data to content.js
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      alert('Send Message from Angular 6 to content.js: ' + tabs[0].id + ' -- ' + fontColor);
      chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: fontColor});
    });

  }

  applyFilter() {
    console.warn(this.editItemForm.value);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public rgb2hex(red, green, blue) {
    let rgb = blue | (green << 8) | (red << 16);
    return (0x1000000 + rgb).toString(16).slice(1);
}
}
