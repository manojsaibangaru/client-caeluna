import { Briefcase, AtSign, ThumbsUp, Camera } from "lucide-react";

// lucide-react no longer ships trademarked brand glyphs, so we pair each
// platform with a neutral, semantically-close icon for this demo.
export const socialIconMap = {
  LinkedIn: Briefcase,
  Twitter: AtSign,
  Facebook: ThumbsUp,
  Instagram: Camera,
};
