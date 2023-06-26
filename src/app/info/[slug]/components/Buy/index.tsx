import Link from "next/link";

export default function Buy() {
  return (
    <div>
      <h2 className="text-xl font-bold">Sabias que la mejor inversión eres tú.</h2>
      <p className="my-10">
        Por ahora no tenemos un sistema de pagos, pero puedes contactarnos para
        que te demos más información sobre el curso.
      </p>
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send?phone=51967617166&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20Delab%20%F0%9F%98%80"
      >
        <button
          aria-label="Incribete ya!"
          className="bg-primary text-white font-semibold py-4 px-6 text-sm rounded-full"
        >
          Inscribete ya!
        </button>
      </Link>
    </div>
  );
}
