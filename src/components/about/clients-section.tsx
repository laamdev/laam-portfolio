import Image from "next/image"

import { Heading } from "@/components/global/heading"

const clients = [
  {
    id: 1,
    name: "Ubiqual",
    logo: "/images/clients/ubiqual-logo.webp",
  },
  {
    id: 2,
    name: "BlueFin Aviation",
    logo: "/images/clients/bluefin-aviation-logo.webp",
  },
  {
    id: 3,
    name: "Galería Canalejas",
    logo: "/images/clients/galeria-canalejas-logo.webp",
  },
  {
    id: 4,
    name: "Mercado de Prosperidad",
    logo: "/images/clients/mercado-prosperidad-logo.webp",
  },
]

export const ClientsSection = async () => {
  return (
    <section>
      <div className="border-y p-5">
        <Heading>Clients</Heading>
      </div>
      <div className="grid-cols-5 grid">
        {clients.map((client) => (
          <div key={client.id} className="relative aspect-square border-r">
            <Image src={client.logo} alt={client.name} fill />
          </div>
        ))}
      </div>
    </section>
  )
}
