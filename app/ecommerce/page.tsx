import { ServicePage } from "@/components/ServicePage";

export default function EcommercePage() {
  return (
    <ServicePage
      eyebrow="Consultoria de e-commerce"
      title="A loja é um sistema. Não um site com pagamento."
      lead="Da vitrine ao pedido na casa do cliente."
      reads={[
        "Plataforma e mix",
        "Marketplace e estoque",
        "PDP, frete e financeiro",
        "Recompra",
      ]}
      leaves={[
        "Diagnóstico da operação",
        "Prioridades",
        "Backlog",
        "Ritmo de execução com o time",
      ]}
    />
  );
}
