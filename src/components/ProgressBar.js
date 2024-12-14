import React from "react";

const ProgressBar = () => {
    const steps = [
        { name: "Preliminary", time: "Approx 5 min" },
        { name: "Your Details", time: "Approx 5 min" },
        { name: "KYC", time: "Approx 5 min" },
        { name: "Parties", time: "Approx 5 min" },
        { name: "Claim", time: "Approx 5 min" },
        { name: "Review", time: "Approx 5 min" },
        { name: "Payment", time: "Approx 5 min" },
    ];

    const activeStep = 4; // Example: Assume the 4th step is active

    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center py-6 px-8 bg-gray-100 rounded-md overflow-x-auto">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                        {/* Step Name */}
                        <div className="text-xs md:text-sm text-gray-600 text-center mb-2">
                            {step.name}
                        </div>

                        {/* Circle for each step */}
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${index <= activeStep
                                ? "bg-blue-600 text-white"
                                : "bg-gray-300 text-gray-600"
                                }`}
                        >
                            {index + 1}
                        </div>

                        {/* Approximate Time */}
                        <div className="text-xs text-gray-500 mt-2">
                            {step.time}
                        </div>
                    </div>

                    {/* Line between steps */}
                    {index < steps.length - 1 && (
                        <div
                            className={`flex-1 h-1 mx-2 md:mx-4 
            ${index < activeStep - 1
                                    ? "bg-blue-600"  // Completed step: Blue solid line
                                    : index === activeStep - 1
                                        ? "border-b-2 border-blue-600 border-dashed"  // Active step: Blue dashed line
                                        : "border-b-2 border-gray-300"}  // Remaining step: Gray solid line
        `}
                        />
                    )}

                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;
