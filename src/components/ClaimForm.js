import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faLocationDot, faLanguage, faReceipt, faFileContract, faFileLines, faCloudArrowUp, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const ClaimForm = () => {
    const currencies = ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD", "CHF", "CNY"];

    // Separate state variables for each dropdown
    const [contractCurrency, setContractCurrency] = React.useState("USD");
    const [claimCurrency, setClaimCurrency] = React.useState("USD");
    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">File your Claim. (Approx 5 Minutes)</h2>
            {/* Horizontal Line */}
            <div className="border-t border-gray-300 my-4"></div>  {/* Adds a horizontal line */}

            {/* First Row: Claim Value, Place, Language */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <label className="block text-gray-700 text-xl font-semibold mb-1">
                        <FontAwesomeIcon icon={faCalculator} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Claim Value</span>
                    </label>
                    <div className="max-w-xs space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 font-semibold mb-1">Contract Value</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="10,00,00 USD"
                                    className="w-full bg-gray-100 rounded-md p-2"
                                />
                                {/* Dropdown */}
                                <select
                                    value={contractCurrency}
                                    onChange={(e) => setContractCurrency(e.target.value)}
                                    className="bg-gray-100 border-l border-gray-300 p-2 rounded-r-md focus:outline-none"
                                >
                                    {currencies.map((currency, index) => (
                                        <option key={index} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Claim Value */}
                        <div>
                            <label className="block text-sm text-gray-500 font-semibold mb-1">Claim Value</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="10,00,00 USD"
                                    className="w-full bg-gray-100 rounded-md p-2"
                                />
                                {/* Dropdown */}
                                <select
                                    value={claimCurrency}
                                    onChange={(e) => setClaimCurrency(e.target.value)}
                                    className="bg-gray-100 border-l border-gray-300 p-2 rounded-r-md focus:outline-none"
                                >
                                    {currencies.map((currency, index) => (
                                        <option key={index} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="text-red-500 text-sm mt-1">150% of Contract Value</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-xl text-gray-700 font-semibold mb-1">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Place</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Select the place"
                        className="w-full bg-gray-100 rounded-md p-2"
                    />
                    <p className="text-m text-gray-700 pt-6 mb-4">Is the place for the proceeding the one mentioned in the agreement?</p>

                    {/* Radio Buttons */}
                    <div className="flex space-x-6">
                        <label className="flex items-center">
                            <input type="radio" name="place" value="yes" className="mr-2" />
                            Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="place" value="no" className="mr-2" />
                            No
                        </label>
                    </div>

                </div>

                <div>
                    <label className="block text-xl text-gray-700 font-semibold mb-1">
                        <FontAwesomeIcon icon={faLanguage} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Language</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Select the language"
                        className="w-full bg-gray-100 rounded-md p-2"
                    />
                    <p className="text-m text-gray-700 mb-4 pt-6">Is the Language for the proceeding the one mentioned in the agreement?</p>
                    {/* Radio Buttons */}
                    <div className="flex space-x-6">
                        <label className="flex items-center">
                            <input type="radio" name="place" value="yes" className="mr-2" />
                            Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="place" value="no" className="mr-2" />
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 my-4"></div>  {/* Adds a horizontal line */}

            {/* Second Row: Statement, Agreement under Disputes, Additional Documents */}
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <label className="block text-xl text-gray-700 font-semibold mb-1">
                        <FontAwesomeIcon icon={faReceipt} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Statement</span>
                    </label>
                    <div className="space-y-6 bg-blue-100">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Statement"
                                className="w-full bg-blue-100 rounded-md p-2"
                            />
                        </div>
                        <div className="flex items-center justify-center border-dashed border-2 border-blue-100 p-4">
                            <label htmlFor="file-upload" className="cursor-pointer flex items-center justify-center">
                                <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#2563eb" }} />
                                <span className="ml-2 text-blue-600">Upload a pdf</span>
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files)} // Handle the file upload logic here
                            />
                        </div>

                    </div>

                </div>

                <div>
                    <label className="block text-xl text-gray-700 font-semibold mb-1">
                        <FontAwesomeIcon icon={faFileContract} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Agreement under Disputes</span>
                    </label>
                    <div className="flex justify-between space-x-4">
                        {/* First Upload Container */}
                        <div className="flex items-center justify-center border-dashed border-2 bg-blue-100 border-blue-300 p-4 w-1/2">
                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center text-center">
                                <div className="mb-2">
                                    <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#2563eb" }} className="text-3xl" />
                                </div>
                                <div className="ml-2 text-black font-semibold">Upload the Contract</div>
                                <div className="ml-2 text-sm text-blue-600">Max 2MB, PDF</div>
                            </label>
                            <input
                                id="file-upload-contract"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files)} // Handle file upload logic
                            />
                        </div>

                        {/* Second Upload Container */}
                        <div className="flex items-center justify-center border-dashed bg-blue-100 border-blue-300  border-2 p-4 w-1/2">
                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center text-center">
                                <div className="mb-2">
                                    <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#2563eb" }} className="text-3xl" />
                                </div>
                                <div className="ml-2 text-black font-semibold">Arbitration Agreement</div>
                                <div className="ml-2 text-sm text-blue-600">Max 2MB, PDF</div>
                            </label>

                            <input
                                id="file-upload-agreement"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files)} // Handle file upload logic
                            />
                        </div>
                    </div>

                </div>

                <div>
                    <label className="block text-xl text-gray-700 font-semibold mb-1">
                        <FontAwesomeIcon icon={faFileLines} style={{ color: "#74C0FC" }} />
                        <span className="ml-2">Additional Documents</span>
                    </label>
                    <div className="flex justify-between space-x-4">
                        {/* First Upload Container */}
                        <div className="flex items-center justify-center border-dashed border-2 bg-blue-100 border-blue-300  p-4 w-1/2">
                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center text-center">
                                <div className="mb-2">
                                    <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#2563eb" }} className="text-3xl" />
                                </div>
                                <div className="ml-2 text-black font-semibold">Upload the Contract</div>
                                <div className="ml-2 text-sm text-blue-600">Max 2MB, PDF</div>
                            </label>
                            <input
                                id="file-upload-contract"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files)} // Handle file upload logic
                            />
                        </div>

                        {/* Second Upload Container */}
                        <div className="flex items-center justify-center border-dashed p-4 w-1/2">
                            <label htmlFor="file-upload-agreement" className="cursor-pointer">
                                <p><FontAwesomeIcon icon={faCirclePlus} size="2xl" style={{ color: "#2563eb", }} /></p>
                            </label>
                            <input
                                id="file-upload-agreement"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files)} // Handle file upload logic
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClaimForm;
