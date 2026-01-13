import PageHeading from "../PageHeading";
import Form from "../Form";

const Contact = () => {
  return (
    <>
      <PageHeading>Contact</PageHeading>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.31417576144!2d72.91861583389952!3d19.213873535905098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1765244811597!5m2!1sen!2sin"
          className="w-full h-full rounded-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="">
          <h2 className="mt-10 mb-5 text-lg lg:text-2xl  font-semibold">
            contact form
          </h2>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
