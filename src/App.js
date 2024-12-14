import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md">
        <Navbar />
      </div>

      {/* Main Content with Sidebar and Other Components */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-white h-screen">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          <ProgressBar />
          <div className=" pl-6 mt-0">
            <ClaimForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
