"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyrlwwo");
  if (state.succeeded) {
    return (
      <p className="font-semibold text-base mt-4">Thanks for your message!</p>
    );
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xyyrlwwo"
      className="w-full flex flex-col justify-center p-4 sm:p-10 md:p-16 bg-light"
    >
      <input
        className="font-base mb-4 sm:mb-10 border-0 border-b-[1px] border-accent outline-none focus:ring-0 focus:border-accent border-accent/40"
        type="email"
        placeholder="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        type="text"
        placeholder="name"
        name="name"
        className="focus:ring-0 focus:border-accent mb-4 sm:mb-10 border-0 border-b-[1px] outline-none border-accent/40"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <textarea
        rows={3}
        placeholder="message"
        name="message"
        className="focus:border-accent focus:ring-0 mb-4 sm:mb-10 border-0 border-b-[1px] outline-none border-accent/40"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-block self-center w-fit text-base sm:text-xl cursor-pointer hover:text-accent/50 border-b-[1px] px-2 duration-300 transition-all ease-in-out py-1"
      >
        {state.submitting ? "Loading" : "Submit"}
      </button>
    </form>
  );
}

export default ContactForm;
