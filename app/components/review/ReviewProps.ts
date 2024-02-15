import { IReview } from "@/app/interfaces/reviewInterface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IReview
}