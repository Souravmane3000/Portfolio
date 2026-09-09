import { navigation, siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sourav Mane, back to top">
        <span className="wordmark__full">{siteConfig.name}</span>
        <span className="wordmark__short" aria-hidden="true">SM</span>
      </a>

      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
