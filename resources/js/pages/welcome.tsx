import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePage } from "@inertiajs/react";
import AppearanceTabs from "@/components/appearance-tabs";
import { useAppearance } from "@/hooks/use-appearance";

export default function Welcome() {
  const { props } = usePage();
  const user = props.auth?.user;
  const { appearance, updateAppearance } = useAppearance();

  return (
    <div className="bg-background from-white to-slate-100 text-neutral-900 font-sans">
      {/* Hero */}
      <section className="text-foreground min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full-Stack Starter — launch-ready Laravel + React boilerplate
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Dockerized. Tested. Themed. Built to help you start fast and scale with confidence.
        </p>
        <div className="bg-foreground rounded-lg flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href={user ? "/dashboard" : "/login"}>
              {user ? "Explore Starter Dashboard" : "Get Started"}
            </a>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 text-center bg-card">
        <h2 className="text-foreground text-3xl md:text-4xl font-semibold mb-8">
          Everything you need to kick off your next project
        </h2>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-background shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Dockerized</h3>
              <p>Local & production-ready Docker setup with Nginx, PHP, PostgreSQL, Redis & more.</p>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Fully Tested</h3>
              <p>Includes unit tests (PHP, JS), Laravel integration tests, and Dusk E2E flows.</p>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {appearance === "dark" ? (
                  <>Light & <AppearanceTabs onClick={() => updateAppearance("light")} /> Themes</>
                ) : (
                  <><AppearanceTabs onClick={() => updateAppearance("dark")} /> & Dark Themes</>
                )}
              </h3>
              <p className="mt-2">Switch between themes instantly with full Tailwind theming support.</p>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
              <p>Laravel 12, React, Inertia.js, Vite — with clean architecture and TypeScript.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-24 px-6 text-center">
        <h2 className="text-foreground text-3xl md:text-4xl font-semibold mb-6">
          Build faster. Ship smarter. Start now.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href={user ? "/dashboard" : "/login"}>
              {user ? "Go to Dashboard" : "Try the Starter"}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
