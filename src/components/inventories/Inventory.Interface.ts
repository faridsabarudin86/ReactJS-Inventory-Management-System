export interface InventoryDetailDto {
  output: OutputDetailDto;
  HttpStatus: string;
}

export interface OutputDetailDto {
  uuid: string;
  corporateUuid: string;
  name: string;
  quantity: number;
  manufacturer: string;
  price: number;
}

export interface InventoryListDto {
  output: OutputListDto[];
  HttpStatus: string;
}

export interface OutputListDto {
  uuid: string;
  corporateUuid: string;
  name: string;
  quantity: number;
  manufacturer: string;
  price: number;
}

export interface editInventoryDto {
  name: string;
  manufacturer: string;
  price: number;
  quantity: number;
}

export interface addInventoryDto {
  name: string;
  manufacturer: string;
  price: number;
  quantity: number;
}
