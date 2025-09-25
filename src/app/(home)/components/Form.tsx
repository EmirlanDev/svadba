import FormClient from "@/components/FormClient";

export default function Form() {
  return (
    <div>
      <div className="container">
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center w-full mt-[50px]"
        >
          <h2 className={`px-4 text-[24px]  tracking-wide  uppercase`}>
            Конокторго анкета
          </h2>
        </div>
        <FormClient />
      </div>
    </div>
  );
}
