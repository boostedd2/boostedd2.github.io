import * as React from "react";
import { IconSend2 } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const turnstileRef = React.useRef(null);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    company_website_field: "",
  });

  const [turnstileToken, setTurnstileToken] = React.useState("");
  const [formSending, setFormSending] = React.useState(false);
  const [formSent, setFormSent] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  React.useEffect(() => {
    let widgetId = null;

    const renderTurnstile = () => {
      if (!window.turnstile || !turnstileRef.current) return;

      // Prevent duplicate render
      if (turnstileRef.current.childElementCount > 0) return;

      widgetId = window.turnstile.render(turnstileRef.current, {
        sitekey: "0x4AAAAAACxRC-obP8D6hqgr",
        callback: (token) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        },
      });
    };

    const interval = setInterval(() => {
      if (window.turnstile) {
        renderTurnstile();
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);

      if (window.turnstile && widgetId !== null) {
        try {
          window.turnstile.remove(widgetId);
        } catch (e) {
          // ignore cleanup issues
        }
      }
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormSending(true);
    setFormError("");

    try {
      const response = await fetch("https://silent-rice-93d5.boostedd2.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit form");
      }

      setFormSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        company_website_field: "",
      });
      setTurnstileToken("");
    } catch (error) {
      setFormError(error.message || "Something went wrong. Please try again.");
    } finally {
      setFormSending(false);
    }
  };

  return (
    <>
      {!formSent && (
        <div className="w-full flex items-center">
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="company_website_field"
              value={formData.company_website_field}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />

            <div className="mb-2 md:mb-4 pt-6 md:pt-4">
              <Input
                className="h-[35px] md:h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2 md:mb-4">
              <Input
                className="h-[35px] md:h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 md:mb-6">
              <textarea
                className="h-[80px] md:h-[200px] appearance-none resize-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Message"
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {formError && (
              <p className="text-red-500 text-sm text-center mb-4">
                {formError}
              </p>
            )}

            <div className="flex flex-col items-center justify-center gap-3">
              <button
                className="flex justify-center items-center w-full max-w-[100px] h-[35px] md:h-[45px] bg-white hover:bg-teal-400 text-teal-400 hover:text-white hover-text-effect-plain border border-teal-400 font-bold py-2 px-4 focus:outline-none focus:shadow-outline disabled:opacity-50"
                type="submit"
                disabled={formSending || !turnstileToken}
              >
                {formSending ? "..." : <IconSend2 />}
              </button>

              <div className="h-0 overflow-hidden opacity-0 pointer-events-none">
                <div ref={turnstileRef} />
              </div>            </div>
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
