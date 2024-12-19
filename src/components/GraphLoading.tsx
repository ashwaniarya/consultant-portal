const GraphLoading = () => {
  return (
    <div className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
      <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="flex items-baseline mt-4 w-full">
        <div className="w-[80%] bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div className="w-[20%] bg-gray-200 rounded-t-lg h-72 ml-2 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default GraphLoading;
