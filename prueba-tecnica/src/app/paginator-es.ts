
import {Injectable} from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = 'Servicios por página';
  nextPageLabel     = 'Siguiente';
  previousPageLabel = 'Anterior';
  firstPageLabel = 'Primera página'
  lastPageLabel = 'Última página'

  getRangeLabel = function (page: number, pageSize: number, length: number) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;

    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
  };
}
