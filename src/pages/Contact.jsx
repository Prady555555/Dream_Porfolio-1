import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import Alert from "../components/Alert";
import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setcurrentAnimation("walk");
  };
  const handleBlur = () => {
    setcurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setcurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prady",
          from_email: form.email,
          to_email: "pradeepdurai2002@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "your message send sucessfully",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setcurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((e) => {
        setisLoading(false);
        console.log(e);
        setcurrentAnimation("idle");
        showAlert({
          show: true,
          text: "your message is not send sucessfully",
          type: "success",
        });
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col ">
        <h1 className="head-text">Get In Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Prady"
              required
              value={form.name}
              // onChange={(e) => {
              //   setForm(e.target.value);
              // }}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email ID
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Prady@gmail.com"
              required
              value={form.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Talk with me "
              required
              value={form.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending...." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            near: 0.1,
            far: 1000,
            fov: 75,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
