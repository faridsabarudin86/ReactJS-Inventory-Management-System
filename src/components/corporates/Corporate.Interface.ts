export interface CorporateDetailDto {
  output: OutputDetailDto;
  HttpStatus: string;
}

export interface OutputDetailDto {
  name: string;
  location: string;
}

export interface CorporateListDto {
  output: OutputListDto;
  HttpStatus: string;
}

export interface OutputListDto {
  uuid: string;
  name: string;
  location: string;
}

export interface addCorporateDto {
  name: string;
  location: string;
}

export interface editCorporateDto {
  name: string;
  location: string;
}
