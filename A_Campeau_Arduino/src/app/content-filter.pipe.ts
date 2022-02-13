import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentItem: Content[], htype?: string,): Content[] {

    let filter;

    if(!htype){
      filter = contentItem.filter(item => item.type == "" || item.type == null);
    } else {
      filter = contentItem.filter(item => item.type == htype);
    }
    return filter;
  }

}
