import { useState } from "react";
import axios from 'axios';


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email) {
      setMessage("Please enter an email address")
      return;
    }

    try{
      const res = await axios.post("https://yourfavoriteinfluencer-backend.onrender.com/subscribe", {email})
      setMessage(res.data.message);
      setEmail("");
    } catch(err) {
      // if(err.response?.data?.error) {
      //   setMessage(err.response.data.error)
      // } else {
      //   setMessage("Something went wrong")
      // }
      setMessage(err.response?.data?.error || "Something went wrong");
    }

  }

  return (
    <>
    <hr className="text-gray-300" />
    <section className="bg-[#f4f9f6] py-15 px-8 text-center">
      <h2 className=" md:text-4xl lg:text-3xl font-bold text-[#ff8282] mb-4">
        Newsletter
      </h2>
      <p className=" text-[11px] md:text-xl lg:text-lg text-[#70c196] mb-6 mx-auto">
        Join my circle<br />
        <span className="">
          Monthly updates, personal notes, and travel inspiration – straight<br/> to your inbox
        </span>
      </p>
      <form 
        onSubmit={handleSubmit}
      className="flex flex-row justify-center text-[11px] md:text-[17px] lg:text-[16px] items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full md:w-2/3 px-4 py-3 border border-[#70c196] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9cd3b6]"
        />
        <button
          type="submit"
          className="bg-[#e64c4c] hover:bg-[#e86363] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-gray-600" >{message}</p>}
    </section>
    </>
  );
};

export default Newsletter;
