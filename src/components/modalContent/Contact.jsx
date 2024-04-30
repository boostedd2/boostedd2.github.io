import * as React from "react";
import { IconSend2 } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSending, setFormSending] = React.useState(false);
  const [formSent, setFormSent] = React.useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    setFormSending(true);
    event.preventDefault();

    try {
      const response = await fetch(
        "https://api.bytewise-it.com/contact-us/portfolio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setFormSending(false);
      setFormSent(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormSending(true);
      setFormSent(false);
    }
  };

  return (
    <>
      {formSending || formSent ? null : (
        <div class="w-full flex items-center">
          <form onSubmit={handleSubmit} class="w-full">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{ display: "none" }}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{ display: "none" }}
            />

            <div class="mb-2 md:mb-4 pt-6 md:pt-4">
              <Input
                class="h-[35px] md:h-[35px] md:h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-2 md:mb-4">
              <Input
                class="h-[35px] md:h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-4 md:mb-6">
              <textarea
                class="h-[80px] md:h-[200px] appearance-none resize-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Message"
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="flex justify-center items-center w-full max-w-[100px] h-[35px] md:h-[45px] bg-white hover:bg-teal-400 text-teal-400 hover:text-white hover-text-effect-plain border border-teal-400 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <IconSend2 />
              </button>
            </div>
          </form>
        </div>
      )}

      {formSent && (
        <div>
          <p className="text-3xl text-teal-400 text-center">
            Message sent, speak to you soon!
          </p>
        </div>
      )}
    </>
  );
};

export default Contact;
