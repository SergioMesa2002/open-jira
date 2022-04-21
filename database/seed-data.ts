interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string,
  createdAt: number
}


export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In-Progress: se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finished: Es un hecho establecido hace demasiado tiempo que un lector.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    }
  ]
};
