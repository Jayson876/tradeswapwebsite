import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../pages/tradesman-profile/components/edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  constructor(private dialog: MatDialog) {}
  openConfirmDialog(id: string) {
    return this.dialog.open(EditProfileComponent, {
      width: '1024px',
      height: '80vh',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        id: id,
      },
    });
  }
}
