export enum State {
  PERLIS = "Perlis",
  KEDAH = "Kedah",
  PERAK = "Perak",
  KELANTAN = "Kelantan",
  PENANG = "Pulau Pinang",
  TERENGGANU = "Terengganu",
  SELANGOR = "Selangor",
  NEGERI_SEMBILAN = "Negeri Sembilan",
  MELAKA = "Melaka",
  JOHOR = "Johor",
  PAHANG = "Pahang",
  SARAWAK = "Sarawak",
  SABAH = "Sabah",
  KUALA_LUMPUR = "W.P. Kuala Lumpur",
  PUTRAJAYA = "W.P. Putrajaya",
  LABUAN = "W.P. Labuan",
};

export enum Sex {
  MALE = "male",
  FEMALE = "female",
  BOTH = "both"
};

export enum Race {
  MALAY = "bumi_malay",
  CHINESE = "chinese",
  INDIAN = "indian"
}

export interface IPopulationData {
  state: State | null;
  date: string | null;
  sex: Sex | null;
  age: string | null;
  ethnicity: Race | null;
  population: number | null;
};