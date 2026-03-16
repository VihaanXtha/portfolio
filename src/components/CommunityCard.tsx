import BrutalCard from "./BrutalCard";

const CommunityCard = () => {
  return (
    <BrutalCard delay={0.3}>
      <h2 className="text-lg font-black uppercase leading-tight mb-3">
        Community
      </h2>
      <p className="text-sm font-bold">
        Code for Change Member |
        <br />
        Social Impact Advocate |
        <br />
        Tech Community
      </p>
    </BrutalCard>
  );
};

export default CommunityCard;
