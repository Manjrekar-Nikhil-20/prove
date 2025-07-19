import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Clock,
  CheckCircle,
  Monitor,
  IndianRupee,
  Sparkles,
} from 'lucide-react';

interface VenueCardProps {
  venue: {
    id: string;
    name: string;
    image: string;
    price: number;
    baseMembers: number;
    screenSize: string;
    decorationFee: number;
    slots: string[];
    features: string[];
    refundPolicy: string;
  };
}

const VenueCard = ({ venue }: VenueCardProps) => {
  const navigate = useNavigate();

  const handleBookNow = (venueId: string) => {
    navigate(`/payment?venue=${venueId}`);
  };

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={venue.image}
          alt={`${venue.name} - Premium private theater venue`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60"></div>
      </div>

      <div className="p-4 md:p-6 flex-1 flex flex-col">
        {/* Venue Name - Centered */}
        <div className="text-center mb-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            {venue.name}
          </h3>
          
          {/* Price Section - Centered */}
          <div className="inline-block px-4 py-3 bg-pink-500/20 text-pink-300 rounded-full">
            <div className="flex items-center justify-center gap-1">
              <IndianRupee className="h-5 w-5 flex-shrink-0" />
              <span className="text-lg sm:text-xl font-bold">{venue.price}</span>
            </div>
            <div className="text-xs sm:text-sm text-center mt-1 leading-tight">
              {venue.name === 'Aura' && '(for 6 or less people)'}
              {venue.name === 'Lunar' && '(for 4 or less people)'}
              {venue.name === 'Minimax' && '(for 8 or less people)'}
              {venue.name === 'Couple' && '(for 2 people)'}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-3 sm:space-y-4 mb-6 flex-1">
          <div className="flex items-start gap-3 text-gray-300">
            <Users className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
            <span className="text-sm sm:text-base leading-relaxed">{venue.features[0]}</span>
          </div>
          <div className="flex items-start gap-3 text-gray-300">
            <Monitor className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
            <span className="text-sm sm:text-base leading-relaxed">{venue.screenSize}</span>
          </div>
          {venue.name === 'Couple' ? (
            <div className="flex items-start gap-3 text-gray-300">
              <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
              <span className="text-sm sm:text-base leading-relaxed">{venue.features[1]}</span>
            </div>
          ) : (
            <div className="flex items-start gap-3 text-gray-300">
              <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
              <span className="text-sm sm:text-base leading-relaxed">Decoration fee: ₹400</span>
            </div>
          )}
        </div>

        {/* Available Slots Section */}
        <div className="mb-6">
          <h4 className="text-base sm:text-lg text-white font-semibold flex items-center gap-2 mb-4">
            <Clock className="h-4 md:h-5 w-4 md:w-5 text-pink-500" />
            Available Slots
          </h4>
          <div className="space-y-2 sm:space-y-3">
            {venue.slots.map((slot, index) => (
              <div
                key={index}
                className="text-gray-300 text-sm sm:text-base flex items-center gap-3 bg-gray-700/30 rounded-lg p-3 sm:p-4"
              >
                <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="leading-relaxed">{slot}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features List Section */}
        <div className="space-y-4 mb-6">
          <h4 className="text-base sm:text-lg text-white font-semibold flex items-center gap-2">
            <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-pink-500" />
            Features
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {venue.features.slice(venue.name === 'Couple' ? 2 : 1).map((feature, index) => (
              <li
                key={index}
                className="text-gray-400 text-sm sm:text-base flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now Button - Always at bottom */}
        <button
          onClick={() => handleBookNow(venue.id)}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 sm:py-4 px-4 rounded-lg transition-colors duration-300 font-bold text-base sm:text-lg mt-auto"
          aria-label={`Book ${venue.name} venue now`}
        >
          Book Now
        </button>

        <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center leading-relaxed">
          {venue.refundPolicy}
        </p>
      </div>
    </div>
  );
};

export default VenueCard;