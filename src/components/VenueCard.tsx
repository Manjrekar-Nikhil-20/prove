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
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={venue.image}
          alt={`${venue.name} - Premium private theater venue`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60"></div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex flex-col gap-3 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            {venue.name}
          </h3>
          <div className="self-start px-3 py-2 bg-pink-500/20 text-pink-300 rounded-full">
            <div className="flex items-center gap-1">
              <IndianRupee className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">{venue.price}</span>
            </div>
            <div className="text-xs text-center mt-1 leading-tight">
              {venue.name === 'Aura' && '(for 6 or less people)'}
              {venue.name === 'Lunar' && '(for 4 or less people)'}
              {venue.name === 'Minimax' && '(for 8 or less people)'}
              {venue.name === 'Couple' && '(for 2 people)'}
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Users className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
            <span className="leading-tight">{venue.features[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Monitor className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
            <span className="leading-tight">{venue.screenSize}</span>
          </div>
          {venue.name === 'Couple' ? (
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
              <span className="leading-tight">{venue.features[1]}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-pink-500 flex-shrink-0" />
              <span className="leading-tight">Decoration fee: ₹400</span>
            </div>
          )}
        </div>

        <div className="mb-4 sm:mb-6">
          <h4 className="text-sm sm:text-base text-white font-semibold flex items-center gap-2 mb-3">
            <Clock className="h-4 md:h-5 w-4 md:w-5 text-pink-500" />
            Available Slots
          </h4>
          <div className="space-y-2">
            {venue.slots.map((slot, index) => (
              <div
                key={index}
                className="text-gray-300 text-xs sm:text-sm flex items-center gap-2 bg-gray-700/30 rounded-lg p-2 sm:p-3"
              >
                <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="leading-tight">{slot}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h4 className="text-sm sm:text-base text-white font-semibold flex items-center gap-2">
            <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-pink-500" />
            Features
          </h4>
          <ul className="space-y-2">
            {venue.features.slice(venue.name === 'Couple' ? 2 : 1).map((feature, index) => (
              <li
                key={index}
                className="text-gray-400 text-xs sm:text-sm flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => handleBookNow(venue.id)}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-sm sm:text-base"
          aria-label={`Book ${venue.name} venue now`}
        >
          Book Now
        </button>

        <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 text-center leading-tight">
          {venue.refundPolicy}
        </p>
      </div>
    </div>
  );
};

export default VenueCard;