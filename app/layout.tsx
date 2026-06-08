export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/habitaciones", label: "Habitaciones" }, { href: "/huespedes", label: "Huespedes" }, { href: "/pagos", label: "Pagos" }, { href: "/reservas", label: "Reservas" }, { href: "/servicios", label: "Servicios" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Hotel", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Hotel">{children}</ProtectedShell>
      </body>
    </html>
  );
}
