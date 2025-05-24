import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Gratuito",
      price: "0€",
      period: "/7 dias",
      description: "Perfeito para experimentar a plataforma.",
      features: [
        "1 formulário ativo",
        "Até 100 respostas",
        "Funcionalidades básicas",
        "Suporte por email",
      ],
      buttonText: "Plano Atual",
      href: "#",
      current: false,
      popular: false,
    },
    {
      name: "Pessoal",
      price: "9,99€",
      period: "/mês",
      description: "Ideal para profissionais independentes.",
      features: [
        "Até 5 formulários ativos",
        "Respostas ilimitadas",
        "Todas as funcionalidades",
        "Exportação de dados",
        "Suporte prioritário",
      ],
      buttonText: "Plano Atual",
      href: "#",
      current: true,
      popular: true,
    },
    {
      name: "Empresarial",
      price: "29,99€",
      period: "/mês",
      description: "Para empresas e instituições.",
      features: [
        "Formulários ilimitados",
        "Respostas ilimitadas",
        "Todas as funcionalidades",
        "Múltiplos usuários",
        "API de integração",
        "Suporte dedicado",
      ],
      buttonText: "Fazer Upgrade",
      href: "#",
      current: false,
      popular: false,
    },
  ]

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-2xl font-bold text-center">Planos Disponíveis</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out border ${
                plan.current ? "ring-2 ring-primary" : "border-muted"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                    Mais popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {plan.current && <Check className="h-5 w-5 text-primary" />}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="mt-2 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.current ? "outline" : "default"}
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current && <Check className="mr-2 h-4 w-4" />}
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
