import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';
import { AnniePage } from '../annie/annie';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AnniePage;
  tab2Root = NewsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
