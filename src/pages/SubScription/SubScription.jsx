import SubscriptionCard from "./SubScriptionCard";



const paidPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
];

const annualPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Everything the monthly plan has"
];

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control"
];

const Subscription = () => {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
                <SubscriptionCard
                    data={{
                        planName: "Free",
                        features: freePlan,
                        planType: "FREE",
                        price: 0,
                        buttonName: true ? "Current Plan" : "Get Started"
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Monthly Paid Plan",
                        features: paidPlan,
                        planType: "MONTHLY",
                        price: 799,
                        buttonName: false ? "Current Plan" : "Get Started"
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Annual Paid",
                        features: annualPlan,
                        planType: "ANNUALLY",
                        price: 6711,
                        buttonName: false ? "Current Plan" : "Get Started"
                    }}
                />
            </div>
        </div>
    );
};

export default Subscription;
