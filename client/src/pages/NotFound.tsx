import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="academy-site flex min-h-screen w-full items-center justify-center bg-[#fafbf8]">
      <Card className="mx-4 w-full max-w-lg border border-[#1d4b32]/10 bg-white shadow-[0_24px_70px_rgba(27,69,44,0.1)]">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#f2c94c]/20 animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-[#1e633c]" />
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold text-[#173c2b]">404</h1>

          <h2 className="mb-4 text-xl font-semibold text-[#173c2b]">
            Página no encontrada
          </h2>

          <p className="mb-8 leading-relaxed text-[#526e5b]">
            La página que buscas no existe o se ha movido.
            <br />
            Puedes volver al inicio y seguir explorando la academia.
          </p>

          <div id="not-found-button-group" className="flex justify-center">
            <Button asChild className="rounded-full bg-[#1e633c] px-6 text-white transition hover:bg-[#173c2b]">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
