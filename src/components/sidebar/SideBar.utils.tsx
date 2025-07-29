import { 
    LayoutDashboard, 
    Users, 
    Clock, 
    Calendar, 
    FileText, 
    Settings,
    BarChart3,
    Shield
  } from "lucide-react";

export const menuItems = [
    {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    active: location.pathname === "/dashboard"
  },
  {
    title: "Funcionários",
    icon: Users,
    href: "/funcionarios",
    active: location.pathname === "/funcionarios"
  },
  {
    title: "Registros de Ponto",
    icon: Clock,
    href: "/registros",
    active: location.pathname === "/registros"
  },
  {
    title: "Espelho Ponto",
    icon: Calendar,
    href: "/espelho-ponto",
    active: location.pathname === "/espelho-ponto"
  },
  {
    title: "Relatórios",
    icon: FileText,
    href: "/relatorios",
    active: location.pathname === "/relatorios"
  },
  {
    title: "Análises",
    icon: BarChart3,
    href: "/analises",
    active: location.pathname === "/analises"
  },
  {
    title: "Dispositivos REP",
    icon: Shield,
    href: "/dispositivos",
    active: location.pathname === "/dispositivos"
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/configuracoes",
    active: location.pathname === "/configuracoes"
  }
]