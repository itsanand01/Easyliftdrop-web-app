import Orders from "../Components/Orders";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="h-full w-1/4 bg-gray-800 text-white fixed lg:static lg:w-1/5" />
      
      {/* Main Content */}
      <main className="flex-grow h-full overflow-auto pt-3">
        {/* Header */}
        <header className="bg-red-700 text-white p-2 text-center">
          Go Extra Mile With EasyliftDrop
        </header>
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:gap-10 p-4">
          {/* Form Section */}
          <section className="bg-white p-6 rounded-lg shadow-md flex-1 lg:basis-2/5">
            <div className="w-full flex justify-center pb-4">
              <img
                src="/assets/Frame.png"
                alt="Frame"
                className="max-w-full md:max-w-sm h-auto object-contain rounded-md shadow-lg"
              />
            </div>

            <form className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Service
                </label>
                <select className="w-full border rounded-md p-2">
                  <option>Pick Up Drop</option>
                  <option>Parcel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pick Up Location
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Delhi, India"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Drop Off Location
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Noida, India"
                />
                <h2 className="font-semibold text-right font-sans hover:text-red-600 cursor-pointer underline">
                  Select on map
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input type="date" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Time (Optional)
                  </label>
                  <input type="time" className="w-full border rounded-md p-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Total Passengers
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Passengers Below 6 Years
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button className="bg-red-700 ml-auto text-white rounded-md px-16 py-2">
                  Proceed
                </button>
              </div>
            </form>
          </section>

          {/* Orders Section */}
          <section className="flex-1 lg:basis-3/5">
            <Orders />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
