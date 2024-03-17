import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Employment.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Employment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Send email using emailjs
      await emailjs.send(
        // below is "YOUR_SERVICE_ID"
        "service_wvced9l",
        // below is "YOUR_TEMPLATE_ID"
        "template_o2s41io",
        data,
        // below is "YOUR_USER_ID"/public key
        "Bv07-mPb90fppYjnE"
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div>
      <h1>Employment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input
          placeholder="placeholder"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
}
