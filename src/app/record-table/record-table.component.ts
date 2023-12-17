import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop,DragDropModule , moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent implements OnInit {
  data: any[] = [];
  sortedColumn: string = '';
  isAscending: boolean = true;
  selectedRows: Set<number> = new Set<number>();

  
 
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get<any[]>('./assets/data.json').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sort(column: string) {
    if (column === this.sortedColumn) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortedColumn = column;
      this.isAscending = true;
    }

    this.data.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return this.isAscending ? valueA - valueB : valueB - valueA;
      }
    });
  }

  deleteRecord(index: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.data.splice(index, 1);
    }
  }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  toggleRowSelection(index: number) {
    if (this.selectedRows.has(index)) {
      this.selectedRows.delete(index);
    } else {
      this.selectedRows.add(index);
    }
  }

  isRowSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }

  deleteSelectedRows() {
    if (confirm('Are you sure you want to delete the selected rows?')) {
      const indicesToDelete = Array.from(this.selectedRows);

      indicesToDelete.sort((a, b) => b - a); // Delete rows in reverse order to avoid index shift
      indicesToDelete.forEach((index) => {
        this.data.splice(index, 1);
      });

      // Clear selectedRows set after deletion
      this.selectedRows.clear();
    }
  }
}
