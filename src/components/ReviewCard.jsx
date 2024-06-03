import { star } from "../assets/icons";

export const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]" />

        <p className="mt-6 text-center info-text">{feedback}</p>
        <div className="flex  gap-2.5 mt-3">
            <img src={star} alt="icon"
            width={24}
            height={24}
            className="object-contain m-" />
            <p className="info-text ">{rating}</p>
        </div>
        <h3 className="mt-5 text-3xl font-palanquin font-bold">{customerName}</h3>
    </div>
  )
};

export default ReviewCard;