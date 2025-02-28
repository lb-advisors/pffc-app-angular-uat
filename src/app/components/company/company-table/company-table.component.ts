import { Component, OnInit } from "@angular/core";
import { Company, CompanyService } from "../company.service";
import { CompanyDialogComponent } from "../company-dialog/company-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from "@angular/material/table";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-company-table",
  standalone: true,
  imports: [
    MatTable,
    MatCheckbox,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
  ],
  templateUrl: "./company-table.component.html",
  styleUrl: "./company-table.component.css",
})
export class CompanyTableComponent implements OnInit {
  displayedColumns: string[] = ["select", "id", "name", "description"];
  dataSource: Company[] = [];
  selectedIds: Set<number> = new Set();

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.companyService.companies$.subscribe((companies) => {
      this.dataSource = companies;
    });
  }

  toggleSelection(id: number, event: any) {
    event.checked ? this.selectedIds.add(id) : this.selectedIds.delete(id);
  }

  deleteSelectedRows() {
    this.companyService.deleteCompanies(Array.from(this.selectedIds));
    this.selectedIds.clear();
  }

  openAddDialog() {
    this.dialog.open(CompanyDialogComponent, { width: "300px" });
  }
}
