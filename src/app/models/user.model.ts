// src/app/models/fish.model.ts

export interface UserGetDto {
  id: number;
  username: string;
  preferredContact: string | null;
  emailAddress: string;
  emailSignature: string;
  phoneNumber: string;
  phoneCarrier: string;
  isCommission: boolean;
  firstName: string;
  lastName: string;
  isEnabled: boolean;
  isLocked: boolean;
  lastLoginAt: string | null;
  loginCount: number;
  failedLoginAttemptsCount: number;
}

export interface UserPostDto {
  username: string;
  password: string;
  preferredContact: string | null;
  emailAddress: string;
  emailSignature: string;
  phoneNumber: string;
  phoneCarrier: string;
  isCommission: boolean;
  firstName: string;
  lastName: string;
  isEnabled: boolean;
  isLocked: boolean;
  loginCount: number;
  failedLoginAttemptsCount: number;
}

export interface UserPatchDto {
  username: string;
  preferredContact: string | null;
  emailAddress: string;
  emailSignature: string;
  phoneNumber: string;
  phoneCarrier: string;
  isCommission: boolean;
  firstName: string;
  lastName: string;
  isEnabled: boolean;
  isLocked: boolean;
}
