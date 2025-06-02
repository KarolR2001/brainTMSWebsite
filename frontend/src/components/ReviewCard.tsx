import { motion } from 'framer-motion';

interface ReviewCardProps {
  logoUrl: string;
  companyName: string;
  industry: string;
  quote: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ 
  logoUrl, 
  companyName, 
  industry, 
  quote, 
  rating 
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden p-6 h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">
              {companyName.charAt(0)}
            </span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{companyName}</h3>
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="text-gray-600 italic mb-4">"{quote}"</p>
      </div>
      
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewCard; 