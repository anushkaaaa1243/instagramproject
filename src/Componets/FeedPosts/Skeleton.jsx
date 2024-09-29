const Skeleton = () => {
  return (
    <div>
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 h-6 w-32 rounded"></div>
        </div>
        <div className="bg-gray-300 h-48  rounded w-96"></div>
      </div>
    </div>
  );
};

export default Skeleton;
