import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconTool } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconSend2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Experience from "../modalContent/Experience"

export default function NavBlocks() {
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
    setFormSending(true)
    event.preventDefault();

    try {
      const response = await fetch("https://api.bytewise-it.com/contact-us/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setFormSending(false)
      setFormSent(true)

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Error:", error);
      setFormSending(true)
      setFormSent(false)
    }
  };


  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-5 mt-[10px] sm:mt-[20px] w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover-text-effect-nolift cursor-pointer h-[150px] sm:h-full">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconTool size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-15px] sm:top-[-25px]">
                Experience
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="w-[100%] max-w-[1200px] h-full lg:h-[calc(100%_-_20px)] sm:rounded-none px-[20px] md:px-20 focus-visible:outline-none">
          <div className="overflow-y-scroll scrollbar-hide mt-8">
            <DialogClose asChild>
              <div className="absolute right-[15px] top-[15px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>

            <Experience />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover-text-effect-nolift cursor-pointer h-[150px] sm:h-full">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconMail size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-15px] sm:top-[-25px]">
                Contact
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className={`w-[90%] sm:w-[100%] md:max-w-[600px] lg:max-w-[800px] h-[300px] md:h-[525px] sm:rounded-none px-10 md:px-20 focus-visible:outline-none`}>
          <div className="flex jusitfy-end">
            <DialogClose asChild>
              <div className="absolute right-[10px] md:right-[20px] top-[10px] md:top-[20px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>
          </div>

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
                <div class="mb-3 md:mb-6">
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

          {formSent && 
          <div>
            <p className="text-3xl text-teal-400 text-center">Message sent, speak to you soon!</p>
            </div>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
