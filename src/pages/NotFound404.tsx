import Hero from '../components/Hero';

export default function NotFound404() {
  return (
    <div>
      <Hero
        bg="/background/404-not-found-bg-1.jpg"
        subheading="This page is still under construction!"
        heading=""
        highlight="404 NOT FOUND"
      />
    </div>
  );
}
