export interface IUserDTO {
  id: string,
  username: string
  name: string,
  password: string,
  pets?: Array<string>
}