import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-navy-950 pt-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-8xl font-extrabold text-white/10">404</p>
        <h1 className="font-display text-3xl font-bold text-white">Page not found</h1>
        <p className="max-w-md text-navy-300">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
