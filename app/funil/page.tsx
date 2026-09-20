import { ServicePage } from "@/components/ServicePage";

export default function FunilPage() {
  return (
    <ServicePage
      eyebrow="Consultoria de funil de vendas"
      title="Lead sem operação é custo."
      lead="Captação, qualificação e venda precisam se falar."
      reads={[
        "Origem do lead",
        "CRM e jornada",
        "Handoff comercial",
        "O indicador que importa",
      ]}
      leaves={[
        "Funil desenhado",
        "Gargalos nomeados",
        "Rotina que o time cumpre",
      ]}
    />
  );
}
