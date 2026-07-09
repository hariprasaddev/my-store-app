import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_v97uc58",
    "template_og1lwku",
    order,
    "6zl2ZXvMWTRrdguZH",
  );
};