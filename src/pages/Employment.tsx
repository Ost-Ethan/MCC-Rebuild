import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Employment.css";

type Inputs = {
  first: string;
  last: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  zipCode: number;
  phone: string;
  email: string;
  emailConfirm: string;
  workAuth: string;
  areaPreferred: string;
  daysAvailable: string;
  timeAvailable: string;
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <strong>Name*</strong>
          </label>
        </div>
        <div>
          {" "}
          <input
            placeholder="First"
            {...register("first", { required: true })}
          />
          {errors.first && <span>This field is required</span>}
          <input placeholder="Last" {...register("last", { required: true })} />
          {errors.last && <span>This field is required</span>}
        </div>

        <div>
          {" "}
          <label>
            <strong>Address</strong>
          </label>
        </div>
        <div>
          {" "}
          <input {...register("city")} />
        </div>
        <div>
          <span>Address 1</span>
        </div>
        <div>
          {" "}
          <input {...register("addressTwo")} />
        </div>
        <div>
          <span>Address 2</span>
        </div>

        <div>
          {" "}
          <select defaultValue="MA" {...register("state")}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div>
          <span>State</span>
        </div>

        <div>
          {" "}
          <input {...register("city")} />
        </div>
        <div>
          <span>City</span>
        </div>

        <div>
          {" "}
          <input {...register("zipCode")} />
        </div>
        <div>
          <span>Zip Code</span>
        </div>

        <label>
          <strong>Phone*</strong>
        </label>
        <div>
          {" "}
          <input {...register("phone", { required: true })} />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div>
          <span>Phone*</span>
        </div>

        <label>
          <strong>Email*</strong>
        </label>
        <div>
          {" "}
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <span>Email</span>
        </div>

        <div>
          {" "}
          <input
            type="email"
            {...register("emailConfirm", { required: true })}
          />
          {errors.emailConfirm && <span>This field is required</span>}
        </div>
        <div>
          <span>Confirm Email</span>
        </div>

        <label>
          <strong>Are you authorized to work in the US?*</strong>
        </label>
        <div>
          {" "}
          <select {...register("workAuth", { required: true })}>
            <option value="">Please select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.workAuth && <span>This field is required</span>}
        </div>

        <label>
          <strong>Towns/Area preferred for work *</strong>
        </label>
        <div>
          {" "}
          <input {...register("areaPreferred", { required: true })} />
          {errors.areaPreferred && <span>This field is required</span>}
        </div>

        <label>
          <strong>Days of the week available</strong>
        </label>
        <div>
          {" "}
          <input {...register("daysAvailable")} />
        </div>

        <label>
          <strong>Time of day available</strong>
        </label>
        <div>
          {" "}
          <input {...register("timeAvailable")} />
        </div>

        <div>
          <input type="submit" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
