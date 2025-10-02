interface Carrera {
  carrera: string;
}

interface Student {
  id_cuenta: number;
  nombre: string;
  carrera: Carrera;
  credito: number;
}