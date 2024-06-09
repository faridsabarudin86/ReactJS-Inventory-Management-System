export interface JWTDto {
  uuid: string;
  corporateUuid: string;
  emailAddress: string;
  roles: String[];
  exp: number;
  iat: number;
}
