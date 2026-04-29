import React from "react";
import { Card } from "./ui/card.tsx";
import ProgressBar from "./ui/progressBar.tsx";
import { Button } from "./ui/button.tsx";
import { useNavigate } from "react-router-dom";

interface FundraisingCardProps {
  title: string;
  description: string;
  raisedAmount: number;
  goalAmount: number;
  imageUrl: string;
}

const FundraisingCard: React.FC<FundraisingCardProps> = ({
  title,
  description,
  raisedAmount,
  goalAmount,
  imageUrl,
}) => {
  console.log(raisedAmount);
  console.log(goalAmount);
  const safeRaisedAmount = Number(raisedAmount) || 0;
  const safeGoalAmount = Number(goalAmount) || 1; // Avoid division by
  const percentageRaised = Math.round(
    (safeRaisedAmount / safeGoalAmount) * 100
  );
  const navigate = useNavigate();
  return (
    <Card>
      <div className="md:flex-row shadow-md overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <ProgressBar value={raisedAmount} max={goalAmount} />
            <div className="flex justify-between mt-2">
              <span className="text-sm font-semibold text-gray-600">
                ₹ {safeRaisedAmount.toLocaleString("en-IN")} raised
              </span>
              <span className="text-sm font-semibold text-gray-600">
                ₹ {safeGoalAmount.toLocaleString("en-IN")} goal
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-green-500">
              {percentageRaised}% funded
            </span>
            <Button
              className="bg-orange-200 hover:bg-orange-400"
              onClick={() => {
                const formattedTitle = title.replace(/\s+/g, "-").replace(/'/g, "").toLowerCase();
                navigate(`/support/${formattedTitle?.toLowerCase()}`);
              }}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FundraisingCard;
