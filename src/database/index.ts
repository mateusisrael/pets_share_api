interface IUser {
  id: string,
  username: string
  name: string,
  password: string,
  pets?: Array<string>
}

export const users: Array<IUser> = []

export const pets = [
  {
    "id": "pet01",
    "name": "Scott",
  },

  {
    "id": "pet02",
    "name": "Galio"
  },

  {
    "id": "pet03",
    "name": "Maria"
  }
]