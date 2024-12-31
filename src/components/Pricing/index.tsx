import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const pricingPlans = [
  {
    name: "Backend Developer ",
    price: 20,
    frequency: "Per Hour",
    features: [
      { text: "One time contract", included: true },
      { text: "Flexible Contract", included: true },
      { text: "Source Files", included: true },
      { text: "Support", included: true },
      { text: "24/7 Support", included: true },
    ],
  },
  {
    name: "Frontend Developer",
    price: 15,
    frequency: "Per Hour",
    features: [
      { text: "One time contract", included: true },
      { text: "Flexible Contract", included: true },
      { text: "Source Files", included: true },
      { text: "Support", included: true },
      { text: "24/7 Support", included: true },
    ],
  },
  {
    name: "React Native Developer",
    price: 20,
    frequency: "Per Hour",
    features: [
      { text: "One time contract", included: true },
      { text: "Flexible Contract", included: true },
      { text: "Source Files", included: true },
      { text: "Support", included: true },
      { text: "24/7 Support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <main id="pricing" className="p-10">
      <h4 className="text-[#80db66] text-lg tracking-widest uppercase font-medium mt-5 text-center">
        Let’s Start Working
      </h4>
      <h2 className="text-3xl font-semibold sm:text-[50px] lg:text-[70px] my-10 text-center">
        Pricing Plans
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-xl p-5 md:p-10 rounded-xl hover:-translate-y-5 transition-all duration-300"
          >
            <h2 className="border-b-[1px] border-black pb-5 text-2xl text-black font-semibold w-full">
              {plan.name}
            </h2>
            <span className="flex items-center gap-3">
              <h2 className="text-[60px] text-[#80db66] font-bold">${plan.price}</h2>
              <p className="mt-5 text-xl">/ {plan.frequency}</p>
            </span>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className="text-lg flex items-center gap-3 my-2">
                  {feature.included ? (
                    <FcCheckmark />
                  ) : (
                    <RxCross2 className="text-[#4D4C5C]" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="p-2 px-8 tracking-widest my-3 bg-[#80db66] text-white rounded-lg font-semibold cursor-pointer">
              Start Now
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
