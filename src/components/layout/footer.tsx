import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold mb-4">Villardonnel</h3>
            <p className="text-sm text-muted-foreground">
              Une commune engagée pour l&apos;avenir.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/politique-confidentialite" className="hover:text-accent">Politique de confidentialité</Link></li>
              <li><Link href="/cgu" className="hover:text-accent">CGU</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Crédits</h4>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Villardonnel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
