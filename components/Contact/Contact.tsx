import { AnimatedSection } from '../AnimatedSection';
import { ContactForm } from '../ContactForm';
import { SectionVariant } from '../SectionVariant';

export function Contact() {
  return (
    <AnimatedSection origin="right">
      <SectionVariant variant spaceY>
        <section className="mx-auto flex max-w-4xl flex-col items-start justify-center gap-8 px-8 lg:px-0">
          <h2 className="text-left text-3xl font-bold md:text-4xl lg:text-5xl">
            Quer bater um papo? <br /> Mande uma mensagem!
          </h2>
          <ContactForm />
        </section>
      </SectionVariant>
    </AnimatedSection>
  );
}
