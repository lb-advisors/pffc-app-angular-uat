// src/app/models/fish.model.ts

export interface VendorGetDto {
  id: number;
  vendorName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phoneNumber: string;
  vendorRepName: string;
  vendorRepPhoneNumber: string;
  vendorRepEmailAddress: string;
  accountingName: string;
  accountingPhoneNumber: string;
  accountingEmailAddress: string;
  creditTermsDays: number;
  creditLimitAmount: number;
  vendorNotes: string;
  logisticsNotes: string;
  accountingNotes: string;
  lastAgingRequest: string | Date;
}

export interface VendorPostDto {
  vendorName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phoneNumber: string;
  vendorRepName: string;
  vendorRepPhoneNumber: string;
  vendorRepEmailAddress: string;
  accountingName: string;
  accountingPhoneNumber: string;
  accountingEmailAddress: string;
  creditTermsDays: number;
  creditLimitAmount: number;
  vendorNotes: string;
  logisticsNotes: string;
  accountingNotes: string;
  lastAgingRequest: string | Date;
}

export interface VendorPatchDto {
  vendorName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phoneNumber: string;
  vendorRepName: string;
  vendorRepPhoneNumber: string;
  vendorRepEmailAddress: string;
  accountingName: string;
  accountingPhoneNumber: string;
  accountingEmailAddress: string;
  creditTermsDays: number;
  creditLimitAmount: number;
  vendorNotes: string;
  logisticsNotes: string;
  accountingNotes: string;
  lastAgingRequest: string | Date;
}
