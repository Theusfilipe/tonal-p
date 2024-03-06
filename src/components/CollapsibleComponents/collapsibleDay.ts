import { CollapsibleHours } from "./CollapsibleHours"

export class CollapsibleDay {
  collapsibleHours: CollapsibleHours[];

  constructor(collapsibleHours: CollapsibleHours[]) {
    this.collapsibleHours = collapsibleHours;
  }


  addCollapsibleHours(collapseStart: number, collapseEnd: number){
    const colHours = new CollapsibleHours(collapseStart,collapseEnd);
    this.collapsibleHours.push(colHours);
  }

  find(callback: (hours: CollapsibleHours) => boolean): CollapsibleHours | undefined {
    for (let i = 0; i < this.collapsibleHours.length; i++) {
      if (callback(this.collapsibleHours[i])) {
        return this.collapsibleHours[i];
      }
    }
    return undefined;
  }

}