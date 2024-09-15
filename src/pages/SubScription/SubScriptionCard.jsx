import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const SubscriptionCard = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-2xl shadow-[#14173b] card p-5 space-y-5 w-[18rem]">
      <p>{data.planName}</p>
      <p>
        <span className="text-xl font-semibold">₹{data.price}</span>
        <span>{data.planType}</span>
      </p>
      {data.planType === "ANNUALLY" && (
        <p className="text-green-500">30% off</p>
      )}
      <Button className="w-full">{data.buttonName}</Button>
      <div className="space-y-2">
        {data.features.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircledIcon className="text-green-500" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard; // Ensure this line is here for a default export
