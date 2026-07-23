

// import React from "react";
// import { MapPin, Clock, Phone } from "lucide-react";
// import { useForm } from "react-hook-form";

// const features = [
//   {
//     icon: MapPin,
//     title: "Address",
//     description: "Near Bus Stand, Hoshiarpur, Punjab, India",
//   },
//   {
//     icon: Clock,
//     title: "Opening Time",
//     description: "Mon – Sun: 8:00 AM – 10:00 PM",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     description: "+91 98765 43210",
//   },
// ];

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <section className="w-full bg-[#6B4637] px-6 py-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h3 className="text-lg font-semibold text-[#D9A441]">
//               Get in Touch
//             </h3>

//             <h2
//               className="mt-4 text-4xl md:text-5xl font-semibold text-[#F8F4EF]"
//               style={{ fontFamily: "Cardo, serif" }}
//             >
//               We'd Love to Hear From You
//             </h2>

//             <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#DDD2CA]">
//               Have questions, feedback, or a special request? Fill out the form
//               below, and our team at The Coffee House will get back to you as
//               soon as possible.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block mb-3 font-semibold text-[#F8F4EF]">
//                 Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 {...register("name", {
//                   required: "Name is required",
//                   minLength: {
//                     value: 3,
//                     message: "Name must be at least 3 characters",
//                   },
//                   pattern: {
//                     value: /^[A-Za-z\s]+$/,
                   
//                   },
//                 })}
//                 className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#dccfbf] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
//               />

//               {errors.name && (
//                 <p className="text-[#D9A441] mt-2 text-sm">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block mb-3 font-semibold text-[#F8F4EF]">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+\.\S+$/,

//                     },
//                   })}
//                   className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
//                 />

//                 {errors.email && (
//                   <p className="text-[#D9A441] mt-2 text-sm">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block mb-3 font-semibold text-[#F8F4EF]">
//                   Phone
//                 </label>

//                 <input
//                   type="tel"
//                   placeholder="+91 98765 43210"
//                   {...register("phone", {
//                     required: "Phone number is required",
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: "Enter a valid 10-digit phone number",
//                     },
//                   })}
//                   className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
//                 />

//                 {errors.phone && (
//                   <p className=" text-[#E8A44D] mt-2 text-sm">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block mb-3 font-semibold text-white">
//                 Message
//               </label>

//               <textarea
//                 rows={6}
//                 placeholder="Tell us what's on your mind..."
//                 {...register("message", {
//                   required: "Message is required",
//                   minLength: {
//                     value: 10,
//                     message: "Message should be at least 10 characters",
//                   },
//                 })}
//                 className="w-full resize-none rounded-2xl  border  border-gray-100 border-white/10 px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#D9A441]"
//               />

//               {errors.message && (
//                 <p className="text-[#E8A44D] mt-2 text-sm">
//                   {errors.message.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full rounded-2xl bg-[#D9A441] py-5 text-xl font-semibold text-[#3B241B] hover:bg-[#C8942F] transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Keep your second (Map & Contact Details) section exactly as it is */}
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

const features = [
  {
    icon: MapPin,
    title: "Address",
    description: "Near Bus Stand, Hoshiarpur, Punjab, India",
  },
  {
    icon: Clock,
    title: "Opening Time",
    description: "Mon – Sun: 8:00 AM – 10:00 PM",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91 98765 43210",
  },
];

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setSuccessMessage(
      "Thank you! Your message has been  sent successfully ."
    );

    reset();
  };

    

    const clearSuccessMessage = () => {
  if (successMessage) {
    setSuccessMessage("");
  }
};


  return (
    <>
      <section className="w-full bg-[#6B4637] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg font-semibold text-[#D9A441]">
              Get in Touch
            </h3>

            <h2
              className="mt-4 text-4xl md:text-5xl font-semibold text-[#F8F4EF]"
              style={{ fontFamily: "Cardo, serif" }}
            >
              We'd Love to Hear From You
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#DDD2CA]">
              Have questions, feedback, or a special request? Fill out the form
              below, and our team at The Coffee House will get back to you as
              soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-3 font-semibold text-[#F8F4EF]">
                Name
              </label>
<input
  type="text"
  placeholder="Your full name"
  onChange={clearSuccessMessage}
  {...register("name", {
    required: "Name is required",
    minLength: {
      value: 3,
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
     
    },
  })}
  className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
/>

              {errors.name && (
                <p className="mt-2 text-sm text-[#D9A441]">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-3 font-semibold text-[#F8F4EF]">
                  Email
                </label>

                <input
  type="email"
  placeholder="you@example.com"
  onChange={clearSuccessMessage}
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Enter a valid email address",
    },
  })}
  className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
/>

                {errors.email && (
                  <p className="mt-2 text-sm text-[#D9A441]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-3 font-semibold text-[#F8F4EF]">
                  Phone
                </label>

                <input
  type="tel"
  placeholder="+91 98765 43210"
  onChange={clearSuccessMessage}
  {...register("phone", {
    required: "Phone number is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Enter a valid 10-digit phone number",
    },
  })}
  className="w-full rounded-2xl border border-gray-100 bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
/>

                {errors.phone && (
                  <p className="mt-2 text-sm text-[#D9A441]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-3 font-semibold text-[#F8F4EF]">
                Message
              </label>

              <textarea
  rows={6}
  placeholder="Tell us what's on your mind..."
  onChange={clearSuccessMessage}
  {...register("message", {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message should be at least 10 characters",
    },
  })}
  className="w-full resize-none rounded-2xl  border  border-gray-100 px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#D9A441]"
/>

              {errors.message && (
                <p className="mt-2 text-sm text-[#D9A441]">
                  {errors.message.message}
                </p>
              )}
            </div>

           

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#D9A441] py-5 text-xl font-semibold  border-gray-100/10 transition-all duration-300 hover:bg-[#C8942F]"
            >
              Send Message
            </button>
             {/* Success Message */}
            {successMessage && (
              <div className="rounded-2xl border hover:border-[#D9A441]  border-gray-100/10 px-6 py-4 text-center text-[#F8F4EF] font-medium">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
