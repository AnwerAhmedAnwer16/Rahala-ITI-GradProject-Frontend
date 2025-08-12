import TripCard from "../TripCard/TripCard.js";

const TripFeed = () => {
  const trips = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      tag: "Beach",
      location: "Dahab, Egypt",
      date: "2025-08-12",
      userName: "Ahmed Ali",
      userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "Amazing Trip to Dahab",
      description: "Enjoyed the sea, diving, and the peaceful vibes."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      tag: "Adventure",
      location: "Siwa Oasis, Egypt",
      date: "2025-08-05",
      userName: "Sara Hassan",
      userPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Exploring Siwa",
      description: "A journey into the desert with magical landscapes."
    }
  ];

  return (
    <div>
      {trips.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default TripFeed;
