import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "sortByFilter"
})
export class SortByFilterPipe implements PipeTransform {
  transform(items: any, text: string): any {
    // console.log({items})
    // console.log({text})

    if (!items) return [];
    if (!text) return items;

    /*  items.sort((a: any, b: any) => {
      // console.log({a}, {b})
      return a['name'] > b['name'] ? 1 : -1;
    }); */

    // _.sortBy(items, ["name"]);

    return _.sortBy(items, ["datetime_updated"]);
  }
}
