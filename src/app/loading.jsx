const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {[...Array(6)].map((_, i) => (
        <div key={i} className="card bg-base-100 shadow-md">

         
          <div className="skeleton h-52 w-full"></div>

         
          <div className="card-body space-y-3">
            <div className="skeleton h-4 w-3/4"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>

            <div className="flex justify-between mt-4">
              <div className="skeleton h-3 w-20"></div>
              <div className="skeleton h-3 w-16"></div>
            </div>

            <div className="mt-4">
              <div className="skeleton h-8 w-24"></div>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Loading;