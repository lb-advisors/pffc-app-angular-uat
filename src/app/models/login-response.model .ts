export interface LoginResponse {
  token: string;
  username: string;
  firstName: string;
  lastName: string;
  authorities: Authority[];
}

export interface Authority {
  authority: any;
}
