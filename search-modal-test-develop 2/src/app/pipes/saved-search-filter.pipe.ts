import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'savedSearchFilter'
})
export class SavedSearchFilterPipe implements PipeTransform {
  datePipeString: string;

    // TODO: better type implementation (remove String() block)
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }

        return items.filter(item => {
            return Object.keys(item).some(key => {

                // omit keys that are not visible or relative to users
                if (key === 'datetime_updated' || key === 'created_by_id' || key === 'geojson') {
                    return null;
                }

                // format datetime_created value before filtering
                if (key === 'datetime_created') {
                    const itemsDate = new Date(item.datetime_created);
                    this.datePipeString = new DatePipe('en-US').transform(itemsDate, 'MMM d, y');
                    return String(this.datePipeString.trim().toLowerCase()).includes(searchText.trim().toLowerCase());
                }

                if (key === 'result_count') {
                    // remove comma from searchText to match format of key
                    const valueOfKey = item[key].toString();
                    const strRemoveComma = searchText.replace(/,/g, '');
                    return valueOfKey.includes(strRemoveComma);
                }

                return String(item[key])
                    .trim()
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase());
            });
        });
    }
}
