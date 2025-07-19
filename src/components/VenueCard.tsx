import { useNavigate } from "react-router-dom";
import {
IndianRupee,
Users,
MonitorPlay,
Sparkles,
Clock,
} from "lucide-react";

interface Venue {
name: string;
price: number;
capacity: string;
screen: string;
decoration: string;
}

interface VenueCardProps {
venue: Venue;
id: string;
}

export const VenueCard = ({ venue, id }: VenueCardProps) => {
const navigate = useNavigate();

const priceNoteMap: { [key: string]: string } = {
Aura: "(for 6 or less people)",
Lunar: "(for 4 or less people)",
Minimax: "(for 8 or less people)",
Couple: "(for 2 people)",
};

const getPriceNote = (name: string) => {
return priceNoteMap[name] || "";
};

return (
<div className="bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-full">
{/* Title and Price Bubble */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<h2 className="text-white text-2xl font-bold">{venue.name}</h2>

php-template
Copy
Edit
    <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full max-w-full">
      <div className="flex items-center gap-1">
        <IndianRupee className="w-4 h-4 flex-shrink-0" />
        <span className="text-lg font-bold">{venue.price}</span>
      </div>
      <span className="text-xs sm:text-sm text-pink-200">
        {getPriceNote(venue.name)}
      </span>
    </div>
  </div>

  {/* Venue Details */}
  <div className="flex flex-col gap-2 text-white text-sm sm:text-base">
    <div className="flex items-center gap-2">
      <Users className="w-4 h-4 text-pink-400" />
      <span>{venue.capacity}</span>
    </div>
    <div className="flex items-center gap-2">
      <MonitorPlay className="w-4 h-4 text-pink-400" />
      <span>{venue.screen}</span>
    </div>
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-pink-400" />
      <span>{venue.decoration}</span>
    </div>
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-pink-400" />
      <span className="font-semibold text-white">Available Slots</span>
    </div>
  </div>

  {/* Book Button */}
  <button
    onClick={() => navigate(`/booking/${id}`)}
    className="mt-auto bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
  >
    Book Now
  </button>
</div>
);
};