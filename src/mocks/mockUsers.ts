interface User {
  id: string
  email: string
  passwordHash: string
  name: string
  role: "admin" | "user" | "editor"
  createdAt: Date
}

const generateUniqueId = (() => {
  const usedIds = new Set()
  return () => {
    let id
    do {
      id = Math.floor(Math.random() * 1000000) // Generate a random number
    } while (usedIds.has(id))
    usedIds.add(id)
    return id +""
  }
})()

export const mockUsers: User[] = [
    {
      id: generateUniqueId(),
      email: "john.doe@example.com",
      passwordHash: "$2a$12$vkLJH.3x/wSZPj5vBQEYluOlSB.Zlz7KuJ1Qm",
      name: "John Doe",
      role: "admin",
      createdAt: new Date("2023-01-15"),
    },
    {
      id: generateUniqueId() as string,
      email: "jane.smith@example.com",
      passwordHash: "$2a$12$4tPxZ5KLZz.rY9Qm1Jd3O.XlLz",
      name: "Jane Smith",
      role: "user",
      createdAt: new Date("2023-02-20"),
    },
    {
      id: generateUniqueId(),
      email: "robert.johnson@example.com",
      passwordHash: "$2a$12$Kj.3xLzQmPp3O.XlLz",
      name: "Robert Johnson",
      role: "editor",
      createdAt: new Date("2023-03-10"),
    },
    {
      id: generateUniqueId(),
      email: "emily.wilson@example.com",
      passwordHash: "$2a$12$vkLJH.3x/wSZPj5vBQEYluOlSB",
      name: "Emily Wilson",
      role: "user",
      createdAt: new Date("2023-04-05"),
    },
    {
      id: generateUniqueId(),
      email: "michael.brown@example.com",
      passwordHash: "$2a$12$4tPxZ5KLZz.rY9Qm1Jd3O",
      name: "Michael Brown",
      role: "editor",
      createdAt: new Date("2023-05-12"),
    },
    {
      id: generateUniqueId(),
      email: "sarah.davis@example.com",
      passwordHash: "$2a$12$placeholderHashSarah",
      name: "Sarah Davis",
      role: "user",
      createdAt: new Date("2023-06-18"),
    },
    {
      id: generateUniqueId(),
      email: "david.miller@example.com",
      passwordHash: "$2a$12$placeholderHashDavid",
      name: "David Miller",
      role: "admin",
      createdAt: new Date("2023-07-22"),
    },
    {
      id: generateUniqueId(),
      email: "linda.garcia@example.com",
      passwordHash: "$2a$12$placeholderHashLinda",
      name: "Linda Garcia",
      role: "user",
      createdAt: new Date("2023-08-30"),
    },
    {
      id: generateUniqueId(),
      email: "james.rodriguez@example.com",
      passwordHash: "$2a$12$placeholderHashJames",
      name: "James Rodriguez",
      role: "editor",
      createdAt: new Date("2023-09-11"),
    },
    {
      id: generateUniqueId(),
      email: "mary.hernandez@example.com",
      passwordHash: "$2a$12$placeholderHashMary",
      name: "Mary Hernandez",
      role: "user",
      createdAt: new Date("2023-10-25"),
    },
    {
      id: generateUniqueId(),
      email: "alex.martinez@example.com",
      passwordHash: "$2a$12$placeholderHashAlex",
      name: "Alex Martinez",
      role: "user",
      createdAt: new Date("2023-11-01"),
    },
    {
      id: generateUniqueId(),
      email: "sophia.gonzalez@example.com",
      passwordHash: "$2a$12$placeholderHashSophia",
      name: "Sophia Gonzalez",
      role: "editor",
      createdAt: new Date("2023-11-05"),
    },
    {
      id: generateUniqueId(),
      email: "william.lopez@example.com",
      passwordHash: "$2a$12$placeholderHashWilliam",
      name: "William Lopez",
      role: "admin",
      createdAt: new Date("2023-11-10"),
    },
    {
      id: generateUniqueId(),
      email: "olivia.perez@example.com",
      passwordHash: "$2a$12$placeholderHashOlivia",
      name: "Olivia Perez",
      role: "user",
      createdAt: new Date("2023-11-15"),
    },
    {
      id: generateUniqueId(),
      email: "james.torres@example.com",
      passwordHash: "$2a$12$placeholderHashJamesT",
      name: "James Torres",
      role: "editor",
      createdAt: new Date("2023-11-20"),
    },
    {
      id: generateUniqueId(),
      email: "emma.flores@example.com",
      passwordHash: "$2a$12$placeholderHashEmma",
      name: "Emma Flores",
      role: "user",
      createdAt: new Date("2023-11-25"),
    },
    {
      id: generateUniqueId(),
      email: "noah.ramirez@example.com",
      passwordHash: "$2a$12$placeholderHashNoah",
      name: "Noah Ramirez",
      role: "admin",
      createdAt: new Date("2023-12-01"),
    },
    {
      id: generateUniqueId(),
      email: "ava.gomez@example.com",
      passwordHash: "$2a$12$placeholderHashAva",
      name: "Ava Gomez",
      role: "user",
      createdAt: new Date("2023-12-05"),
    },
    {
      id: generateUniqueId(),
      email: "liam.reyes@example.com",
      passwordHash: "$2a$12$placeholderHashLiam",
      name: "Liam Reyes",
      role: "editor",
      createdAt: new Date("2023-12-10"),
    },
    {
      id: generateUniqueId(),
      email: "isabella.morales@example.com",
      passwordHash: "$2a$12$placeholderHashIsabella",
      name: "Isabella Morales",
      role: "user",
      createdAt: new Date("2023-12-15"),
    },
    {
      id: generateUniqueId(),
      email: "mason.ortiz@example.com",
      passwordHash: "$2a$12$placeholderHashMason",
      name: "Mason Ortiz",
      role: "admin",
      createdAt: new Date("2023-12-20"),
    },
    {
      id: generateUniqueId(),
      email: "mia.silva@example.com",
      passwordHash: "$2a$12$placeholderHashMia",
      name: "Mia Silva",
      role: "user",
      createdAt: new Date("2023-12-25"),
    },
    {
      id: generateUniqueId(),
      email: "jacob.cruz@example.com",
      passwordHash: "$2a$12$placeholderHashJacob",
      name: "Jacob Cruz",
      role: "editor",
      createdAt: new Date("2023-12-30"),
    },
    {
      id: generateUniqueId(),
      email: "charlotte.rivera@example.com",
      passwordHash: "$2a$12$placeholderHashCharlotte",
      name: "Charlotte Rivera",
      role: "user",
      createdAt: new Date("2024-01-01"),
    },
    {
      id: generateUniqueId(),
      email: "ethan.nguyen@example.com",
      passwordHash: "$2a$12$placeholderHashEthan",
      name: "Ethan Nguyen",
      role: "admin",
      createdAt: new Date("2024-01-05"),
    },
    {
      id: generateUniqueId(),
      email: "amelia.kim@example.com",
      passwordHash: "$2a$12$placeholderHashAmelia",
      name: "Amelia Kim",
      role: "user",
      createdAt: new Date("2024-01-10"),
    },
    {
      id: generateUniqueId(),
      email: "logan.lee@example.com",
      passwordHash: "$2a$12$placeholderHashLogan",
      name: "Logan Lee",
      role: "editor",
      createdAt: new Date("2024-01-15"),
    },
    {
      id: generateUniqueId(),
      email: "harper.park@example.com",
      passwordHash: "$2a$12$placeholderHashHarper",
      name: "Harper Park",
      role: "user",
      createdAt: new Date("2024-01-20"),
    },
    {
      id: generateUniqueId(),
      email: "lucas.choi@example.com",
      passwordHash: "$2a$12$placeholderHashLucas",
      name: "Lucas Choi",
      role: "admin",
      createdAt: new Date("2024-01-25"),
    },
  ]