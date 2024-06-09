import { BsEnvelope, BsInstagram, BsTelephone } from "react-icons/bs";

export const Socials = () => {
  return (
    <div className="flex gap-10 mt-20 text-[#694430] text-2xl">
      <a
        href="mailto:hello@tolumitfp.com"
        target="__blank"
        className="rounded-full p-2 hover:bg-white transition-all"
      >
        <BsEnvelope strokeWidth={0.5} />
      </a>
      <a
        href="tel:+4407424807439"
        target="__blank"
        className="rounded-full p-2 hover:bg-white transition-all"
      >
        <BsTelephone strokeWidth={0.5} />
      </a>
      <a
        href="https://www.instagram.com/tolumitfp?igsh=bG52OGs0OXd4MGFp"
        target="__blank"
        className="rounded-full p-2 hover:bg-white transition-all"
      >
        <BsInstagram />
      </a>
    </div>
  );
};
