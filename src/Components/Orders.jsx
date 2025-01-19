import React, { useState } from 'react'

function Orders() {
      const [activeTab, setActiveTab] = useState("all");
    
      const orders = [
        { id: 1, location: "Delhi, India", car: "BMW 5-Series", status: "all" },
        {
          id: 2,
          location: "Delhi, India",
          car: "BMW 5-Series",
          status: "approved",
        },
        {
          id: 3,
          location: "Delhi, India",
          car: "BMW 5-Series",
          status: "completed",
        },
      ];
    
      const filteredOrders = orders.filter(
        (order) => activeTab === "all" || order.status === activeTab
      );
  return (
 <section className="bg-white p-6 rounded-lg shadow-md flex-1">
 <div className="flex justify-between items-center border-b pb-2 mb-4">
   <div className="flex space-x-4 w-full place-content-evenly ">
     <button
       className={`text-sm ${
         activeTab === "all"
           ? "text-red-700 font-bold"
           : "text-red-700"
       }`}
       onClick={() => setActiveTab("all")}
     >
       All Orders
     </button>
     <button
       className={`text-sm ${
         activeTab === "approved"
           ? "text-red-700 font-bold"
           : "text-red-700"
       }`}
       onClick={() => setActiveTab("approved")}
     >
       Approved
     </button>
     <button
       className={`text-sm ${
         activeTab === "completed"
           ? "text-red-700 font-bold"
           : "text-red-700"
       }`}
       onClick={() => setActiveTab("completed")}
     >
       Completed
     </button>
   </div>
 </div>

 <div className="space-y-4">
   {filteredOrders.map((order) => (
     <div
       key={order.id}
       className="flex justify-between items-center border p-2 rounded-md"
     >
       <div>
         <p className="text-sm">{order.location}</p>
         <p className="text-xs text-gray-500">{order.car}</p>
       </div>
       <div className="space-x-2">
         {order.status === "approved" && (
           <span className="text-sm text-green-700">Approved</span>
         )}
         {order.status === "completed" && (
           <span className="text-sm text-green-700">Completed</span>
         )}
       </div>
     </div>
   ))}
 </div>
</section>
)
}

export default Orders