import { IconMail } from "@tabler/icons-react";

const Footer = () => {

    const handleClick = () => {
        const contactCard = document.getElementById("contact-card");
        console.log(11)

        if (contactCard) {
            contactCard.click()
        }
    };

    return (
        <footer className="py-5">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center text-2xl font-semibold mb-10 cursor-pointer hover:text-teal-400 hover-text-effect-plain" onClick={() => handleClick()}>
                    <IconMail size={36} stroke={1.5} className="mr-2" />
                    Get in touch
                </div>
                <div className="text-xs mt-4">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
