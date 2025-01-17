import Orders from "../Components/Orders";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex-grow pt-3">
        <header className="bg-red-700 text-white p-2 text-center">
          Go Extra Mile With EasyliftDrop
        </header>
        <div className=" lg:flex gap-10 ">
          <section className="bg-white p-6 col-span-2">
            <div className="top-20 md:left-24 lg:left-32 w-full md:w-auto">
              <img
                src="/assets/Frame.png"
                alt="Frame"
                className="w-full md:w-auto h-auto"
              />
            </div>

            <form className="space-y-3 pt-4 max-w-xl">
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

              <div className="grid grid-cols-2 gap-4">
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

              <div className="grid grid-cols-2 gap-4">
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
              <div className="flex w-full ">
                <button className="bg-red-700 ml-auto text-white rounded-md px-16 py-2">
                  Proceed
                </button>
              </div>
            </form>
          </section>
          <Orders />{" "}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
