export default FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
    <div className="text-blue-500 bg-blue-100 p-3 rounded-full mb-4 w-12 h-12 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
