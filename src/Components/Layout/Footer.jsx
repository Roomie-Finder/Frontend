import phoenix from "../../assets/phoenix.svg";
import FullScreenLoader from "../UI_Components/Icons/Animations";
export default function Footer() {
  let footerLinks = [
    [
      { value: "About", key: 0 },
      { value: "company", key: 1 },
      { value: "Privacy policy ", key: 2 },
      { value: "Refund & cancel", key: 3 },
      { value: "Terms & conditions", key: 4 },
      { value: "license ", key: 5 },
    ],
    [
      { value: "Our services", key: 0 },
      { value: "rent agreement", key: 1 },
      { value: "manage your flat", key: 2 },
      { value: "rent receipt", key: 3 },
    ],
    [
      { value: "Support", key: 0 },
      { value: "Submit ticket", key: 1 },
      { value: "guides", key: 2 },
      { value: "press", key: 3 },
    ],
    [
      { value: "Solutions", key: 0 },
      { value: "Marketing", key: 1 },
      { value: "Analytics", key: 2 },
      { value: "Automation", key: 3 },
    ],
  ];
  return (
    <div className="grid m-10 gap-7 sm:p-15 text-gray-500 bg-white/8 rounded-3xl mb-0">
      <div className="grid gap-2">
        <img src={phoenix} className="h-12 w-auto " />
        <div>
          Roomie Finder connects you with compatible roommates <br /> and your
          ideal living space, making the search for a new home simple, secure,
          and stress-free.
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 pb-2">
        <LinkSection footerLinks={footerLinks}></LinkSection>
      </div>
      <div className="">
        <hr />
        <div className="mt-3">
          © 2026 Roomie-Finder, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

const Section = ({ links }) => {
  return (
    <>
      {links.map((link) => {
        return (
          <div
            key={link.key}
            className={`py-3 ${link.key == 0 ? "font-semibold text-xl" : ""}`}
          >
            {link.value}
          </div>
        );
      })}
    </>
  );
};

const LinkSection = ({ footerLinks }) => {
  return (
    <>
      {footerLinks.map((links) => {
        return (
          <div className="gap-4">
            <Section links={links}></Section>
          </div>
        );
      })}
    </>
  );
};
