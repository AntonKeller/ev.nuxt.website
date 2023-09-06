interface TEmployee {
  id: number,
  avatarImgName: string,
  fullName: string,
  post: string,
  area: string,
}

export const employees: Array<TEmployee> = [
  {
    id: 1,
    avatarImgName: "avatar-1",
    fullName: "Иванов Генадий Викторович",
    post: "Исполнительный директор",
    area: "Moskow",
  },
  {
    id: 2,
    avatarImgName: "avatar-2",
    fullName: "Иванов Генадий Викторович",
    post: "Генеральный директор",
    area: "Moskow",
  },
  {
    id: 3,
    avatarImgName: "avatar-3",
    fullName: "Иванов Генадий Викторович",
    post: "Директор по развитию",
    area: "Moskow",
  },
  {
    id: 4,
    avatarImgName: "avatar-1",
    fullName: "Иванов Генадий Викторович",
    post: "Финансовый директор",
    area: "Moskow",
  },
  {
    id: 5,
    avatarImgName: "avatar-3",
    fullName: "Иванов Генадий Викторович",
    post: "Финансовый директор",
    area: "Moskow",
  },
]
