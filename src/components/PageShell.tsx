import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (<><Header /><main id="contenu">{children}</main><Footer /></>);
}
