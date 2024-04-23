import ContactForm from "@/src/components/Contact/ContactForm";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Contact me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-fit py-20 sm:py-0 sm:h-[75vh] border-b-[1px] border-accent flex justify-center items-center bg-light text-dark">
      <div className="w-full flex flex-col justify-center text-center items-center px-4 xs:px-10 sm:px-16 mt-2 md:mt-16 bg-light">
        <h2 className="font-thin uppercase text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-accent">
          Drop me a line, Let me know what you think!
          <ContactForm />
        </h2>
      </div>
    </section>
  );
}
