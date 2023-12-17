import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  
  styles: []
})
export class DeleteButtonComponent {
  @Input() selectedRows: Set<number> = new Set<number>();
  @Output() deleteRows = new EventEmitter<void>();

  deleteSelectedRows() {
    if (this.selectedRows.size > 0) {
      this.deleteRows.emit();
    }
  }

  
}
