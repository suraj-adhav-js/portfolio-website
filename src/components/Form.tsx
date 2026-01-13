import { useForm } from "react-hook-form";
import { RiTelegram2Fill } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "name must be 3 charector long" }),
    email: z.email({ message: "invalid email address" }),
    subject: z.string().min(1, { message: "subject are required" }),
    message: z.string().min(1, { message: "Message are required" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="grid gap-3 lg:gap-7 h-full">
        <div className="flex lg:gap-5 flex-col lg:flex-row w-full gap-2">
          <div className="w-full">
            <input {...register("name")} placeholder="name" type="text" />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="w-full">
            <input
              {...register("email")}
              placeholder="Email Address"
              type="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <input {...register("subject")} placeholder="Subject" type="text" />
          {errors.subject && <p className="error">{errors.subject.message}</p>}
        </div>
        <div  >
          <textarea className="w-full" {...register("message")} placeholder="Message"></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button type="submit" className="w-full lg:w-auto text-accent">
          <div className="gradint-border ">
            <div className="justify-center rounded-lg md:rounded-xl bg-dark-400  flex capitalize p-3 items-center gap-3 ">
              <RiTelegram2Fill />
              send message
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default Form;
