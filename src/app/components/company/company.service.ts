import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Company {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  private companies: Company[] = [
    { id: 1, name: "Company A", description: "Tech Company" },
    { id: 2, name: "Company B", description: "Finance Company" },
    { id: 3, name: "Company C", description: "Retail Company" },
  ];

  private companiesSubject = new BehaviorSubject<Company[]>(this.companies);
  companies$ = this.companiesSubject.asObservable();

  getCompanies() {
    return this.companiesSubject.value;
  }

  addCompany(company: Company) {
    this.companies.push({ ...company, id: Date.now() });
    this.companiesSubject.next([...this.companies]);
  }

  deleteCompanies(selectedIds: number[]) {
    this.companies = this.companies.filter((c) => !selectedIds.includes(c.id));
    this.companiesSubject.next([...this.companies]);
  }
}
