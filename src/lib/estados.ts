export interface Estado {
  value: string;
  label: string;
}

export const estados: Estado[] = [
  { value: "acre", label: "Acre" },
  { value: "alagoas", label: "Alagoas" },
  { value: "amapa", label: "Amapá" },
  { value: "amazonas", label: "Amazonas" },
  { value: "bahia", label: "Bahia" },
  { value: "ceara", label: "Ceará" },
  { value: "distritoFederal", label: "Distrito Federal" },
  { value: "espiritoSanto", label: "Espírito Santo" },
  { value: "goias", label: "Goiás" },
  { value: "maranhao", label: "Maranhão" },
  { value: "matoGrosso", label: "Mato Grosso" },
  { value: "matoGrossoDoSul", label: "Mato Grosso do Sul" },
  { value: "minasGerais", label: "Minas Gerais" },
  { value: "para", label: "Pará" },
  { value: "paraiba", label: "Paraíba" },
  { value: "parana", label: "Paraná" },
  { value: "pernambuco", label: "Pernambuco" },
  { value: "piaui", label: "Piauí" },
  { value: "rioDeJaneiro", label: "Rio de Janeiro" },
  { value: "rioGrandeDoNorte", label: "Rio Grande do Norte" },
  { value: "rioGrandeDoSul", label: "Rio Grande do Sul" },
  { value: "rondonia", label: "Rondônia" },
  { value: "roraima", label: "Roraima" },
  { value: "santaCatarina", label: "Santa Catarina" },
  { value: "saoPaulo", label: "São Paulo" },
  { value: "sergipe", label: "Sergipe" },
  { value: "tocantins", label: "Tocantins" },
];

// Lista com opção "Todos os Estados" para filtros
export const estadosComTodos: Estado[] = [
  { value: "todos", label: "Todos os Estados" },
  ...estados,
];

