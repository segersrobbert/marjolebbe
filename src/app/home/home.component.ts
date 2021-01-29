import { Component, AfterViewInit } from '@angular/core'
import * as Flickity from 'flickity'
import { jarallax } from 'jarallax'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.1
    })

    const elems = document.querySelectorAll('.main-carousel')
    elems.forEach(elem => {
      new Flickity(elem, {
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        lazyLoad: true,
        pageDots: false
      })
    })

  }

}
