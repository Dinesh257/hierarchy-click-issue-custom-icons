import { Component, ViewChild } from '@angular/core';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.angular2.grid';
import {  GroupRow } from 'wijmo/wijmo.grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('flex') jsonFlex: wjcGrid.WjFlexGrid;
  treeData = new wjcCore.CollectionView(this.getTreeData());
    expandCollapseNode(workSheetClickedRow: GroupRow) {
      workSheetClickedRow.isCollapsed = !workSheetClickedRow.isCollapsed;
              this.jsonFlex.refresh(true);

    }

  getTreeData() {
    return [ 
      { name: ' One', items: [ 
        { name: ' Intelligible Sky', items: [ 
          { name: 'Theories', length: '2:02' },
          { name: 'Giant Eyes', length: '3:29' },
          { name: 'Jovian Moons', length: '1:02' },
          { name: 'Open Minds', length: '2:41' },
          { name: 'Spacetronic Eyes', length: '3:41' }
        ]} 
      ]},
      { name: ' Two', items: [ 
        { name: 'collapse me and scroll down', items: [ 
          { name: 'Addicted', length: '1:34' },
          { name: 'He Can Only Hold Her', length: '2:22' },
          { name: 'Some Unholy War', length: '2:21' },
          { name: 'Wake Up Alone', length: '3:43' },
          { name: 'Tears Dry On Their Own', length: '1:25' }
        ]} 
      ]},
      { name: ' Three', items: [ 
          { name: 'B', length: '1' },
          { name: 'C', length: '2' },
          { name: 'D', length: '3' },
          { name: 'E', length: '4' },
          { name: 'F', length: '5' }
      ]}
    ]
  }
}
