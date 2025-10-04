export interface CreatePersonDto {
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone?: string;
  register?: Date;
  active?: boolean;
}

export interface UpdatePersonDto {
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  register?: Date;
  active?: boolean;
}