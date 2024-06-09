export interface UserListDto {
  output: OutputListlDto[];
  HttpStatus: string;
}

export interface OutputListlDto {
  uuid: string;
  emailAddress: string;
  password: string;
  corporateUuid: string;
  fullName: string;
}

export interface UserDetailDto {
  output: OutputDetailDto;
  HttpStatus: string;
}

export interface OutputDetailDto {
  uuid: string;
  emailAddress: string;
  password: string;
  corporateUuid: string;
  roles: Role[];
  fullName: string;
}

export interface addUsersDto {
  emailAddress: string;
  password: string;
  roles?: Role[];
  fullName: string;
}

export interface editUserDto {
  emailAddress: string;
  password: string;
  roles?: Role[];
  fullName: string;
}

export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  CORPORATE_ADMIN = "CORPORATE_ADMIN",
  ADMIN = "ADMIN",
  STAFF = "STAFF",
}
