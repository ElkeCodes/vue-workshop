export interface Client {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  city: string;
  zip: string;
}

export const defaultClient: Client = {
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  city: "",
  zip: "",
};
