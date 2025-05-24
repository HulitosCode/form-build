import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { 
  Sparkles, FileText,
  Building,
  BarChart,
  Share2,
  LayoutDashboard,
  Download,
  ArrowRightCircle,
  LogIn, 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubscriptionPage from "./dashboard/_components/subscription";

const funcionalidades = [
  {
    icon: FileText,
    title: 'Formulários Personalizados',
    description: 'Crie formulários totalmente personalizados com diversos tipos de campos e opções.'
  },
  {
    icon: Building,
    title: 'Gestão de Instituições',
    description: 'Organize seus formulários por instituições e gerencie permissões de acesso.'
  },
  {
    icon: BarChart,
    title: 'Análise de Respostas',
    description: 'Visualize e analise as respostas recebidas com gráficos e estatísticas.'
  },
  {
    icon: Share2,
    title: 'Compartilhamento Fácil',
    description: 'Compartilhe seus formulários através de links, QR codes ou incorpore em seu site.'
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Intuitivo',
    description: 'Gerencie todos os seus formulários e visualize estatísticas em um dashboard intuitivo.'
  },
  {
    icon: Download,
    title: 'Exportação de Dados',
    description: 'Exporte as respostas em diversos formatos para análise externa.'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fixo e responsivo */}
      <header className="bg-white border-b border-gray-100 py-4 fixed top-0 w-full z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-500">MozForms</h1>
          <nav className="hidden md:flex space-x-8 text-muted-foreground">
            <Link href="#" className="hover:text-green-400">Funcionalidades</Link>
            <Link href="#" className="hover:text-green-400">Preços</Link>
            <Link href="#" className="hover:text-green-400">Demonstração</Link>
            <Link href="#" className="hover:text-green-400">Contactos</Link>
          </nav>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-green-500">
                  Sign In
                  <LogIn className="ml-2" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Conteúdo principal com padding top ajustado */}
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-20 text-center space-y-6">
          <Button size="sm" className="bg-green-100 rounded-full text-green-400 font-medium">
            <Sparkles />
            30 dias grátis para testar
            <Sparkles />
          </Button>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-zinc-900">
            Crie formulários <br />de feedback poderosos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plataforma completa para criar, gerenciar e analisar formulários de feedback para sua instituição ou empresa.
          </p>

          <SignedIn>
            <Button asChild size="lg">
              <Link href="/dashboard/forms/create">Criar um Formulário</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button className="bg-green-500">
                Começar teste grátis
                <ArrowRightCircle className="ml-2" />
              </Button>
            </SignInButton>
          </SignedOut>

          <div className="flex justify-center">
            <Image
              src="/imghome.png"
              alt="Preview MozForms"
              width={1200}
              height={600}
              className="w-full max-w-4xl h-auto rounded-lg"
            />
          </div>
        </div>
      </main>

      <div className="text-center px-4">
        <h2 className="text-3xl font-extrabold mb-2">Funcionalidades Poderosas</h2>
        <p className="text-muted-foreground mb-8">
          Tudo o que você precisa para criar e gerenciar formulários de feedback eficientes.
        </p>
      </div>

      <div className="flex justify-center px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {funcionalidades.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border border-green-400 transition duration-700 ease-in-out transform hover:scale-[1.03] hover:shadow-xl">
              <CardHeader>
                <Icon className="h-6 w-6 text-green-400" />
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                <p className="text-zinc-900 font-bold text-lg">{title}</p>
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <SubscriptionPage />
    </div>
  );
}
