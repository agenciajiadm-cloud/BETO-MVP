import { ServicePage } from "@/components/ServicePage";

export default function ExperienciaPage() {
  return (
    <ServicePage
      eyebrow="Consultoria UX / CX"
      title="A experiência de compra é o caminho inteiro."
      lead="Não termina no clique. Termina quando o cliente recebe — e volta."
      reads={[
        "Navegação e PDP",
        "Carrinho e checkout",
        "Atendimento e entrega",
        "Pós-venda",
      ]}
      leaves={[
        "Mapa da fricção",
        "CRO objetivo",
        "Fila do que muda primeiro",
      ]}
    />
  );
}
