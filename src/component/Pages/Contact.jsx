import React from "react";
import contact from "../../assets/contact.png"


const Contact = () => {
  return (
    <div className="pb-16">
         <div>
        <h1 className="text-[40px] p-[30px] text-center font-semibold text-black">Get In Touch</h1>
      </div>
      <div className="max-w-[1024px] mx-auto">
        <div className="flex flex-wrap">
         {/* ---------------------left side--------- */}
          <div className="w-full sm:w-[50%] p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label  className="block text-gray-600 font-semibold">Name:</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold">Email:</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold">Phone:</label>
                  <input type="text" id="phone number" name="PhoneNumber" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600 font-semibold">Message:</label>
                  <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
              </form>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="w-full sm:w-[50%] p-4">
            <img src={contact} className="w-full h-auto"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};
 


export default Contact;
